Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :sessions, only: [:create]
      resources :registrations, only: [:create, :index]

      delete :logout, to: "sessions#logout"
      get :logged_in, to: "sessions#logged_in"

      get "/podcasts", to: "auth#spotify_request"
      get "/search", to: "auth#spotify_search"

    end
  end
end
