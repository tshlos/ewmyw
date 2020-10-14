class Api::V1::SpotifyController < ApplicationController

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


    def spotify_request
        ids = "71mvGXupfKcmO6jlmOJQTP,0Giuw6eNbTzP9CDZODDrA2,5nvRkVMH58SelKZYZFZx1S,0ofXAdFIQQRsCYj9754UFx,1VXcH8QHkjRcTCEd88U3ti,2YXZqgzD27c9ijd2stGagX,35roWAhf6BpEdOTOIEa2J6,3pXx5SXzXwJxnf4A5pWN2A,02fM1JHpt9HmHGp482K71b,3i5TCKhc6GY42pOWkpWveG,3Zq2XDpVrtadTR1xOfzhzo,6BRSvIBNQnB68GuoXJRCnQ,7bnjJ7Va1nM07Um4Od55dW,0184ojF3hjFhKfktahQK4G,2ChhfoVUC3abZJn9geRvQn,0U9S5J2ltMaKdxIfLuEjzE,5KubucWBfyJr14bD7xWBvS,2eq1dY2sViskVRIOvWf4y5,00VIrB4E80ThIbMnsgAoTA,3IM0lmZxpFAY7CwMuv9H4g,1HhK3f5Fk2EBplKMLvYVnQ,20Gf4IAauFrfj7RBkjcWxh,0iqhshVd674jobv13ZasVb,37i9dQZF1DX1ywXghfWcTX,53dHyhzazFrmPhwuambyuM,37i9dQZF1DX0BxHamIEkKV,3bExJ9JQpkwNhoHvaIIuyV,5VzFvh1JlEhBMS6ZHZ8CNO,41zWZdWCpVQrKj7ykQnXRc,6R7MHnK95dyPexoxjkkb76,1vfOw64nKjQ8LzZDPCfRaO,1mZhxzY8ElPGhSGHHg0BRr,2dY2l2v95zz9HTlYvDSAdA,2rTT1klKUoQNuaW2Ah19Pa,25PdDOYwfXDFvZ4pI1JWDh,5RdShpOtxKO3ZWohR2M6Sv,3Z6JdCS2d0eFEpXHKI6WqH,1vSUO6Bg4abtjRF7fnGpT1,0vYTIMav7el5VXq5n5pxhI,4P86ZzHf7EOlRG7do9LkKZ,4WkDOrAK3uASgK2PRF7j9M,3Zwh39kXHAk9M6vZvofoxY"

        # RestClient.proxy = "http://localhost:8888"
        header = {
            Authorization: "Bearer " + self.get_token
        }
        shows = RestClient::Request.execute(
            :url => "https://api.spotify.com/v1/shows/?ids=#{ids}&market=US",
            :method => :get, 
            :verify_ssl => false, 
            :headers => header
        )
        response = JSON.parse(shows)
        render json: response, except: shows["available_markets"]
    end


    def spotify_search
        if !params[:query].blank?
            query = params[:query]
        else
            query = "type:show"
        end
        type = "show"
        market = "US"
        offset = "20"
        limit = "30"
        
        # RestClient.proxy = "http://localhost:8888"
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
        render json: response, except: shows["available_markets"]
    end
end