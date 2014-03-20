class AddressesController < ApplicationController
  def new
    @user = current_user
  end
  
  def create
    @user = current_user
    @user.addresses.new(address_params)
    
    if @user.save
      redirect_to user_url(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end
  
  def show
    @user = current_user
    render :show
  end
  
  def edit
    @user = current_user
  end
  
  def update
    @user = current_user
    
    if @user.update_attributes(address_params)
      redirect_to user_address_url(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :edit
    end
  end
  
  def destroy
    @user = current_user
    
    if @user.addresses
      @user.addresses.destroy
      redirect_to root_url
    end
  end
  
  private
  def address_params
    params.permit(addresses: [:name, :line1, :line2, :city, :state, :zipcode, :country])
          .require(:addresses)
          .values
          .reject { |data| data.values.all?(&:blank?) }
  end
end
