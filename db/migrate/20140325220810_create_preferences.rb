class CreatePreferences < ActiveRecord::Migration
  def change
    create_table :preferences do |t|
      t.integer :user_id, null: false, unique: true
      t.string :subscription, null: false
      t.string :budget
      t.integer :pieces_per_ship, null: false

      t.timestamps
    end
    
    add_index :preferences, :user_id, unique: true
  end
end
