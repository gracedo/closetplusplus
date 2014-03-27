class CreateStyles < ActiveRecord::Migration
  def change
    create_table :styles do |t|
      t.integer :user_id, default: 0, unique: true
      t.string :body_shape, default: ""
      t.string :skin_tone, default: ""
      t.string :shirt_size, default: ""
      t.string :pants_waist, default: ""
      t.string :pants_inseam, default: ""
      t.text :style_type, default: ""
      t.text :never_wear, default: ""
      t.string :fit_preference, default: ""
      t.text :fit_issues, default: ""
      t.text :color_preferences, default: ""
      t.text :colors_hate, default: ""
      t.text :comments, default: ""

      t.timestamps
    end
    
    add_index :styles, :user_id, unique: true
  end
end
