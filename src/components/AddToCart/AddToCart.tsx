'use client'
import { useContext, useState } from 'react'

import { Button } from '../ui/button'
import { Loader, ShoppingCart } from 'lucide-react'
import toast from 'react-hot-toast'
import { CartContext } from '../contexts/cartContext'
import { AddToCartAction } from './action/addtocart.action'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
export default function AddToCart({productId}:{productId:string}) {
 let{getCart,setCartData}= useContext(CartContext)
const [isLoading, setIsLoading] = useState(false)
const session=useSession()
const router=useRouter()
    async function addProductToCart(){
       if(session.status=='authenticated'){
         setIsLoading(true)
    let data=await  AddToCartAction(productId)
    data.status=='success'&& toast.success('product added to cart successfully!')
    setCartData(data)
        setIsLoading(false)
       }else{
router.push('/login')
    }
    }
    
  return <>
   
    <Button onClick={addProductToCart} className='grow bg-gray-800 p-5  hover:bg-gray-900 lg:p-6 lg:text-xl rounded-xl text-lg cursor-pointer'>{isLoading?<Loader className='animate-spin'/>:<ShoppingCart className='size-6'/>} Add to cart </Button>
  
  
  </>
}
