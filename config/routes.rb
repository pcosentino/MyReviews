Rails.application.routes.draw do
  resources :reviews
  
  namespace :admin do 
  	resources :reviews
  	
  end
  
  root :to => "pages#index"

end
