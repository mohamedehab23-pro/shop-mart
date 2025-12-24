'use server'

import { getUserToken } from "@/app/Helpers/getUserToken"

export async function updateCartItemQuantityAction(productId:string, count:number){
    const token=await getUserToken()
  
    const response= await fetch(`${process.env.API_URL}cart/`+productId,{
  method:'PUT',
  body:JSON.stringify({count}),
  headers:{
    token:token!,
  'content-type':'application/json'
  }
})

const data=await response.json()
return data
}