'use client'
import { useRef, useState } from 'react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from '@/components/ui/button'
import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { ResetCodeAction } from './_action/resetCode.action'

export default function ResetCode() {
 let router= useRouter()
 const [error, setError] = useState(null)
   let emailInput= useRef<HTMLInputElement | null>(null)
   const [isLoading, setIsLoading] = useState(false)
   async function ResetPasswordCode(){
    setIsLoading(true)

const data=await ResetCodeAction({resetCode:emailInput.current!.value})
if(data.status=='Success'){
router.push('/reset-password')
}else{
setError(data.message)
}
setIsLoading(false)
   }
  return <>
<div className='p-10 min-h-[75vh]'>
       <div className='flex justify-center items-center py-8'>
   
<div className='py-15 px-12 border rounded-xl shadow'>
  {error&& <span className='text-xl text-center ms-8 text-red-500 '>{error}</span>}
    <h2 className='p-5 pt-8 text-lg font-semibold'>Enter the code that we sent to your email</h2>
<div className='flex justify-center'> <InputOTP  ref={emailInput} maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP></div>
    
<Button onClick={ResetPasswordCode} className='mt-8 cursor-pointer text-lg w-full'>{isLoading&& <Loader className='animate-spin'/>}send code</Button>
</div>
       </div>
</div>
  
  </>
}



