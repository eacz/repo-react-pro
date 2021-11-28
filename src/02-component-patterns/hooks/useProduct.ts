import { useState } from "react"

const useProduct = () => {
  const [productCount, setProductCount] = useState(0)

  const increasedBy = (value: number) => {
    setProductCount(p => Math.max(p + value, 0))
  }

  return {
    productCount, 
    increasedBy
  }
}

export default useProduct
