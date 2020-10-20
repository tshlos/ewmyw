class Api::V1::FavoritesController < ApplicationController
    include CurrentUserConcern

    def token
        body = {
            grant_type: "client_credentials",
            client_id: Rails.application.credentials.spotify[:client_id],
            client_secret: Rails.application.credentials.spotify[:client_secret]
        }

        token = RestClient::Request.execute(
            :url => 'https://accounts.spotify.com/api/token', 
            :method => :post, 
            :payload => body,
            :verify_ssl => false
        )
        JSON.parse(token)["access_token"]
    end
    

    def index
        favorites = Favorite.includes(:podcast).where(user_id: @current_user.id)
        favorites_array = favorites.map { |fav| fav.podcast } 
        spotify_ids = favorites_array.map { |id| id.podcast_id }
        ids = spotify_ids.join(",")

        header = {
            Authorization: "Bearer " + self.token
        }
        shows = RestClient::Request.execute(
            :url => "https://api.spotify.com/v1/shows/?ids=#{ids}&market=US",
            :method => :get, 
            :verify_ssl => false, 
            :headers => header
        )
        response = JSON.parse(shows)
        render json: response, except: shows["available_markets"]

        # render json: favorites
    end

    def show
        favorite = Favorite.find_by(params[:user_id])
        if favorite
            render json: favorite
        else
            render json: { message: 'oops, try again' }
        end
    end

    def create
        podcast = Podcast.find_by(podcast_id: params[:podcast_id])
        if !podcast 
            podcast = Podcast.create(podcast_id: params[:podcast_id])
        end
        # byebug
        
        favorite = Favorite.find_by(podcast_id: podcast.id)
        if !favorite 
            Favorite.create!(
                user_id: @current_user.id,
                podcast_id: podcast.id,
            )
        end
        render json: favorite
    end

    def destroy 
        favorite = Favorite.find_by(params[:podcast_id])
        favorite.destroy
        render json: favorite
    end

    private
    
    def favorite_params
        params.require(:favorite).permit(:id, :podcast_id, :user_id)
    end

end
