'use client'
import { useContext, useRef, useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useRouter } from 'next/navigation'
import { Loader } from 'lucide-react'
import { CartContext } from '../contexts/cartContext'
import { CheckOutSessionAction } from './action/checkOutSession.action'
import { CashCheckOutAction } from './action/cashCheckOut.action'
export default function CheckOut({cartId}:{cartId:string}) {
 let {getCart}= useContext(CartContext)
  let router=useRouter()
const [isLoading, setIsLoading] = useState(false)
    let cityInput=useRef<HTMLInputElement | null>(null)
    let detailsInput=useRef<HTMLInputElement | null>(null)
    let phoneInput=useRef<HTMLInputElement | null>(null)

async function checkOutSession(cartId:string){


const shippingAddress={
    details:detailsInput.current?.value,
    city:cityInput.current?.value,
    phone:phoneInput.current?.value
}

  

    const data=await CheckOutSessionAction({shippingAddress,cartId})
if(data.status=='success'){
  
    window.location.href=data.session.url
}

}

async function CashOrder(cartId:string){
  
  setIsLoading(true)
const shippingAddress={
    details:detailsInput.current?.value,
    city:cityInput.current?.value,
    phone:phoneInput.current?.value
}

  

    const data=await CashCheckOutAction({shippingAddress,cartId})
if(data.status=='success'){
router.push('/allorders')
getCart()
}
setIsLoading(false)

}

  return <>
              
   <Dialog>
      <form>
        <DialogTrigger asChild>
<Button className='w-full text-lg py-5 cursor-pointer' >Proceed to Checkout</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Your Address</DialogTitle>
            <DialogDescription className='text-red-500'>
              Make sure that the address you entered is correct.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label >city</Label>
              <Input ref={cityInput}  />
            </div>
            <div className="grid gap-3">
              <Label >address</Label>
              <Input  ref={detailsInput} />
            </div>
            <div className="grid gap-3">
              <Label >phone</Label>
              <Input  ref={phoneInput} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button className='cursor-pointer' variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={()=>CashOrder(cartId)}  className='cursor-pointer' >{isLoading&& <Loader className='animate-spin'/>} cash</Button>
            <Button className='cursor-pointer' onClick={()=>checkOutSession(cartId)} > visa</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  
  
  </>
}
