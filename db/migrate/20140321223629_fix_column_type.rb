class FixColumnType < ActiveRecord::Migration
  def change
    change_column :items, :rating, :float
  end
end
