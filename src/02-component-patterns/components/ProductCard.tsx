import styles from '../styles/styles.module.css'
import useProduct from '../hooks/useProduct'
import { createContext } from 'react'
import { ProductCardProps, ProductContextProps } from '../interfaces/productInterfaces'

export const productContext = createContext({} as ProductContextProps)
const { Provider } = productContext


const ProductCard = ({product, children} : ProductCardProps) => {
  const { increasedBy, productCount } = useProduct()
  return (
    <Provider
      value={{
        productCount,
        increasedBy,
        product
      }}
    >
      <div className={styles.productCard} >
        {children}
      </div>
    </Provider>
  )
}

export default ProductCard