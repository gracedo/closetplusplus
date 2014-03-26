class Api::MeasurementsController < ApplicationController
  def new
    @measurements = Measurement.new
    render json: @measurements
  end
  
  def create
    @measurements = Measurement.new(measure_params)
    
    if @measurements.save
      render json: @measurements
    else
      render json: @measurements.errors, status: 422
    end
  end
  
  def show
    @measurements = current_user.measurements
    render json: @measurements
  end
  
  def edit
    @measurements = current_user.measurements
    render json: @measurements
  end
  
  def update
    @measurements = current_user.measurements
    
    if @measurements.update_attributes(measure_params)
      render json: @measurements
    else
      render json: @measurements.errors, status: 422
    end
  end
  
  private
  def measure_params
    params.require(:measurement).permit(:user_id, :height, :weight, :shoe_size, :chest, :belly, :neck, :shoulder, :torso, :arm, :sleeve, :waist, :inseam, :thigh, :hip)
  end
end
