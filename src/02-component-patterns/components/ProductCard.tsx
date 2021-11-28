import styles from '../styles/styles.module.css'
import useProduct from '../hooks/useProduct'
import { createContext, ReactElement } from 'react'
import { Product, ProductContextProps } from '../interfaces/productInterfaces'

export const productContext = createContext({} as ProductContextProps)
const { Provider } = productContext

export interface Props {
  product: Product,
  children?: ReactElement | ReactElement[],
  className?: string
}


const ProductCard = ({product, children, className = ''} : Props) => {
  const { increasedBy, productCount } = useProduct()
  return (
    <Provider
      value={{
        productCount,
        increasedBy,
        product
      }}
    >
      <div className={`${styles.productCard} ${className}`} >
        {children}
      </div>
    </Provider>
  )
}

export default ProductCard