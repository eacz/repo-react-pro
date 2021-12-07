import { useState } from 'react'
import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components'
import { OnChangeArgs, Product } from '../interfaces/productInterfaces';
import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
}

const product2 = {
  id: '2',
  title: 'Coffee Mug - Meme',
  img: './coffee-mug2.png',
}

const products: Product[] = [product, product2]

interface ProductInCart extends Product {
  count: number
}

const ShoppingPage = () => {
  const [shoppingCard, setShoppingCard] = useState<{ [key: string]: ProductInCart }>({})

  const onProductCountChange = ({count, product}: OnChangeArgs) => {

   setShoppingCard(oldShoppingCart => {
     if(count === 0){
        const { [product.id]: toDelete, ...rest } = oldShoppingCart
      
        return rest
     } else {
       return {
         ...oldShoppingCart,
         [product.id]: {...product, count}
       }
     }
   })
  }
  
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
          >
            <ProductImage className='custom-image' />
            <ProductTitle className='text-white text-bold' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>
      <div className='shopping-cart'>
        {Object.entries(shoppingCard).map(([id, product]) => (
          <ProductCard key={id} className='bg-dark' product={product} style={{width: 100}} >
            <ProductImage className='custom-image' />
            <ProductButtons className='custom-buttons' style={{display: 'flex', justifyContent:'center'}} />
          </ProductCard>
        ))}

      </div>
    </div>
  )
}

export default ShoppingPage
