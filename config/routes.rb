Rails.application.routes.draw do

  resources :users, except: [:update, :index]
  resources :stars
  resources :constellations, except: [:create, :destroy]

  # Sessions
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#destroy'

  get '/authorized_user', to:'users#show'

  # Constellations
  get '/constellations/:id', to: 'constellations#show'

  # Stars
  # post '/stars', to: 'stars#create'?
  # delete '/stars', to: 'stars#delete'?
  # get '/stars', to: 'stars#index'?
  # get '/stars, to: 'stars#update'?

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
