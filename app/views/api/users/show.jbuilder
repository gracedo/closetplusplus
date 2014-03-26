json.(@user, :id, :fname, :lname, :email, :created_at, :updated_at)
json.orders @user.orders, partial: 'api/orders/order', as: :order
if @user.preferences
  json.preferences do 
    json.(@user.preferences, :id, :user_id, :subscription, :budget, :pieces_per_ship, :created_at, :updated_at)
  end
end