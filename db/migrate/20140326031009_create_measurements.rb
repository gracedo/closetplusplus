class CreateMeasurements < ActiveRecord::Migration
  def change
    create_table :measurements do |t|
      t.integer :user_id, unique: true, default: ""
      t.string :height, default: "60"
      t.string :weight, default: "100"
      t.string :chest, default: "32"
      t.string :belly, default: "28"
      t.string :neck, default: "14"
      t.string :shoulder, default: "15"
      t.string :torso, default: "24"
      t.string :arm, default: "10"
      t.string :sleeve, default: "30"
      t.string :waist, default: "32"
      t.string :inseam, default: "32"
      t.string :thigh, default: "32"
      t.string :hip, default: "32"
      t.string :shoe_size, default: "5"

      t.timestamps
    end
    
    add_index :measurements, :user_id, unique: true
  end
end
