Closet::Application.routes.draw do
  root to: "static_pages#root"

  resources :users, only: [:new, :create, :destroy, :show, :edit, :update] do
    get "shipping", on: :member
  end
  
  resource :session, only: [:new, :create, :destroy]
  
  namespace :api, defaults: { format: :json } do
    resources :items, only: [:create, :index, :show]
  end
end