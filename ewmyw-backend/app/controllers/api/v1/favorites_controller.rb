class Api::V1::FavoritesController < ApplicationController

    def index
        favorites = Favorite.all
        render json: favorites
    end

    def show
        favorite = Favorite.find_by(params[:user_id])
        if favorite
            render json: favorite
        else
            render json: { message: 'oops' }
        end
    end

    def create
        favorite = Favorite.new(favorite_params)
        render json: favorite 
    end

    private
    
    def favorite_params
        params.permit(:id, :user_id, :podcast_id)
    end

end
