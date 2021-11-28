import { useContext } from "react"
import { productContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

export interface Props {
  title?: string,
  className?: string,
}

const ProductTitle = ({title, className = ''}: Props) => {
  const {product} = useContext(productContext)
  return (
    <span className={`${styles.productDescription} ${className}`}>
      {title ? title : product.title}
    </span>  
  )
} 

export default ProductTitle