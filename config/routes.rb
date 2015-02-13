Rails.application.routes.draw do
  devise_for :users
  resources :reviews
  
  namespace :admin do 
  	resources :reviews
  	
  end
  
  root :to => "reviews#index"

end
