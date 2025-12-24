'use client'
import { useContext, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CartContext } from '@/components/contexts/cartContext'
import Loading from '@/app/loading'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { Loader, ShoppingCart, ShoppingCartIcon, Trash2 } from 'lucide-react'
import CheckOut from '@/components/checkOut/CheckOut'
import { removeFromCartAction } from './_action/removeFromCart.action'
import { updateCartItemQuantityAction } from './_action/updateCartItemQuantity.action'
import { clearCartItemAction } from './_action/clearCartItem.action'
export default function Cart() {
const [isClearing, setIsClearing] = useState<boolean>(false)
  const [removingId, setRemovingId] = useState<string|null>(null)
  const [updatingId, setUpdatingId] = useState<string|null>(null)
let{cartData,getCart,setCartData}=useContext(CartContext)

if(typeof cartData?.data?.products[0]?.product=='string'||cartData==null){
  getCart()

}

async function removeCartItem(productId:string){
  setRemovingId(productId)
const data= await removeFromCartAction(productId)

if(data.status=='success'){
  toast.success('product removed successfully')
  setCartData(data)
}
  setRemovingId(null)


}
async function updateCartItem(productId:string,count:number){
  setUpdatingId(productId)
const data=await updateCartItemQuantityAction(productId,count)
if(data.status=='success'){
  toast.success('product quantity updated successfully')
  setCartData(data)
}
  setUpdatingId(null)


}

async function clearCart(){
setIsClearing(true)
const data= await clearCartItemAction()
if(data.message=='success'){
  setCartData(null)
}
setIsClearing(false)

}
if (!cartData || typeof cartData?.data?.products[0]?.product === 'string') {
  return <Loading />;
}
  return <>
    {isClearing||typeof cartData?.data.products[0]?.product=='string'?<Loading/>:cartData?.numOfCartItems!>0?<div  className='min-h-screen lg:py-0 py-12 container mx-auto '>
      <h1 className='text-4xl lg:pt-8 font-bold'>Shopping Cart</h1>
      <p className='text-gray-500  pt-2 text-xl'>{cartData?.numOfCartItems} items in your cart</p>
      <div className='grid lg:grid-cols-3 lg:pt-10 gap-6'>
        <div className='lg:col-span-2 '>
          {cartData?.data.products.map((item)=><Card key={item._id} className='flex  flex-row my-2 items-center gap-8 justify-between'>
            <div className='flex  items-center w-full  '>
             <Image src={item.product.imageCover} className='w-40 object-cover' width={300} height={300} alt={item.product.title}/>
              <div className=' w-full'>
                <CardHeader>
                  <CardTitle className='text-xl'>{item.product.title}</CardTitle>
                  <CardDescription className='text-lg'>{item.product.brand.name} . {item.product.category.name}  </CardDescription>
                </CardHeader>
                <CardContent className='flex gap-3 items-center pt-4'>
                   <button aria-label='decrease' disabled={item.count==1} onClick={()=>updateCartItem(item.product._id,item.count-1)} className='rounded-lg size-8 hover:bg-accent border cursor-pointer'>-</button>
                  <h2>{updatingId==item.product.id?<Loader className='animate-spin'/>: item.count}</h2>
                   <button aria-label='increase' onClick={()=>updateCartItem(item.product._id,item.count+1)} className='rounded-lg size-8 hover:bg-accent border cursor-pointer'>+</button>
                </CardContent>

              </div>


            </div>
            <div className='w-full  text-end py-5'>
              <CardHeader className='pb-3'>
                <CardTitle >EGP {item.price}.00</CardTitle>
                <CardDescription className='text-lg'>each</CardDescription>
              </CardHeader>
              <CardContent>
              </CardContent>
 <Dialog>
      <form>
        <DialogTrigger asChild>
          <button aria-label='remove'  className='text-md hover:underline  cursor-pointer me-6  text-destructive '> Remove</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] py-10">
          <DialogHeader>
            <DialogTitle className='text-lg'>Are You Sure You Want To Remove This Item?</DialogTitle>
            <DialogDescription className='text-md'>
              think again...🤔,it's on sale don't miss it.
            </DialogDescription>
          </DialogHeader>
          
          <DialogFooter>
            <DialogClose asChild>
              <Button className='cursor-pointer text-md' variant="outline">Cancel</Button>
            </DialogClose>
            <Button className='cursor-pointer text-md' onClick={()=>removeCartItem(item.product._id)} type="submit">{removingId&& <Loader className='animate-spin'/>}Save </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
            </div>

          </Card>)}
    
        </div>
       
      
       

        <div className=' my-2 sticky top-5 end-0'>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl font-bold'>Order Summary</CardTitle>
              <div className='flex justify-between items-center'>
                <CardDescription className='text-lg'>Subtotal: ({cartData?.numOfCartItems} items)</CardDescription>
                <CardDescription className='text-xl font-semibold text-black'>EGP {cartData?.data.totalCartPrice}.00</CardDescription>
              </div>
              <div className='flex justify-between items-center border-b border-divider pb-3'>
                <CardDescription  className='text-lg'>Shipping</CardDescription>
                <CardDescription className='text-green-700 text-md font-semibold'>Free</CardDescription>
              </div>

            </CardHeader>
            <CardContent className='flex justify-between items-center'>
              <p className='font-semibold text-lg'>Total</p>
              <p className='text-lg font-bold'>{cartData?.data.totalCartPrice}</p>
            </CardContent>
            <CardContent >

             <Link href={'/products'}>  <Button className='w-full cursor-pointer text-lg mb-3 py-5' variant={'outline'}>Continue Shopping</Button></Link>
             <CheckOut cartId={cartData?.cartId!}/>
            </CardContent>

          </Card>
          <Button onClick={()=>clearCart()}  variant={'outline'} className='text-red-600 cursor-pointer absolute end-0  hover:text-red-600 text-lg rounded-3xl py-2 mt-4 text-end'>
            {isClearing?<Loader className='animate-spin'/>:<Trash2/>}
            clear cart</Button>
        </div>
      </div>
    </div>:
   <div className='min-h-[75vh] flex justify-center flex-col items-center'>

  <h2 className='image size-60'></h2>

        <h2 className='font-bold text-4xl pb-3'>Your cart is currently empty</h2>
        <p className='pb-7 font-medium pt-3 text-xl'>Looks like you haven't made your choice </p>
<Link href={'/products'}><Button className='grow  p-6 text-xl rounded-xl cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
Add To Cart </Button></Link>     

  </div>
    }

  </>
}
