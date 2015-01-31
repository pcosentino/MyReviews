class Review < ActiveRecord::Base
	validates_presence_of :body, :city, :rating, :title
end
