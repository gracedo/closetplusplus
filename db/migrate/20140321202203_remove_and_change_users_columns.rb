class RemoveAndChangeUsersColumns < ActiveRecord::Migration
  def change
    add_column :users, :shipto_name, :string, default: ""
    add_column :users, :line1, :string, default: ""
    add_column :users, :city, :string, default: ""
    add_column :users, :state, :string, default: ""
    add_column :users, :zipcode, :string, default: ""
    add_column :users, :country, :string, default: ""
  end
end
