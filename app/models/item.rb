class Item < ActiveRecord::Base
  validates :name, :brand, :type, :intro, :details, :price, :in_stock, presence: true
  validates :name, uniqueness: true
end
