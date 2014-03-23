class Order < ActiveRecord::Base
  validates :buyer_id, :item_id, :ship_date, :size, presence: true
  
  belongs_to :buyer,
             :primary_key => :id,
             :foreign_key => :buyer_id,
             :class_name => "User"
             
  belongs_to :item,
             :primary_key => :id,
             :foreign_key => :item_id,
             :class_name => "Item"
end
