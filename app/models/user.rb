class User < ActiveRecord::Base
  validates :email, :fname, :lname, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minumum: 6, allow_nil: true }
  validates_format_of :email, :with => /.+@.+\..+/i
  attr_reader :password
  
  has_many :addresses,
           :primary_key => :id,
           :foreign_key => :user_id, 
           :class_name => "Address"
end