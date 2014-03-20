json.(@user, :id, :fname, :lname, :email, :created_at, :updated_at)
json.addresses @user.addresses, partial: 'api/addresses/address', as: :address