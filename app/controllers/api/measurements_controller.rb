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
    @measurements = Measurement.find(params[:id])
    # render json: @measurements
  end
  
  def edit
    @measurements = Measurement.find(params[:id])
    render json: @measurements
  end
  
  def update
    @measurements = Measurement.find(params[:id])
    
    if @measurements.update_attributes(pref_params)
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
