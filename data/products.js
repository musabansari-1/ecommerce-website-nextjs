const watchUrl = `https://via.assets.so/watch.png?id=1&q=95&w=360&h=360&fit=fill`;
const shoeUrl = `https://via.assets.so/shoe.png?id=1&q=95&w=360&h=360&fit=fill`;
const furnitureUrl = `https://via.assets.so/furniture.png?id=1&q=95&w=360&h=360&fit=fill`;
let count = 6;

export const products = [
  {
    "id": "1",
    "name": "Quartz exclusive watch",
    "category": "Electronics",
    "price": 999,
    "image": watchUrl.replace(1, count++),
    "description": "Experience the epitome of luxury with our Quartz Exclusive Watch. This meticulously crafted timepiece showcases precision engineering and timeless elegance, making it the perfect accessory for any occasion.",
    "quantity": 1
  },
  {
    "id": "2",
    "name": "Wrist Watch",
    "category": "Electronics",
    "price": 499,
    "image": watchUrl.replace(1, count++),
    "description": "Elevate your style with our Wrist Watch. With a sleek design and advanced features, it's more than just a timekeeper; it's a statement piece for the modern individual.",
    "quantity": 1
  },
  {
    "id": "3",
    "name": "Smart Watch",
    "category": "Footwear",
    "price": 79,
    "image": watchUrl.replace(1, count++),
    "description": "Stay connected and stay fit with our Smart Watch. It's not just a watch; it's your personal fitness trainer and smart companion for every step of the way.",
    "quantity": 1
  },
  {
    "id": "4",
    "name": "Eagle Watch",
    "category": "Clothing",
    "price": 59,
    "image": watchUrl.replace(1, count++),
    "description": "Make a fashion statement with our Eagle Watch. Its distinctive design and precision movement ensure you stand out from the crowd, whether you're at a party or on a casual outing.",
    "quantity": 1
  },
  {
    "id": "5",
    "name": "Sectional Sofa",
    "category": "Fitness",
    "price": 299,
    "image": furnitureUrl.replace(1, count++),
    "description": "Create your home gym oasis with our Sectional Sofa. This versatile fitness equipment offers a wide range of workout possibilities, helping you achieve your fitness goals from the comfort of your home.",
    "quantity": 1
  },
  {
    "id": "6",
    "name": "Separate sofa chair",
    "category": "Electronics",
    "price": 79,
    "image": furnitureUrl.replace(1, count++),
    "description": "Immerse yourself in music like never before with our Separate Sofa Chair. These high-quality wireless earbuds come equipped with noise cancellation, delivering an exceptional audio experience.",
    "quantity": 1
  },
  {
    "id": "7",
    "name": "Patio Table",
    "category": "Footwear",
    "price": 89,
    "image": furnitureUrl.replace(1, count++),
    "description": "Step up your footwear game with our Patio Table. These trendy sneakers are not only comfortable but also perfect for casual outings and athletic activities.",
    "quantity": 1
  },
  {
    "id": "8",
    "name": "Tuxedo Sofa",
    "category": "Clothing",
    "price": 199,
    "image": furnitureUrl.replace(1, count++),
    "description": "Dress to impress with our Tuxedo Sofa. This elegant formal suit is tailored for special occasions, ensuring you look your best at weddings, parties, and other formal events.",
    "quantity": 1
  },
  {
    "id": "9",
    "name": "Sneakers",
    "category": "Fitness",
    "price": 25,
    "image": shoeUrl.replace(1, count++),
    "description": "Enhance your workouts with our Sneakers. Designed for comfort and stability, these shoes provide the support you need for a range of physical activities, including running and gym workouts.",
    "quantity": 1
  },
  {
    "id": "10",
    "name": "Informal Shoes",
    "category": "Electronics",
    "price": 149,
    "image": shoeUrl.replace(1, count++),
    "description": "Stay connected and stay fit with our Informal Shoes. These feature-rich smartwatches are your all-in-one solution for fitness tracking and seamless communication.",
    "quantity": 1
  },
  {
    "id": "11",
    "name": "Nike Shoes",
    "category": "Accessories",
    "price": 49,
    "image": shoeUrl.replace(1, count++),
    "description": "Carry your essentials in style with our Nike Shoes. This durable backpack features multiple compartments, ensuring you have ample storage space for your belongings.",
    "quantity": 1
  },
  {
    "id": "12",
    "name": "Nike Formals",
    "category": "Sports",
    "price": 89,
    "image": shoeUrl.replace(1, count++),
    "description": "Elevate your game with our Nike Formals. Whether you're a professional tennis player or an enthusiastic amateur, this professional-grade tennis racket will help you achieve your best performance.",
    "quantity": 1
  },
  {
    "id": "13",
    "name": "Timex Watch",
    "category": "Electronics",
    "price": 599,
    "image": watchUrl.replace(1, count++),
    "description": "Capture life's moments in stunning detail with our Timex Watch. This high-resolution digital camera is the perfect tool for photography enthusiasts, ensuring every photo is a masterpiece.",
    "quantity": 1
  },
  {
    "id": "14",
    "name": "Swatch",
    "category": "Footwear",
    "price": 39,
    "image": watchUrl.replace(1, count++),
    "description": "Experience comfort and style with our Swatch. These comfortable sandals are ideal for everyday use, whether you're strolling on the beach or running errands in town.",
    "quantity": 1
  },
  {
    "id": "15",
    "name": "Casio Watch",
    "category": "Clothing",
    "price": 69,
    "image": watchUrl.replace(1, count++),
    "description": "Upgrade your wardrobe with our Casio Watch. These classic denim jeans offer a timeless look and unbeatable comfort, making them a versatile addition to your clothing collection.",
    "quantity": 1
  },
  {
    "id": "16",
    "name": "Titan Watch",
    "category": "Fitness",
    "price": 129,
    "image": watchUrl.replace(1, count++),
    "description": "Take your fitness to the next level with our Titan Watch. This adjustable dumbbell set is perfect for home workouts, allowing you to customize your training and build strength effectively.",
    "quantity": 1
  },
  {
    "id": "17",
    "name": "Wooden Chair",
    "category": "Electronics",
    "price": 39,
    "image": furnitureUrl.replace(1, count++),
    "description": "Elevate your music experience with our Wooden Chair. This portable Bluetooth speaker delivers impressive sound quality, allowing you to enjoy your favorite tunes wherever you go.",
    "quantity": 1
  },
  {
    "id": "18",
    "name": "Tea Chair",
    "category": "Clothing",
    "price": 29,
    "image": furnitureUrl.replace(1, count++),
    "description": "Stay comfortable and stylish with our Tea Chair. These lightweight running shorts are designed for active individuals, ensuring you stay cool and confident during your workouts.",
    "quantity": 1
  },
  {
    "id": "19",
    "name": "Gaming Chair",
    "category": "Fitness",
    "price": 19,
    "image": furnitureUrl.replace(1, count++),
    "description": "Elevate your home workouts with our Gaming Chair. This set of resistance bands offers versatile training options, helping you target different muscle groups and achieve your fitness goals.",
    "quantity": 1
  },
  {
    "id": "20",
    "name": "Sofa Chair",
    "category": "Electronics",
    "price": 349,
    "image": furnitureUrl.replace(1, count++),
    "description": "Immerse yourself in gaming with our Sofa Chair. This latest gaming console offers immersive gaming experiences, whether you're into action, adventure, or sports games.",
    "quantity": 1
  },
  {
    "id": "21",
    "name": "Formal Boots",
    "category":"Footwear",
    "price": 119,
    "image": shoeUrl.replace(1, count++),
    "description": "Explore the great outdoors with confidence in our Formal Boots. These sturdy hiking boots are designed for outdoor adventures, providing the support and protection you need on rugged terrain.",
    "quantity": 1
  },
  {
    "id": "22",
    "name": "Graphic Shoes",
    "category": "Clothing",
    "price": 24,
    "image": shoeUrl.replace(1, count++),
    "description": "Add a pop of color to your wardrobe with our Graphic Shoes. This colorful graphic T-shirt is perfect for casual wear, allowing you to express your unique style and personality.",
    "quantity": 1
  }
  ];
