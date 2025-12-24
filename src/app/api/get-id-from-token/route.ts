import { getUserToken } from "@/app/Helpers/getUserToken";
import { NextResponse } from "next/server";

export async function GET(){
    const token=await getUserToken()

  const response=await fetch(`${process.env.API_URL}auth/verifyToken`,{
  headers:{
    token:token!
  }
})
const data=await response.json()
console.log(data.decoded.id);
return NextResponse.json(data.decoded.id)
}