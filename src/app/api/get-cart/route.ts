import { getUserToken } from "@/app/Helpers/getUserToken"
import { cartResponse } from "@/interfaces"
import { NextResponse } from "next/server"

export async function GET(){
          const token=await getUserToken()
        
      const response=await fetch(`${process.env.API_URL}cart`,{
            method:'GET',
            headers:{
    token:token!
            }
        })
        const data:cartResponse=await response.json()
        return NextResponse.json(data)
}