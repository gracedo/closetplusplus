class Item < ActiveRecord::Base
  validates :name, :brand, :item_type, :details, :price, :in_stock, presence: true
  validates :name, uniqueness: true
  
  has_many :orders,
           :primary_key => :id,
           :foreign_key => :item_id,
           :class_name => "Order"
end
