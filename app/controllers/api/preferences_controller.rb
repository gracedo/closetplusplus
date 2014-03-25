class Api::PreferencesController < ApplicationController
  def new
    @preferences = Preference.new
    render json: @preferences
  end
  
  def create
    @preferences = Preference.new(pref_params)
    
    if @preferences.save
      render json: @preferences
    else
      render json: @preferences.errors, status: 422
    end
  end
  
  def show
    @preferences = Preference.find(params[:id])
    # render json: @preferences
  end
  
  def edit
    @preferences = Preference.find(params[:id])
    render json: @preferences
  end
  
  def update
    @preferences = Preference.find(params[:id])
    
    if @preferences.update_attributes(pref_params)
      render json: @preferences
    else
      render json: @preferences.errors, status: 422
    end
  end
  
  private
  def pref_params
    params.require(:preferences).permit(:user_id, :subscription, :budget, :pieces_per_ship)
  end
end
