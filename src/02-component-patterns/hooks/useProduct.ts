import { useState } from "react"

interface Props {
  onChange?: () => void
}

const useProduct = ({onChange}: Props) => {
  const [productCount, setProductCount] = useState(0)

  const increasedBy = (value: number) => {
    setProductCount(p => Math.max(p + value, 0))
    onChange && onChange()
  }

  return {
    productCount, 
    increasedBy
  }
}

export default useProduct
