"use client"
import {signIn} from 'next-auth/react'
import Link from 'next/link'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Loader } from 'lucide-react'

const formSchema = z.object({
  email:z.email('invalid email').nonempty('email is required').regex(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,{message:'your email must be like example@gmail.com'}),
  password:z.string().nonempty('password is required').regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,{message:'your password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters'})
})
export default function Login() {
 const searchParams= useSearchParams()
const [isLoading, setIsLoading] = useState(false)
 
   // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:""
    },
  })
 
  // 2. Define a submit handler.
 async function onSubmit(values: z.infer<typeof formSchema>) {
  setIsLoading(true)
   const response=await signIn('credentials',{
    email:values.email,
    password:values.password,
    callbackUrl:'/',
    redirect:true
   })
    setIsLoading(false)
  }
  return (<>
<div className='p-10' >
  <h2 className='text-center pt-8 text-3xl font-bold'>Login Now</h2>
  <div className='flex  justify-center items-center py-8'>
     <Card className="w-full max-w-md p-6">
     
   

   <Form {...form}>
    {searchParams.get('error')&& <h2 className='text-xl text-red-500 text-center'>{searchParams.get('error')}</h2>}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-lg'>Email</FormLabel>
              <FormControl>
                <Input className='placeholder:text-lg text-lg' placeholder="ali@example.com" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-lg'>Password</FormLabel>
              <FormControl>
                <Input autoComplete='off' className='placeholder:text-lg text-lg' type='password' placeholder="Ahmed@123" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='rounded-full text-lg w-full cursor-pointer' type="submit">{isLoading&& <Loader className='animate-spin'/>} Submit</Button>
      </form>
      <Link className='text-center text-lg' href={'/forgotpassword'}><span className='hover:underline  text-blue-500'>forgotten password?</span></Link>
    </Form>
    </Card>
</div>
 <p className='pb-6 text-center text-lg'>If you don't have account, please <Link href={'/register'} className='hover:underline text-blue-500'> sign up</Link> now</p>
</div>
   
    </>)
}


