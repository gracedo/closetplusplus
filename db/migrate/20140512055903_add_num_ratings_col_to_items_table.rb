class AddNumRatingsColToItemsTable < ActiveRecord::Migration
  def change
    add_column :items, :num_ratings, :integer, default: 0
  end
end
