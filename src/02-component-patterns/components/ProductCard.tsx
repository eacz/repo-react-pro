import styles from '../styles/styles.module.css'
import useProduct from '../hooks/useProduct'
import { createContext } from 'react'
import { OnChangeArgs, Product, ProductCardInitialValues, ProductContextProps } from '../interfaces/productInterfaces';
import ExtendsStyles from '../interfaces/extendStyles'

export const productContext = createContext({} as ProductContextProps)
const { Provider } = productContext

export interface Props extends ExtendsStyles {
  product: Product,
  //children?: ReactElement | ReactElement[],
  children: (text: string) => JSX.Element
  onChange?: (args: OnChangeArgs) => void,
  value?: number,
  initialValues: ProductCardInitialValues
}


const ProductCard = ({product, children, className = '', style, onChange, value, initialValues  } : Props) => {
  const { increasedBy, productCount } = useProduct({onChange, product, value, initialValues})
  return (
    <Provider
      value={{
        productCount,
        increasedBy,
        product
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`} >
        {children('HOLAAAAAAAAA')}
      </div>
    </Provider>
  )
}

export default ProductCard