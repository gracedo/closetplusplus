class UsersController < ApplicationController
  before_action :user_is_logged_in, only: [:new, :create]
  
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(user_params)
    
    if @user.save
      sign_in(@user)
      redirect_to user_url(@user)
    else
      # render json: { errors: @user.errors.full_messages }
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end
  
  def show
    @user = current_user
    render :show
  end
  
  def edit
    @user = User.find(params[:id])
  end
  
  def update
    @user = User.find(params[:id])
    
    if @user.update_attributes(user_params)
      redirect_to user_url(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :edit
    end
  end
  
  def destroy
    
  end
  
  private
  def user_params
    params.require(:user).permit(:email, :fname, :lname, :password, :session_token)
  end
end
