json.(@item, :id, :name, :brand, :type, :intro, :details, :wear_it_with, :price, :in_stock, :rating, :created_at, :updated_at)
json.orders @item.orders, partial: 'api/orders/order', as: :order