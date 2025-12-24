'use server'
import { getUserToken } from "@/app/Helpers/getUserToken"
import { removeI } from "@/interfaces"

export async function RemoveFromWishlistAction(productId:string){
      const token=await getUserToken()
    
     let response=await fetch(`${process.env.API_URL}wishlist/`+productId,{
        method:'DELETE',
        headers:{
    token:token!
        }
    })
    let data=await response.json()
    return data
}