class UsersController < ApplicationController
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(user_params)
  end
  
  def show
    
  end
  
  def update
    
  end
  
  def destroy
    
  end
  
  private
  def user_params
    params.require(:user).permit(:email, :fname, :lname, :password)
  end
end
