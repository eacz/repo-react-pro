import { useState } from "react"
import { OnChangeArgs, ProductInCart } from "../interfaces/productInterfaces"

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

  const onProductCountChange = ({ count, product }: OnChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      if(count === 0){
        const { [product.id]: productToDelete, ...rest } = oldShoppingCart
        return rest;
      } else {
        return {
          ...oldShoppingCart,
          [product.id] : {...product, count}
        }
      }
    })
  }

  return {
    onProductCountChange,
    shoppingCart      
  }
}

export default useShoppingCart
