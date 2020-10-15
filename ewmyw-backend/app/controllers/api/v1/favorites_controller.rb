class Api::V1::FavoritesController < ApplicationController
    include CurrentUserConcern

    def index
        favorites = Favorite.find_by(user_id: @current_user.id)
        render json: favorites
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
        @podcast = Podcast.find_by(podcast_id: params[:podcast_id])
        if !@podcast 
            Podcast.create(podcast_id: params[:podcast_id])
        end
       
        favorite = Favorite.find_by(podcast_id: @podcast.id);
        if !favorite 
            Favorite.create!(
                user_id: @current_user.id,
                podcast_id: @podcast.id,
            )
        end
        render json: favorite
    end

    # def update
    #     favorite = Favorite.find_by(podcast_id: params[:podcast_id])
    #     favorite.update(favorite_params)
    #     render json: favorite
    #     # byebug

    # end

    def destroy 
        # @podcast = Podcast.find_by(podcast_id: params[:podcast_id])
        favorite = Favorite.find_by(params[:podcast_id])
        # byebug
        # byebug
        favorite.destroy
        render json: favorite
    end


    private
    
    def favorite_params
        params.require(:favorite).permit(:podcast_id, :user_id)
    end

end
