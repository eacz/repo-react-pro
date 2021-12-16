import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components'
import { products } from '../data/products';
import '../styles/custom-styles.css'

const product = products[0]

const ShoppingPage = () => {
  
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard 
        key={product.id}
        className='bg-dark'
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        <ProductImage className='custom-image' />
        <ProductTitle className='text-white text-bold' />
        <ProductButtons className='custom-buttons' />
      </ProductCard>
    </div>
  )
}

export default ShoppingPage
