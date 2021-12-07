import styles from '../styles/styles.module.css'
import useProduct from '../hooks/useProduct'
import { createContext, ReactElement } from 'react'
import { OnChangeArgs, Product, ProductContextProps } from '../interfaces/productInterfaces';
import ExtendsStyles from '../interfaces/extendStyles'

export const productContext = createContext({} as ProductContextProps)
const { Provider } = productContext

export interface Props extends ExtendsStyles {
  product: Product,
  children?: ReactElement | ReactElement[],
  onChange?: (args: OnChangeArgs) => void 
}


const ProductCard = ({product, children, className = '', style, onChange  } : Props) => {
  const { increasedBy, productCount } = useProduct({onChange, product})
  return (
    <Provider
      value={{
        productCount,
        increasedBy,
        product
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`} >
        {children}
      </div>
    </Provider>
  )
}

export default ProductCard