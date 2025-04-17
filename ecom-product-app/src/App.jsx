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
  Image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch_GEO_US?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NHhsaFZBQ3Ira2kyRm5zQ1YwdHhkQ0FOL1haWCt6TDJ0UWlLb09XajVNdENYR1ZZZnEyMVlVQUliTThGMjNyaFFoQkdNUjV0K0UxSCtZOU9teC9iOXBzdEtHZGFwc1lPREtOL3lkcFhMQ1JR&traceId=1'
},
{
  id: 3,
  Name: 'Ipad Pro',
  Price: 1299,
  Description: 'Experience the ultimate performance with the iPad Pro.',
  Image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-model-select-gallery-1-202405?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cXN0QTVTNDBtbGIzcy91THBPRThnNE5sSFgwakNWNmlhZ2d5NGpHdllWY09WV3R2ZHdZMXRzTjZIcWdMTlg4eUJQYkhSV3V1dC9oa0s5K3lqMGtUaFMvR01EVDlzK0hIS1J2bTdpY0pVeTF1Yy9kL1dQa3EzdWh4Nzk1ZnZTYWY&traceId=1'
},{
  id: 4,
  Name: 'Airpods Pro',
  Price: 249,
  Description: 'Immerse yourself in rich, high-quality sound with AirPods Pro.',
  Image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=976&hei=916&fmt=jpeg&qlt=90&.v=1724041669458'
},{
  id: 5,
  Name: 'Apple Watch Ultra', 
  Price: 799,
  Description: 'The ultimate companion for your adventures, with advanced features and durability.',
  Image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ultra-case-unselect-gallery-1-202409?wid=5120&hei=3280&fmt=p-jpg&qlt=80&.v=1723905863222'
},{
  id: 6,
  Name: 'Apple TV 4K',
  Price: 129,
  Description: 'Experience stunning visuals and immersive sound with the Apple TV 4K.',
  Image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-4k-hero-select-202210?wid=1076&hei=1070&fmt=jpeg&qlt=90&.v=1664896361408'
},
])

  return (
    <>
      <h1>The Apple Stop</h1>
      <ProductList allProducts={products}/>
    </>
  )
}

export default App
