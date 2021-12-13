import { useEffect, useState } from "react"
import { OnChangeArgs, Product } from '../interfaces/productInterfaces';

interface Props {
  product: Product
  onChange?: (args: OnChangeArgs) => void
  value?: number
}

const useProduct = ({onChange, product, value = 0}: Props) => {
  const [productCount, setProductCount] = useState(value)

  
  const increasedBy = (value: number) => {

    const newValue = Math.max(productCount + value, 0)
    setProductCount(p => Math.max(p + value, 0))
    onChange && onChange({product, count: newValue})
  }

  useEffect(() => {
    setProductCount(value)
  }, [value])

  return {
    productCount, 
    increasedBy
  }
}

export default useProduct
