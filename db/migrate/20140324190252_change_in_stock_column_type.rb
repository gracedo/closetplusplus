class ChangeInStockColumnType < ActiveRecord::Migration
  def change
    change_column :items, :in_stock, :string
  end
end
