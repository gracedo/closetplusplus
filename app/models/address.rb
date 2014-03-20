class Address < ActiveRecord::Base
  validates :user_id, :name, :line1, :city, :state, :zipcode, :country, presence: true
  
  belongs_to :user,
             :primary_key => :id,
             :foreign_key => :user_id, 
             :class_name => "User",
             :inverse_of => :addresses
end