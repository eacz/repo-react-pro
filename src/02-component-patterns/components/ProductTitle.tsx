import { CSSProperties, useContext } from "react"
import { productContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

export interface Props {
  title?: string,
  className?: string,
  style?: CSSProperties
}

const ProductTitle = ({title, style, className = ''}: Props) => {
  const {product} = useContext(productContext)
  return (
    <span style={style} className={`${styles.productDescription} ${className}`}>
      {title ? title : product.title}
    </span>  
  )
} 

export default ProductTitle