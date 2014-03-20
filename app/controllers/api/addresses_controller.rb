class Api::AddressesController < ApplicationController
  def index
    @user = current_user
    @addresses = @user.addresses
    render json: @addresses
  end
  
  def new
    @user = current_user
  end
  
  def create
    @user = current_user
    @user.addresses.new(address_params)
    
    if @user.save
      render json: @user
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end
  
  def show
    @user = current_user
    @addresses = @user.addresses
    render json: @addresses
  end
  
  def edit
    @user = current_user
  end
  
  def update
    @user = current_user
    
    if @user.update_attributes(address_params)
      render json: @user
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end
  
  def destroy
    @user = current_user
    
    if @user.addresses
      @user.addresses.destroy
      render json: nil
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