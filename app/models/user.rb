require 'bcrypt'

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :omniauthable,
         :recoverable, :rememberable, :trackable, :validatable
         
  validates :email, :fname, :lname, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates_format_of :email, with: /.+@.+\..+/i
  # before_validation :ensure_session_token
  attr_reader :password
  
  has_many :addresses,
           :primary_key => :id,
           :foreign_key => :user_id, 
           :class_name => "Address",
           :inverse_of => :user,
           :dependent => :destroy
           
  accepts_nested_attributes_for :addresses, :allow_destroy => true
           
  # def self.generate_session_token
  #   SecureRandom.urlsafe_base64(16)
  # end
  # 
  # def reset_session_token!
  #   self.session_token = User.generate_session_token
  #   self.save!
  # end
  # 
  # def password=(secret)
  #   @password = secret
  #   self.password_digest = BCrypt::Password.create(secret)
  # end
  # 
  # def is_password?(secret)
  #   BCrypt::Password.new(self.password_digest).is_password?(secret)
  # end
  # 
  # def self.find_by_credentials(email, secret)
  #   user = User.find_by_email(email)
  #   
  #   if user && user.is_password?(secret)
  #     return user
  #   end
  #   
  #   nil
  # end
  # 
  # private
  # def ensure_session_token
  #   self.session_token ||= User.generate_session_token
  # end
end