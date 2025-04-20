import { useState } from 'react'
import ProductList from './components/ProductList'
import './App.css'

function App() {
  const [products] = useState([
    {
      id: 1,
      Name: 'Macbook Pro',
      Price: 2499,
      Description: 'Unleash the Power of Macbook Pro',
      Image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916322507'
    },
    {
      id: 2,
      Name: 'Iphone 16 Pro',
      Price: 999,
      Description: 'Your New Superpower',
      Image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch_GEO_US?...'
    },
    {
      id: 3,
      Name: 'Ipad Pro',
      Price: 1299,
      Description: 'Experience the ultimate performance with the iPad Pro.',
      Image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-model-select-gallery-1-202405?...'
    },
    {
      id: 4,
      Name: 'Airpods Pro',
      Price: 249,
      Description: 'Immerse yourself in rich, high-quality sound with AirPods Pro.',
      Image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409?...'
    },
    {
      id: 5,
      Name: 'Apple Watch Ultra',
      Price: 799,
      Description: 'The ultimate companion for your adventures, with advanced features and durability.',
      Image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ultra-case-unselect-gallery-1-202409?...'
    },
    {
      id: 6,
      Name: 'Apple TV 4K',
      Price: 129,
      Description: 'Experience stunning visuals and immersive sound with the Apple TV 4K.',
      Image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-4k-hero-select-202210?...'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on searchTerm
  const filteredProducts = products.filter(product =>
    product.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1>The Apple Stop</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <ProductList allProducts={filteredProducts} />
    </>
  )
}

export default App