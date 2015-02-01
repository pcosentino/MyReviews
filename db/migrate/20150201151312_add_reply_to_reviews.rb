class AddReplyToReviews < ActiveRecord::Migration
  def change
    add_column :reviews, :reply, :string
  end
end
