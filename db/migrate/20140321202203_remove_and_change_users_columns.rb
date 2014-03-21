class RemoveAndChangeUsersColumns < ActiveRecord::Migration
  def change
    change_column :users, :shipto_name, :string, default: ""
    change_column :users, :line1, :string, default: ""
    change_column :users, :city, :string, default: ""
    change_column :users, :state, :string, default: ""
    change_column :users, :zipcode, :string, default: ""
    change_column :users, :country, :string, default: ""
  end
end
