class Api::V1::StaticController < ApplicationController

    def home
        render json: { status: "It's working" }
    end
end
