
import { productI } from "./product"

export interface WishListResponse {
  status: string
  count: number
  data: productI[]
 message?:string

}




