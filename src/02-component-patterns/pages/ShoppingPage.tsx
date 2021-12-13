import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components'
import { products } from '../data/products';
import useShoppingCart from '../hooks/useShoppingCart';
import '../styles/custom-styles.css'

const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart()
  
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            className='bg-dark'
            product={product}
            onChange={onProductCountChange} 
            value={shoppingCart[product.id]?.count ||  0}
          >
            <ProductImage className='custom-image' />
            <ProductTitle className='text-white text-bold' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>
      <div className='shopping-cart'>
        {Object.entries(shoppingCart).map(([id, product]) => (
          <ProductCard 
            className='bg-dark' style={{width: 100}} 
            key={id} product={product}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage className='custom-image' />
            <ProductButtons className='custom-buttons' style={{display: 'flex', justifyContent:'center'}} />
          </ProductCard>
        ))}

      </div>
    </div>
  )
}

export default ShoppingPage
