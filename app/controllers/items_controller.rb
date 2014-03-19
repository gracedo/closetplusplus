class ItemsController < ApplicationController
  def index
    @items = Item.all
  end
  
  def new
    @item = Item.new
  end
  
  def create
    @item = Item.new(item_params)
  end
  
  def show
    
  end
  
  private
  def item_params
    params.require(:item).permit(:name, :brand, :type, :intro, :details, :wear_it_with, :price, :in_stock, :rating)
  end
end
