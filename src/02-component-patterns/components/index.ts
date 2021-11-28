import ProductButtons from './ProductButtons'
import ProductImage from './ProductImage';
import ProductTitle from './ProductTitle'
import ProductCardHOC from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/productInterfaces';

const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Buttons: ProductButtons,
  Image: ProductImage
})

export { ProductButtons, ProductImage, ProductTitle }
export default ProductCard;