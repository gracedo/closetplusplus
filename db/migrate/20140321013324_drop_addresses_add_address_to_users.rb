class DropAddressesAddAddressToUsers < ActiveRecord::Migration
  def down
    drop_table :addresses
  end
end
