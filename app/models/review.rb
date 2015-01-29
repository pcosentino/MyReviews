class Review < ActiveRecord::Base
	validates_presence_of :body, :rating, :title
end
