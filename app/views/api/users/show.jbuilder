json.(@user, :id, :fname, :lname, :email, :created_at, :updated_at)
json.orders @user.orders, partial: 'api/orders/order', as: :order
json.preferences @user.preferences, partial: 'api/preferences/preferences', as: :preferences