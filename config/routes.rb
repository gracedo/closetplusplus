Closet::Application.routes.draw do
  root to: "static_pages#root"
  devise_for :users

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:show]
    resources :items, only: [:create, :index, :show]
  end
end