class ChangeRatingColNameDefault < ActiveRecord::Migration
  def change
    change_column_default :items, :rating, 0
    rename_column :items, :rating, :total_rating_pts
  end
end
