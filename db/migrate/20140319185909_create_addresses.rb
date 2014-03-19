class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.string :line1, null: false
      t.string :line2
      t.string :city, null: false
      t.string :state, null: false
      t.string :zipcode, null: false
      t.string :country, null: false

      t.timestamps
    end
    
    add_index :addresses, :user_id
  end
end
