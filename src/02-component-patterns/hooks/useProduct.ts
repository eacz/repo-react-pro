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

    const newValue = Math.max(productCount + value, 0)
    setProductCount(p => Math.max(p + value, 0))
    onChange && onChange({product, count: newValue})
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
    increasedBy
  }
}

export default useProduct
