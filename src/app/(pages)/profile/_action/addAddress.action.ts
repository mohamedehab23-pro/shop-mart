'use server'
import { getUserToken } from "@/app/Helpers/getUserToken"
export async function AddAddressAction({name,details,phone,city}:{name:string,details:string,phone:string,city:string}){
       const token=await getUserToken()
   
    const response= await fetch(`${process.env.API_URL}addresses`,{
      method:'POST',
      body:JSON.stringify({
         name,
        details,
        phone,
        city
      }),
    headers:{
        token:token!,
          'content-type':'application/json'
    }
    
    })
    const data=await response.json()
    return data
}