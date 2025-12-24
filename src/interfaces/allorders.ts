import { productI } from "./product"

export interface allordersI {
  shippingAddress: ShippingAddress
  taxPrice: number
  shippingPrice: number
  totalOrderPrice: number
  paymentMethodType: string
  isPaid: boolean
  isDelivered: boolean
  _id: string
  cartItems: CartItem[]
  paidAt: string
  createdAt: string
  updatedAt: string
  id: number
  __v: number
}

export interface ShippingAddress {
  details: string
  city: string
  phone: string
}



export interface CartItem {
  count: number
  _id: string
  product: productI
  price: number
}




