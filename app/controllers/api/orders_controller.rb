class Api::OrdersController < ApplicationController
  def index
    @orders = Order.all
    render json: @orders
  end
  
  def new
    @order = Order.new
    render json: @order
  end
  
  def create
    @order = Order.new(order_params)
    
    if @order.save
      render json: @order
    else
      render json: @order.errors, status: 422
    end
  end
  
  def show
    @order = Order.find(params[:id])
    render json: @order
  end
  
  def edit
    @order = Order.find(params[:id])
    render json: @order
  end
  
  def update
    @order = Order.find(params[:id])
    
    if @order.updateAttributes(order_params)
      render json: @order
    else
      render json: @order.errors, status: 422
    end
  end
  
  private
  def order_params
    params.require(:order).permit(:buyer_id, :item_id, :ship_date, :size)
  end
end
