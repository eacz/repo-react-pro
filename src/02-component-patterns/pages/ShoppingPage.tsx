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
          maxCount: 21
        }}
      >
        {
          ({reset, count, increasedBy, isMaxCountReached}) => (
            <>  
              <ProductImage className='custom-image' />
              <ProductTitle className='text-white text-bold' />
              <ProductButtons className='custom-buttons' />
              <button onClick={reset} >Reset</button>
              <button onClick={() => increasedBy(-2)} >-2</button>
              { !isMaxCountReached && <button onClick={() => increasedBy(2)} >+2</button> }
              {count}
            </>
          )
        }
      
      </ProductCard>
    </div>
  )
}

export default ShoppingPage
