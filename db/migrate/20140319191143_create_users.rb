class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      # t.string :email, null: false, unique: true
      t.string :fname, null: false
      t.string :lname, null: false
      # t.string :password_digest, null: false, unique: true
      # t.string :session_token, null: false

      t.timestamps
    end

    # add_index :users, :session_token, unique: true
    # add_index :users, :email, unique: true
  end
end
