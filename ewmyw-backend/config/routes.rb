Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :sessions, only: [:create]
      resources :registrations, only: [:index, :create]
      resources :favorites, only: [:index, :create, :show, :destroy]


      delete :logout, to: "sessions#logout"
      get :logged_in, to: "sessions#logged_in?"

      get "/podcasts", to: "spotify#spotify_request"
      get "/search", to: "spotify#spotify_search"

    end
  end
end