import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
}

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard className="bg-dark" product={product}>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-white"  title='HolaMundo' />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          className="bg-dark" product={product}
        >
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          product={product}
          style={{
            backgroundColor: '#70d1f8'
          }}
        >
          <ProductImage style={{borderBottomLeftRadius: 50, borderBottomRightRadius: 50}} />
          <ProductTitle style={{color: 'blue'}} />
          <ProductButtons style={{color: 'blueviolet'}} />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage
