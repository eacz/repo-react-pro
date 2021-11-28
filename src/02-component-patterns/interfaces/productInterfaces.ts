import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";



export interface Product {
  id: string,
  title: string,
  img?: string
}

export interface ProductContextProps {
  productCount: number,
  increasedBy: (value: number) => void,
  product: Product
}

export interface ProductCardHOCProps {
  (Props : ProductCardProps): JSX.Element,
  Title: (Props : ProductTitleProps) => JSX.Element,
  Image: (Props : ProductImageProps) => JSX.Element,
  Buttons: (Props: ProductButtonsProps) => JSX.Element,
}