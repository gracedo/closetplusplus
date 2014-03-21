class RemoveAddressColsFromUsers < ActiveRecord::Migration
  def down
    remove_column :users, :shipto_name
    remove_column :users, :line1
    remove_column :users, :city
    remove_column :users, :state
    remove_column :users, :zipcode
    remove_column :users, :country
  end
end
