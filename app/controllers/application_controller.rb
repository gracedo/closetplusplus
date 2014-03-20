class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  before_filter :configure_permitted_parameters, if: :devise_controller?

  protected
  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :fname
    devise_parameter_sanitizer.for(:sign_up) << :lname
    devise_parameter_sanitizer.for(:account_update) << :fname
    devise_parameter_sanitizer.for(:account_update) << :lname
  end
  
  # helper_method :current_user, :signed_in?
  # 
  # def current_user
  #   return nil unless session[:token]
  #   @current_user = User.find_by_session_token(session[:token])
  # end
  # 
  # def sign_in(user)
  #   current_user = user
  #   session[:token] = user.session_token
  # end
  # 
  # def sign_out
  #   current_user.reset_session_token!
  #   session[:token] = nil
  # end
  # 
  # def signed_in?
  #   !!current_user
  # end
  # 
  # def user_is_logged_in
  #   redirect_to user_url(@current_user) unless self.current_user.nil?
  # end
end
