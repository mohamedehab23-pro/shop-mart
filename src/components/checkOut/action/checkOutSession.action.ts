'use server'
import { getUserToken } from "@/app/Helpers/getUserToken"

export async function CheckOutSessionAction({shippingAddress,cartId}:{shippingAddress:object,cartId:string}){
      const token=await getUserToken()
    
     const response= await fetch(`${process.env.API_URL}orders/checkout-session/${cartId}?url=${process.env.NEXT_URL}`,{
        method:'POST',
        body:JSON.stringify({shippingAddress}),
        headers:{
    token:token!,
      'content-type':'application/json'
      }
    })

    const data=await response.json()
    return data
}