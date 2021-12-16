import { useEffect, useRef, useState } from "react"
import { OnChangeArgs, Product, ProductCardInitialValues } from '../interfaces/productInterfaces';

interface Props {
  product: Product
  onChange?: (args: OnChangeArgs) => void
  value?: number,
  initialValues?: ProductCardInitialValues
}

const useProduct = ({onChange, product, value = 0, initialValues}: Props) => {
  const [productCount, setProductCount] = useState<number>(initialValues?.count || value)
  const isMounted = useRef(false)  
  
  const increasedBy = (value: number) => {    
    let newValue = Math.max(productCount + value, 0)
    
    if(initialValues?.maxCount){
      newValue = Math.min( newValue, initialValues.maxCount )
    }
    
    setProductCount(newValue)
    onChange && onChange({product, count: newValue})
  }

  const reset = () => {
    setProductCount(initialValues?.count || value)
  }

  useEffect(() => {
    isMounted.current = true;
  }, [])

  useEffect(() => {
    if(isMounted.current) return
    setProductCount(value)
  }, [value])


  return {
    productCount, 
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === productCount,
    increasedBy,
    reset
  }
}

export default useProduct
