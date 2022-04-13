

const products = [ {
  //id: 'someproduct-34474434',
  _id: 'someproduct-34474434',
  code: '1001',
  name: 'Airpods Wireless Bluetooth Headphones',
  image: '/images/airpods.jpg',
  description:
    'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
  brand: 'Apple',
  category: 'Electronics',
  price: 89.99,
  countInStock: 3,
  rating: 4.2,
  numReviews: 3,
},
{
  //id: 'someproduct-3462345334',
  _id: 'someproduct-3462845334',
  code: '1002',
  name: 'iPhone 11 Pro 256GB Memory',
  image: '/images/phone.jpg',
  description:
    'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
  brand: 'Apple',
  category: 'Electronics',
  price: 599.99,
  countInStock: 10,
  rating: 0,
  numReviews: 0,
},
{
  //id: 'someproduct-3462789784',
  _id: 'someproduct-3462789784',
  code: '1003',
  name: 'Cannon EOS 80D DSLR Camera',
  image: '/images/camera.jpg',
  description:
    'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
  brand: 'Cannon',
  category: 'Electronics',
  price: 929.99,
  countInStock: 0,
  rating: 0,
  numReviews: 0,
},
{
  //id: 'someproduct-34626967434',
  _id: 'someproduct-34626967434',
  code: '1004',
  name: 'Sony Playstation 4 Pro White Version',
  image: '/images/playstation.jpg',
  description:
    'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
  brand: 'Sony',
  category: 'Electronics',
  price: 399.99,
  countInStock: 10,
  rating: 0,
  numReviews: 0,
},
{
  //id: 'someproduct-3462459785',
  _id: 'someproduct-3462459785',
  code: '1005',
  name: 'Logitech G-Series Gaming Mouse',
  image: '/images/mouse.jpg',
  description:
    'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
  brand: 'Logitech',
  category: 'Electronics',
  price: 49.99,
  countInStock: 7,
  rating: 0,
  numReviews: 0,
},
{
  //id: 'someproduct-346241674',
  _id: 'someproduct-346241674',
  code: '1006',
  name: 'Amazon Echo Dot 3rd Generation',
  image: '/images/alexa.jpg',
  description:
    'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
  brand: 'Amazon',
  category: 'Electronics',
  price: 29.99,
  countInStock: 1,
  rating: 0,
  numReviews: 0,
}, ]

const users = [
  {
    _id: 'adam-id-3434643',
    name: 'Adam Smith',
    email: 'admin@example.com',
    // password: bcrypt.hashSync('123456', 10),
    password: '123123',
    isAdmin: true,
  },
  {
    _id: 'john-id-3474f643',
    name: 'John Doe',
    email: 'john@example.com',
    password: '123123'
  }
]

export { products, users }