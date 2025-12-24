import { getUserToken } from "@/app/Helpers/getUserToken"
import { productI } from "@/interfaces"
import { NextResponse } from "next/server"

export async function GET(){
        const token=await getUserToken()
      
     let response=await fetch(`${process.env.API_URL}wishlist`,{
          method:'GET',
          headers:{
    token:token!
          }
        }
        
        )
        let data:productI[]=await response.json()
        return NextResponse.json(data)
}