class ChangeInStockColumnDefault < ActiveRecord::Migration
  def change
    change_column_default :items, :in_stock, "true"
  end
end
