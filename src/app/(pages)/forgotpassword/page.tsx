'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { ForgotPasswordAction } from './_action/forgotPassword.action'



export default function ForgotPassword() {
 let router= useRouter()
 const [error, setError] = useState(null)
   let email= useRef<HTMLInputElement | null>(null)
const [isLoading, setIsLoading] = useState(false)
async function ForgetPasswordFunc(){
    setIsLoading(true)
  
    let data=await ForgotPasswordAction({email:email.current!.value})
    if(data.statusMsg=='success'){
      router.push('/reset-code')
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
              {error&& <span className='text-red-500 text-xl text-center'>{error}</span>}
              <Label className='text-lg'>enter your email</Label>
              <Input className='placeholder:text-lg ' ref={email}
                id="email"
                type="email"
                placeholder="ahmed@gmail.com..."
                required
              />
            </div>
         
          </div>
        </form>
      </CardContent>
      <CardFooter >
        <Button onClick={ForgetPasswordFunc} type="submit" className="cursor-pointer text-lg w-full">
         {isLoading&&<Loader className='animate-spin'/>} send 
        </Button>
       
      </CardFooter>
    </Card>
  </div>
</div> 
  </>
}
