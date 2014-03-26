class ChangePrefColNullable < ActiveRecord::Migration
  def change
    change_column :preferences, :budget, :string, null: false
    change_column :preferences, :pieces_per_ship, :string, null: false
  end
end
