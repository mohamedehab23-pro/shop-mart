'use server'

import { getUserToken } from "@/app/Helpers/getUserToken"

export async function clearCartItemAction(){
  const token=await getUserToken()
  
    const response= await fetch(`${process.env.API_URL}cart`,{
  method:'DELETE',
  headers:{
token:token!
  }
})
const data=await response.json()
return data
}