Rails.application.routes.draw do
  resources :reviews

  root :to => "pages#index"
end
