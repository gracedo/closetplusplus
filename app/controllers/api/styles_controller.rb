class Api::StylesController < ApplicationController
  def new
    @styles = Style.new
    render json: @styles
  end
  
  def create
    @styles = Style.new(styles_params)
    
    if @styles.save
      render json: @styles
    else
      render json: @styles.errors, status: 422
    end
  end
  
  def show
    @styles = current_user.styles
    render json: @styles
  end
  
  def edit
    @styles = current_user.styles
    render json: @styles
  end
  
  def update
    @styles = current_user.styles
    
    if @styles.update_attributes(styles_params)
      render json: @styles
    else
      render json: @styles.errors, status: 422
    end
  end
  
  private
  def styles_params
    params.require(:style).permit(:user_id, :body_shape, :skin_tone, :shirt_size, :pants_size, :style_type, :never_wear, :fit_preferences, :fit_issues, :color_preferences, :colors_hate, :comments)
  end
end
