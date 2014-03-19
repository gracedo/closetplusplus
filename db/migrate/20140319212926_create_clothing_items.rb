class CreateClothingItems < ActiveRecord::Migration
  def change
    create_table :clothing_items do |t|
      t.string :name, null: false, unique: true
      t.string :brand, null: false
      t.string :type, null: false
      t.text :intro, null: false
      t.text :details, null: false
      t.text :wear_it_with
      t.integer :price, null: false
      t.boolean :in_stock, null:false, default: true
      t.integer :rating

      t.timestamps
    end
    
    add_index :clothing_items, :name, unique: true
    add_index :clothing_items, :type
    add_index :clothing_items, :price
    add_index :clothing_items, :rating
  end
end
