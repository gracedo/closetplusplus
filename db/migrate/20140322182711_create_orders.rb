class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :buyer_id, null: false
      t.integer :item_id, null: false
      t.string :ship_date, null: false
      t.string :size, null: false
      t.timestamps
    end
    
    add_index :orders, :buyer_id
    add_index :orders, :item_id
  end
end
