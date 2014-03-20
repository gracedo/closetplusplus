Closet::Application.routes.draw do
  root to: "static_pages#root"
  # get "users/:id/shipping", to: "users#shipping"
  devise_for :users

  resources :users, only: [:show, :shipping] do
    resources :addresses
  end
  
  # resource :session, only: [:new, :create, :destroy]
  
  namespace :api, defaults: { format: :json } do
    resources :items, only: [:create, :index, :show]
  end
end