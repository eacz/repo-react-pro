import { useState } from "react"
import { OnChangeArgs, Product } from '../interfaces/productInterfaces';

interface Props {
  product: Product
  onChange?: (args: OnChangeArgs) => void
}

const useProduct = ({onChange, product}: Props) => {
  const [productCount, setProductCount] = useState(0)

  const increasedBy = (value: number) => {
    const newValue = Math.max(productCount + value, 0)
    setProductCount(p => Math.max(p + value, 0))
    onChange && onChange({product, count: newValue})
  }

  return {
    productCount, 
    increasedBy
  }
}

export default useProduct
