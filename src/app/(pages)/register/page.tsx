'use client'

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
import { useRef, useState } from "react"
import { FailedRegisterResponse, SuccessRegisterResponse } from "@/interfaces/register"
import { useRouter } from "next/navigation"
import { Loader } from "lucide-react"
import { RegisterAction } from "./_action/register.action"

const formSchema = z.object({
  name:z.string().nonempty('name is required').min(3,'name must be at least 3 character').max(15,'name must be at max 15 character'),
  email:z.email('invalid email').nonempty('email is required').regex(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,{message:'your email must be like example@gmail.com'}),
  password:z.string().nonempty('password is required').regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,{message:'your password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters'}),
  rePassword:z.string().nonempty('repassword is required'),
  phone:z.string().nonempty('phone is required').regex(/^01[0125][0-9]{8}$/,'phone must be an egyptian number')
}).refine((data)=>data.password===data.rePassword,{path:['rePassword'],message:'password and repassword must be the same'})
export default function Register() {
     const [resError, setResError] = useState<string|null>(null)
     const [isLoading, setisLoading] = useState(false)
 const router= useRouter()
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name:'',
        email:'',
        password:'',
        rePassword:'',
        phone:''
      },reValidateMode:'onBlur',
      mode:'onBlur'
    })
   
    // 2. Define a submit handler.
  async  function onSubmit(values: z.infer<typeof formSchema>) {
    setisLoading(true)
    
      const data:SuccessRegisterResponse|FailedRegisterResponse=await RegisterAction({name:values.name,
        email:values.email,
        password:values.password,
        rePassword:values.rePassword,
        phone:values.phone})
      if(data.message=='success'){
router.push('/login')
      }else{
        setResError(data.message)
      }
setisLoading(false)
    }
  return (<>
<div className='p-10' >
  <h2 className='text-center pt-8 text-3xl font-bold'>Register now and Join US</h2>
  <div className='flex  justify-center items-center py-8'>
     <Card className="w-full max-w-md p-6">
     
   

   <Form {...form}>
    {resError&& <h2 className="text-center text-red-500">{resError}</h2>}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-lg'>Name</FormLabel>
              <FormControl>
                <Input  className='placeholder:text-lg ' placeholder="Ahmed" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-lg'>Email</FormLabel>
              <FormControl>
                <Input  className='placeholder:text-lg ' placeholder="ahmed@example.com" {...field} />
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
                <Input autoComplete='off' className='placeholder:text-lg ' type='password' placeholder="Ahmed@123" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rePassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-lg'>Confirm Password</FormLabel>
              <FormControl>
                <Input  autoComplete='off' className='placeholder:text-lg ' type='password' placeholder="Ahmed@123" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-lg'>Phone</FormLabel>
              <FormControl>
                <Input className='placeholder:text-lg ' placeholder="01009000900" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='rounded-full w-full text-lg cursor-pointer' type="submit">{isLoading&&<Loader className="animate-spin"/>} Submit</Button>
      </form>
    </Form>
    </Card>
</div> 
</div>
    
    </>)
}


