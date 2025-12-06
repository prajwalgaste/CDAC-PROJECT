const restaurantData = [
  {
    id: 1,
    name: "Spicy Biryani House",
    cuisine: "Biryani, North Indian",
    rating: 4.4,
    img: "https://i.pinimg.com/736x/79/53/fb/7953fbcd346daad06ae3afe79db15b3c.jpg",
    dishes: [
      { name: "Chicken Biryani", price: 180, img: "https://i.pinimg.com/736x/57/58/8b/57588b32c55b721df9710bfe1093fe1f.jpg" },
      { name: "Mutton Biryani", price: 240, img: "https://i.pinimg.com/736x/5a/94/6d/5a946d6a52e46007a5db33fced34dd18.jpg" },
      { name: "Veg Biryani", price: 150, img: "https://i.pinimg.com/736x/9e/9b/cb/9e9bcbd898d3442abdb916db5e62b465.jpg" },
      { name: "Egg Biryani", price: 160, img: "https://i.pinimg.com/1200x/c5/68/a5/c568a5a10e8e216d8338fe4da91173d1.jpg" },
      { name: "Hyderabadi Biryani", price: 260, img: "https://i.pinimg.com/1200x/99/d1/0c/99d10c9d780efe3e5d607b1b579b4fb6.jpg" }
    ]
  },

  {
    id: 2,
    name: "Italiano Pizza Hub",
    cuisine: "Pizza, Italian",
    rating: 4.2,
    img: "https://i.pinimg.com/736x/a9/3e/2c/a93e2c4fb1e2f5bba5e33c162c0dfac2.jpg",
    dishes: [
      { name: "Margherita Pizza", price: 220, img: "https://i.pinimg.com/736x/90/73/4e/90734e4b2183263f1162f99dd29f4587.jpg" },
      { name: "Cheese Burst Pizza", price: 300, img: "https://i.pinimg.com/736x/ba/7d/89/ba7d893d4ef7b51e96f47ca257c54308.jpg" },
      { name: "Pepperoni Pizza", price: 260, img: "https://i.pinimg.com/736x/3e/c9/fe/3ec9fe32c6217014789b5f42e2343f47.jpg" },
      { name: "Veggie Supreme Pizza", price: 250, img: "https://i.pinimg.com/736x/52/a1/32/52a132a0127a0ca0e8a933a5128cf065.jpg" },
      { name: "Italian Garlic Bread", price: 120, img: "https://i.pinimg.com/736x/e2/eb/86/e2eb86c59ea8dcab1b7c78a9ea893984.jpg" }
    ]
  },

  {
    id: 3,
    name: "Sweet Dessert World",
    cuisine: "Desserts, Ice Cream",
    rating: 4.7,
    img: "https://i.pinimg.com/736x/59/ba/f5/59baf5853213b8c9c85831c4b92874a2.jpg",
    dishes: [
      { name: "Chocolate Cake Slice", price: 120, img: "https://i.pinimg.com/736x/b5/3c/a4/b53ca45d717c19cb3f6d5680e1ae1982.jpg" },
      { name: "Strawberry Pastry", price: 90, img: "https://i.pinimg.com/736x/32/8f/26/328f26bb568f31581dbece8a2cfe5c45.jpg" },
      { name: "Blueberry Muffin", price: 110, img: "https://i.pinimg.com/1200x/a7/f6/63/a7f663bc0c70e509af1f1aa258b0afa5.jpg" },
      { name: "Red Velvet Cupcake", price: 140, img: "https://i.pinimg.com/736x/ad/ef/78/adef7846557e19e0b5a61570c7a7a377.jpg" },
      { name: "Vanilla Ice Cream", price: 70, img: "https://i.pinimg.com/736x/8f/70/c9/8f70c974dd23ff162c63816131ddad2b.jpg" }
    ]
  },

  {
    id: 4,
    name: "Burger Factory",
    cuisine: "Burger, Fast Food",
    rating: 4.0,
    img: "https://i.pinimg.com/736x/a0/47/d5/a047d54afd7a9f44d0dcedd3f4a89cc5.jpg",
    dishes: [
      { name: "Veg Burger", price: 120, img: "https://i.pinimg.com/736x/35/b3/e7/35b3e730a21d1e0bb3030850f1baa979.jpg" },
      { name: "Chicken Burger", price: 180, img: "https://i.pinimg.com/736x/f0/83/12/f08312b5b45b888622e24921df51cb4d.jpg" },
      { name: "Double Patty Burger", price: 220, img: "https://i.pinimg.com/1200x/77/7e/d8/777ed8d70b122823c25a4fc851b437d5.jpg" },
      { name: "Crispy Chicken Wrap", price: 160, img: "https://i.pinimg.com/736x/11/59/f4/1159f4f30c45fca91603f4d7f9dfbfe9.jpg" },
      { name: "French Fries", price: 80, img: "https://i.pinimg.com/736x/73/7e/d9/737ed93987aae98a76fc2e5f12fc0ecc.jpg" }
    ]
  },

  {
    id: 5,
    name: "Tandoori Flames",
    cuisine: "Tandoori, Punjabi",
    rating: 4.5,
    img: "https://i.pinimg.com/1200x/ed/97/db/ed97db6a0a649e6dad477ad14f7f4b97.jpg",
    dishes: [
      { name: "Tandoori Chicken", price: 250, img: "https://i.pinimg.com/1200x/48/6b/c1/486bc1696032084bf74c15f443e0d5fa.jpg" },
      { name: "Chicken Tikka", price: 200, img: "https://i.pinimg.com/1200x/92/fa/fd/92fafde28e69fb68d841ec5f8bac85c3.jpg" },
      { name: "Paneer Tikka", price: 180, img: "https://i.pinimg.com/1200x/5c/b8/40/5cb84002ba085ac4492ee9c9085b7979.jpg" },
      { name: "Tandoori Roti", price: 20, img: "https://i.pinimg.com/736x/e2/e4/8d/e2e48d086d292cea12993af1ddf52be8.jpg" },
      { name: "Butter Chicken", price: 280, img: "https://i.pinimg.com/1200x/e9/f2/6d/e9f26de8c78121b5b7c380f386c3fdbe.jpg" }
    ]
  },

  {
    id: 6,
    name: "Chinese Wok Corner",
    cuisine: "Chinese, Asian",
    rating: 4.3,
    img: "https://i.pinimg.com/736x/3f/65/c1/3f65c1c7f274de09ef2bdf4c7ebfe674.jpg",
    dishes: [
      { name: "Veg Noodles", price: 140, img: "https://i.pinimg.com/736x/3e/95/56/3e95569955ef921d6e1ab59189fce9f8.jpg" },
      { name: "Chicken Hakka Noodles", price: 180, img: "https://i.pinimg.com/736x/c2/e7/21/c2e721dd8638b64ec13cfeaa6051d8e4.jpg" },
      { name: "Manchurian Gravy", price: 160, img: "https://i.pinimg.com/1200x/cc/e1/fa/cce1fa4f8b94678343a7ff6656412572.jpg" },
      { name: "Veg Fried Rice", price: 150, img: "https://i.pinimg.com/1200x/20/3c/b1/203cb19e92db4527b32c19d8fbf60810.jpg" },
      { name: "Spring Rolls", price: 120, img: "https://i.pinimg.com/1200x/be/4e/39/be4e39919d3e0f988355e4a3df4daae0.jpg" }
    ]
  },

  {
    id: 7,
    name: "Fresh Salad Bar",
    cuisine: "Healthy, Salads",
    rating: 4.6,
    img: "https://i.pinimg.com/736x/cf/b5/f5/cfb5f5722c374665e441555b3d83e0bc.jpg",
    dishes: [
      { name: "Greek Salad", price: 150, img: "https://i.pinimg.com/1200x/93/10/aa/9310aaa49eb536412c0566af59813805.jpg" },
      { name: "Chicken Caesar Salad", price: 180, img: "https://i.pinimg.com/1200x/31/97/72/319772e9c9bfbf261dd4e5be1bedcfac.jpg" },
      { name: "Fruit Bowl", price: 120, img: "https://i.pinimg.com/1200x/4a/6d/42/4a6d42babc1cadd0889eb6bf7673e8e5.jpg" },
      { name: "Protein Salad", price: 200, img: "https://i.pinimg.com/1200x/a7/1f/20/a71f20def11ce206239b2d5ca6f8b9bb.jpg" },
      { name: "Avocado Mix Bowl", price: 220, img: "https://i.pinimg.com/736x/16/fc/f6/16fcf6660b09ca7f94938bb618680e5d.jpg" }
    ]
  },

  {
    id: 8,
    name: "Royal Thali Express",
    cuisine: "Indian Thali, Veg Meals",
    rating: 4.1,
    img: "https://i.pinimg.com/736x/64/b1/52/64b152db9ae61c6cd1968e33c1cbaf60.jpg",
    dishes: [
      { name: "North Indian Thali", price: 200, img: "https://i.pinimg.com/1200x/6f/d8/02/6fd80297584fc7173ad552210695e6d4.jpg" },
      { name: "Gujarati Thali", price: 180, img: "https://i.pinimg.com/1200x/4c/6f/e8/4c6fe8f6b1bb9c4f4ce22d2477b3f928.jpg" },
      { name: "Maharashtrian Thali", price: 170, img: "https://i.pinimg.com/1200x/f8/6e/9f/f86e9ffcf5701c3b6d740d7b264531dd.jpg" },
      { name: "Mini Thali", price: 140, img: "https://i.pinimg.com/1200x/46/fc/98/46fc98af1ca4b9fa4796dd660427b4c6.jpg" },
      { name: "Deluxe Thali", price: 250, img: "https://i.pinimg.com/1200x/56/70/f6/5670f6fd19b73f2c7a50fb44c9575d1c.jpg" }
    ]
  }
];

export default restaurantData;
