class FixColumnName < ActiveRecord::Migration
  def change
    rename_column :items, :type, :item_type
    change_column :items, :price, :string
    change_column :items, :rating, :float
  end
end
