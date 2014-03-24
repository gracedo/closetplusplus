class Api::ItemsController < ApplicationController
  def index
    @items = Item.all
    render json: @items
  end
  
  def new
    @item = Item.new
    render json: @item
  end
  
  def create
    @item = Item.new(item_params)
    
    if @item.save
      render json: @item
    else
      render json: @item.errors, status: 422
    end
  end
  
  def show
    @item = Item.find(params[:id])
    render json: @item
  end
  
  def edit
    @item = Item.find(params[:id])
    render json: @item
  end
  
  def update
    @item = Item.find(params[:id])
    
    if @item.update_attributes(item_params)
      render json: @item
    else
      render json: @item.errors, status: 422
    end
  end
  
  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    render json: nil
  end
  
  private
  def item_params
    params.require(:item).permit(:name, :brand, :type, :intro, :details, :wear_it_with, :price, :in_stock, :rating)
  end
end
