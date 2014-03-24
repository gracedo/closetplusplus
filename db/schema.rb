# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140324190625) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "items", force: true do |t|
    t.string   "name",                          null: false
    t.string   "brand",                         null: false
    t.string   "item_type",                     null: false
    t.text     "intro",                         null: false
    t.text     "details",                       null: false
    t.text     "wear_it_with"
    t.string   "price",                         null: false
    t.string   "in_stock",     default: "true", null: false
    t.float    "rating"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "items", ["item_type"], name: "index_items_on_item_type", using: :btree
  add_index "items", ["name"], name: "index_items_on_name", unique: true, using: :btree
  add_index "items", ["price"], name: "index_items_on_price", using: :btree
  add_index "items", ["rating"], name: "index_items_on_rating", using: :btree

  create_table "orders", force: true do |t|
    t.integer  "buyer_id",   null: false
    t.integer  "item_id",    null: false
    t.string   "ship_date",  null: false
    t.string   "size",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "orders", ["buyer_id"], name: "index_orders_on_buyer_id", using: :btree
  add_index "orders", ["item_id"], name: "index_orders_on_item_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "fname",                               null: false
    t.string   "lname",                               null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "line2"
    t.string   "shipto_name",            default: ""
    t.string   "line1",                  default: ""
    t.string   "city",                   default: ""
    t.string   "state",                  default: ""
    t.string   "zipcode",                default: ""
    t.string   "country",                default: ""
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
