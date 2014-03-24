Closet::Application.routes.draw do
  root to: "static_pages#root"
  devise_for :users

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:show] do
      resources :orders
    end
    resources :items
  end
end