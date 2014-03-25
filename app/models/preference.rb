class Preference < ActiveRecord::Base
  validates :user_id, :subscription, :pieces_per_ship, presence: true
  validates :user_id, uniqueness: true
  
  belongs_to :user,
             :primary_key => :id, 
             :foreign_key => :user_id, 
             :class_name => "User"
end
