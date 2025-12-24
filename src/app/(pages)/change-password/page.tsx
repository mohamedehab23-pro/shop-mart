'use client'
import {  useRef, useState } from 'react'
import { Loader } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toast from 'react-hot-toast'
import { signOut } from 'next-auth/react'
import { ChangePasswordAction } from './_action/changePassword.action'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export default function ChangePassword() {
  const [isLoading, setIsLoading] = useState(false)
 let currentPassword= useRef<HTMLInputElement | null>(null)
 let newPassword= useRef<HTMLInputElement | null>(null)
 let reNewPassword= useRef<HTMLInputElement | null>(null)

async function ChangeUserPassword(){
  setIsLoading(true)

  
 
  const data= await ChangePasswordAction({currentPassword:currentPassword.current!.value,
password:newPassword.current!.value,
rePassword:reNewPassword.current!.value
})
  if(data.message=='success'){
    toast.success('password changed successfully')
signOut({callbackUrl:'/login'})
  }else{
    toast.error(data.message)
  }
  setIsLoading(false)
}

  return <>
 <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md rounded-2xl shadow-md">
        <div className='p-3'>
         
          <div className="p-6 ">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl font-bold">
                Change Password
              </CardTitle>
            </CardHeader>

            <CardContent className="p-0 space-y-4">
              <Input ref={currentPassword}  type="password" placeholder="Current password" />
              <Input ref={newPassword} type="password" placeholder="New password" />
              <Input ref={reNewPassword} type="password" placeholder="Confirm new password" />

              <Button onClick={()=>ChangeUserPassword()} className="cursor-pointer w-full mt-2">
              {isLoading&&<Loader className='animate-spin'/>}  Change Password
              </Button>
            </CardContent>
          </div>

        </div>
      </Card>
    </div>


  
  </>
}
