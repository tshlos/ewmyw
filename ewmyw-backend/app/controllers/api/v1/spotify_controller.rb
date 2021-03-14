class Api::V1::SpotifyController < ApplicationController
    include CurrentUserConcern

    def get_token
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

    def spotify_search

        if !params[:query].blank?
            query = params[:query]
        else
            query = "type:show"
        end

        type = "show"
        market = "US"
        limit = 20
        page = params[:page].to_i
        offset = limit * page

        header = {
            Authorization: "Bearer " + self.get_token
        }
        shows = RestClient::Request::execute(
            :url => "https://api.spotify.com/v1/search?query=#{query}&type=#{type}&market=#{market}&offset=#{offset}&limit=#{limit}",
            :method => :get,
            :verify_ssl => false,
            :headers => header
        )
        response = JSON.parse(shows)
        ids = response["shows"]["items"].map {|podcast| podcast["id"]} #arr of str ids
    
        podcasts = Podcast.where("podcast_id in (?)", ids)
        podcast_ids = podcasts.map { |podcast| podcast.id } #int ids
        favorites = Favorite.where(user_id: @current_user.id).where("podcast_id in (?)", podcast_ids)
        
        response["shows"]["items"].each do |podcast| 
            podcast["is_favorite"] = false
            spotify_id = podcast["id"]
            
            pod = podcasts.find {|podcast| podcast.podcast_id == spotify_id} #podcast obj - finds int id that matches str id
            if pod
                fav_pod = favorites.find {|favorite| favorite.podcast_id == pod.id }
                if fav_pod
                    podcast["is_favorite"] = true
                    podcast["favorite_id"] = fav_pod.id
                end
            end
        end
        render json: response, except: shows["available_markets"]
    end
end