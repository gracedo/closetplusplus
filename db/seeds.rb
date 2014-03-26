# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

item1 = Item.create!({
  name: "Chambray Blazer",
  brand: "Chambray",
  item_type: "jackets-blazers",
  intro: "",
  details: "This 2-button chambray blazer is made of 100% soft cotton making it extremely light-weight and versatile. Inside lining features a pop of salmon color that is sure to bring in Spring! 2 front pockets and a single chest pocket, the perfect home for a fun pocket square. Dry Clean only!",
  wear_it_with: "This chambray blazer would make for the perfect addition to your stylish Spring wardrobe! Dress it down for a date with a simple, clean-cut v-neck tee and a pair of dark wash jeans and chukka boots. Wear with dark caramel or burnt sienna casual chinos or colored denim for an edgier, richer look. Have a beach wedding to attention? Throw on a pair of white pants and you're good to go!",
  price: "49",
  in_stock: "true"
})

item2 = Item.create!({
  name: "William Stretch Solid Mod L/S Shirt",
  brand: "William",
  item_type: "long-sleeves",
  intro: "",
  details: "Oxford style dress shirt. Sleek cotton fabrication. Stretch allows for movement and comfort.",
  wear_it_with: "Great versatile piece for the office when you dress it up with slacks and a tie or blazer. Dress it down with khaki cords. Avoid wearing with similar coloured bottoms.",
  price: "49",
  in_stock: "true"
})

item3 = Item.create!({
  name: "Gramercy Heritage Indigo Denim",
  brand: "Gramercy",
  item_type: "jeans",
  intro: "Based out of Los Angeles, Gramercy prides itself on creating high quality denim jeans cut & sewn in the USA. Its denim achieves a clean, minimalist design by doing away with unnecessary embellishments and trim.",
  details: "High-quality denim needs to be broken in! Jeans will feel stiff at first but will mold specifically to your body as they're worn in. Dark rinse gives the option to dress up or down. Slim cut.",
  wear_it_with: "A collared shirt to dress it up. A tshirt to go more casual. 'Fitted', thinner shoes like loafers or Converse All Stars.",
  price: "69",
  in_stock: "true"
})

item4 = Item.create!({
  name: "Big Star Division Slim Cords Khaki",
  brand: "Big Star",
  item_type: "pants",
  intro: "Big Star denim features intricate detailing and is inspired by vintage Americana. From inception of design to shipping, all manufacturing is done under one roof in LA's premier jeans factory.",
  details: "Give your jeans a break and shakes things up with corduroys. Easy to pair with everything in your closet. 5 pocket styling, straight cut through the legs.",
  wear_it_with: "Casual button-downs. Autumnal, solid dark colors (browns, olives, maroons, black, navy, forest green). A thinner sole shoe or loafer.",
  price: "69.00",
  in_stock: "true"
})

item5 = Item.create!({
  name: "All the Bizness Woven Shirt LS",
  brand: "Express",
  item_type: "long-sleeves",
  intro: "",
  details: "Espresso-colored buttons. Relaxed fit. 100% cotton.",
  wear_it_with: "Pair with dark denim or grey jeans for a date night. Wear over chinos for a business casual event. Underneath a navy, grey, or classic black blazer for a night out.",
  price: "39",
  in_stock: "true"
})

item6 = Item.create!({
  name: "Nick Classic Slim Jeans",
  brand: "Nick",
  item_type: "pants",
  intro: "",
  details: "The Rolls Royce of men's denim, these jeans look fantastic and feel amazing. Made with patented XFIT technology fabric that adapts to your unique body shape to give custom fit and for 360 degree comfort. The 4-way stretch jeans wil not sag, bag, or lose shape. Sleek dark wash makes these super versatile and easy to dress up or down. 'Classic Slim' cut for a relaxed, straight cut with a modern twist.",
  wear_it_with: "Dress them up with a button-down and a blazer for a sexy date night or a night out with friends. Keep it classy casual with a v-neck and a cardigan for a comfy but refined weekend look. Kick around town in all-day comfort and pair with a henley and peacoat.",
  price: "69",
  in_stock: "true"
})
