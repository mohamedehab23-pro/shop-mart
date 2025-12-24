import { productI } from "./product"

export interface cartResponse {
    message?:string
  status: string
  numOfCartItems: number
  cartId: string
  data: CartItems
}

export interface CartItems {
  _id: string
  cartOwner: string
  products: Item[]
  createdAt: string
  updatedAt: string
  __v: number
  totalCartPrice: number
}

export interface Item {
  count: number
  _id: string
  product: productI
  price: number
}

