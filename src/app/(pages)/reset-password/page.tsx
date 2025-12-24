'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import  { useRef, useState } from 'react'
import { ResetPasswordAction } from './_action/resetPassword.action'

export default function ResetPasswordPage() {
   let emailInput= useRef<HTMLInputElement | null>(null)
   let passwordInput= useRef<HTMLInputElement | null>(null)
  let router= useRouter()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
async function ResetPassword(){
  setIsLoading(true)

const data =await ResetPasswordAction({email:emailInput.current!.value,
  newPassword:passwordInput.current!.value})
if(data.token){
router.push('/login')
}else{
  setError(data.message)
}
setIsLoading(false)
}

  return <>
  <div className='p-10' >
  <div className='flex justify-center items-center py-8'>
     <Card className="w-full max-w-md">
     
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              {error&&<span className='text-xl text-red-500 text-center'>{error}</span>}
              <Label className='text-lg pt-3'>enter your email</Label>
              <Input  className='placeholder:text-lg ' ref={emailInput}
                id="email"
                type="email"
                placeholder="ahmed@gmail.com..."
                required
              />
            </div>
            <div className="grid gap-2">
              <Label className='text-lg'>enter your password</Label>
              <Input  className='placeholder:text-lg ' ref={passwordInput}
              autoComplete='off'
                id="password"
                type="password"
                placeholder="Ahmed@123..."
                required
              />
            </div>
         
          </div>
        </form>
      </CardContent>
      <CardFooter >
        <Button onClick={ResetPassword}  type="submit" className="cursor-pointer w-full">
        {isLoading&&<Loader className='text-lg animate-spin'/>} Save
        </Button>
       
      </CardFooter>
    </Card>
  </div>
</div>
  
  </>
}
