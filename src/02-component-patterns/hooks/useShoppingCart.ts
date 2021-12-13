import { useState } from "react"
import { OnChangeArgs, ProductInCart } from "../interfaces/productInterfaces"

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

  const onProductCountChange = ({ count, product }: OnChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 }
      //update the shopping cart state
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        }
      }
      // delete product
      else {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart
        return rest
      }
    })
  }

  return {
    onProductCountChange,
    shoppingCart      
  }
}

export default useShoppingCart
