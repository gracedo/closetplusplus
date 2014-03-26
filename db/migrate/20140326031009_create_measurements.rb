class CreateMeasurements < ActiveRecord::Migration
  def change
    create_table :measurements do |t|
      t.integer :user_id, unique: true, default: ""
      t.string :height, default: ""
      t.string :weight, default: ""
      t.string :shoe_size, default: ""
      t.string :chest, default: ""
      t.string :belly, default: ""
      t.string :neck, default: ""
      t.string :shoulder, default: ""
      t.string :torso, default: ""
      t.string :arm, default: ""
      t.string :sleeve, default: ""
      t.string :waist, default: ""
      t.string :inseam, default: ""
      t.string :thigh, default: ""
      t.string :hip, default: ""

      t.timestamps
    end
    
    add_index :measurements, :user_id, unique: true
  end
end
