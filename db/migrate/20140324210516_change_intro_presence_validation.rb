class ChangeIntroPresenceValidation < ActiveRecord::Migration
  def change
    change_column :items, :intro, :text, null: true
  end
end
