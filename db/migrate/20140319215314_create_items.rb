class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
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
  
    add_index :items, :name, unique: true
    add_index :items, :type
    add_index :items, :price
    add_index :items, :rating
  end
end
