require 'bcrypt'

class User < ActiveRecord::Base
  validates :email, :fname, :lname, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates_format_of :email, with: /.+@.+\..+/i
  before_validation :ensure_session_token
  attr_reader :password
  
  has_many :addresses,
           :primary_key => :id,
           :foreign_key => :user_id, 
           :class_name => "Address"

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end
  
  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
  end
  
  def password=(secret)
    @password = secret
    self.password_digest = BCrypt::Password.create(secret)
  end
  
  def is_password?(secret)
    BCrypt::Password.new(self.password_digest).is_password?(secret)
  end
  
  def self.find_by_credentials(email, secret)
    user = User.find_by_email(email)
    
    if user && user.is_password?(secret)
      return user
    end
    
    nil
  end
  
  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end