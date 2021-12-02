import { CSSProperties, useContext } from 'react'
import styles from '../styles/styles.module.css'
import { productContext } from './ProductCard'

export interface Props {
  className?: string,
  style?: CSSProperties
}

const ProductButtons = ({className = '', style}:Props) => {
  const { increasedBy, productCount  } = useContext(productContext)
  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button onClick={() => increasedBy(-1)} className={styles.buttonMinus}>-</button>
      <div className={styles.countLabel}>{productCount}</div>
      <button onClick={() => increasedBy(1)} className={styles.buttonAdd}>+</button>      
    </div>
  )
}

export default ProductButtons