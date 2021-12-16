import { CSSProperties, useCallback, useContext } from 'react'
import styles from '../styles/styles.module.css'
import { productContext } from './ProductCard'

export interface Props {
  className?: string,
  style?: CSSProperties
}

const ProductButtons = ({className = '', style}:Props) => {
  
  const { increasedBy, productCount, maxCount } = useContext(productContext)

  const isMaxReached = useCallback(
    () =>!!maxCount && maxCount === productCount
  , [productCount, maxCount])

  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button onClick={() => increasedBy(-1)} className={styles.buttonMinus}>-</button>
      <div className={styles.countLabel}>{productCount}</div>
      <button 
        onClick={() => increasedBy(1)} 
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        disabled={isMaxReached()}
      >+</button>      
    </div>
  )
}

export default ProductButtons