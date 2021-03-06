json.(@user, :id, :fname, :lname, :email, :created_at, :updated_at)
json.orders @user.orders, partial: 'api/orders/order', as: :order

if @user.preferences
  json.preferences do 
    json.(@user.preferences, :id, :user_id, :subscription, :budget, :pieces_per_ship, :created_at, :updated_at)
  end
end

if @user.measurements
  json.measurements do 
    json.(@user.measurements, :id, :user_id, :height, :weight, :shoe_size, :chest, :belly, :neck, :shoulder, :torso, :arm, :sleeve, :waist, :inseam, :thigh, :hip, :created_at, :updated_at)
  end
end

if @user.style
  json.style do 
    json.(@user.style, :id, :user_id, :body_shape, :skin_tone, :shirt_size, :pants_waist, :pants_inseam, :style_type, :never_wear, :fit_preference, :fit_issues, :color_preferences, :colors_hate, :comments, :created_at, :updated_at)
  end
end