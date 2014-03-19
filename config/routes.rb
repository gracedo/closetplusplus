Closet::Application.routes.draw do
  root to: "static_pages#root"
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :destroy, :show, :update]
    resources :items, only: [:create, :index, :show]
  end
end