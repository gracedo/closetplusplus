class SessionsController < ApplicationController
  # before_action :user_is_logged_in, only: [:new, :create]
  before_filter :authenticate_user!
  
  # def new
  #   @user = User.new
  #   render :new
  # end
  # 
  # def create
  #   @user = User.find_by_credentials(params[:user][:email],
  #                                   params[:user][:password])
  #                                   
  #   if @user
  #     @user.reset_session_token!
  #     session[:session_token] = @user.session_token
  #     sign_in(@user)
  #     redirect_to user_url(@user)
  #   else
  #     flash.now[:errors] = ["Invalid Email/Password combination"]
  #     render :new
  #   end
  # end
  # 
  # def destroy
  #   sign_out
  #   redirect_to root_url
  # end
end
