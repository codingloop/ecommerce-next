import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "cl",
      email: "cl@codingloop.in",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Norman",
      email: "norman@codingloop.in",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      slug: "free-shirt",
      name: "Free Shirt",
      category: "Shirts",
      image: "/images/shirt1.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      slug: "fit-shirt",
      name: "Fit Shirt",
      category: "Shirts",
      image: "/images/shirt2.jpg",
      price: 30,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      slug: "slim-shirt",
      name: "Slim Shirt",
      category: "Shirts",
      image: "/images/shirt3.jpg",
      price: 70,
      brand: "Reymond",
      rating: 4.7,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      slug: "golf-pant",
      name: "Golf Pants",
      category: "Pants",
      image: "/images/pants1.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular pants",
    },
    {
      slug: "classic-pant",
      name: "Classic pants",
      category: "pantss",
      image: "/images/pants2.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular pants",
    },
    {
      slug: "classic-pant-2",
      name: "Classic pants 2",
      category: "Pants",
      image: "/images/pants3.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular pant",
    },
  ],
};

export default data;
