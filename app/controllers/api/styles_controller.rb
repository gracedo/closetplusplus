class Api::StylesController < ApplicationController
  def new
    @style = Style.new
    render json: @style
  end
  
  def create
    @style = Style.new(styles_params)
    
    if @style.save
      render json: @style
    else
      render json: @style.errors, status: 422
    end
  end
  
  def show
    @style = current_user.style
    render json: @style
  end
  
  def edit
    @style = current_user.style
    render json: @style
  end
  
  def update
    @style = current_user.style
    
    if @style.update_attributes(style_params)
      render json: @style
    else
      render json: @style.errors, status: 422
    end
  end
  
  private
  def style_params
    params.require(:style).permit(:user_id, :body_shape, :skin_tone, :shirt_size, :pants_size, :style_type, :never_wear, :fit_preferences, :fit_issues, :color_preferences, :colors_hate, :comments)
  end
end
