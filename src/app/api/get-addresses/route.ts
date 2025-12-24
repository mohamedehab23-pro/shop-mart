
import { getUserToken } from "@/app/Helpers/getUserToken"
import { NextResponse } from "next/server"

export async function GET(){
    const token=await getUserToken()
  
     const response= await fetch(`${process.env.API_URL}addresses`,{
      method:'GET',
      headers:{
    token:token!
      }
    })
    const data=await response.json()
    return NextResponse.json(data)
}