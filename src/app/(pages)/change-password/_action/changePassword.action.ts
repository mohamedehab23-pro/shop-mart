'use server'
import { getUserToken } from "@/app/Helpers/getUserToken"

export async function ChangePasswordAction({currentPassword,password,rePassword}:{currentPassword:string,password:string,rePassword:string}){
 const token=await getUserToken()
  
  const response=await fetch(`${process.env.API_URL}users/changeMyPassword`,{
    method:'PUT',
    body:JSON.stringify({
      currentPassword,
      password,
      rePassword
    }),
    headers:{
    token:token!,
    'content-type':'application/json'

  }
  })
  const data=await response.json()
  return data
}