'use client'
import Loading from '@/app/loading'
import { Button } from '@/components/ui/button'
import { allordersI } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ShoppingCartIcon } from 'lucide-react'

export default function AllOrders() {
const [allOrdersData, setAllOrdersData] = useState<allordersI[]| null>(null)
const baseUrl=process.env.NEXT_URL
  const [isloading, setIsLoading] = useState(false)
async function GetUserOrders() {
  setIsLoading(true)
        const idResponse = await fetch(`/api/get-id-from-token`)
        const userId = await idResponse.json()
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`)
        const data = await res.json()
        setAllOrdersData(data)
      
        setIsLoading(false)
      
    }
  useEffect(() => {GetUserOrders()}, [])


  return <>
  <div className='px-9 py-10 min-h-[75vh]  '>
       {allOrdersData?.length==0?isloading?<Loading/>:
        <div className='min-h-[75vh] flex justify-center flex-col items-center'>

  <h2 className='orderscover size-85'></h2>

        <h2 className='font-bold text-4xl pb-3'>No orders placed yet</h2>
        <p className='pb-7 font-medium pt-3 text-xl'>Discover and create your orders</p>
<Link href={'/products'}><Button className='grow  lg:p-7  lg:text-xl rounded-xl  cursor-pointer'><ShoppingCartIcon className='size-6' />Start shopping </Button></Link>
    

  </div>
       :   isloading?<Loading/>:<><p className='font-bold text-3xl pb-10'>All Orders</p>  {allOrdersData?.map((order)=><div key={order._id} className="w-full shadow mb-6 px-6 rounded-md border border-divider ">
         <div className='py-5'>

 <h2 className='text-xl font-semibold py-2'>Order #{ order?.id}</h2>
 <p className='py-1'>{order?.createdAt.split('.',1).join().replace('T',' ')}</p>
 <p className='py-1'>Payment: { order?.paymentMethodType} </p>
 <p className='py-1'>Delivered: <span className='text-[#D38700]'>No</span></p>
 <p className='py-1'>Total: <span className='font-bold text-gray-600'>{ order?.totalOrderPrice} EGP</span></p>
 <div className='relative'>
   <h2 className='text-lg py-2 pb-2 font-semibold'>Shipping Address</h2>
   <p className='py-1'>{ order.shippingAddress.details} <span>,{ order.shippingAddress.city}</span></p>
   <p className='py-2'>{ order.shippingAddress.phone}</p>
<Accordion type="single" collapsible>
                <AccordionItem value={order._id}>
                  <AccordionTrigger>
                  View Order Items ({order.cartItems.length})
                  </AccordionTrigger>

                  <AccordionContent>
                    <div className="space-y-4 pt-4">
                      {order.cartItems.map(item => (
                        <div key={item._id} className="flex gap-4 items-center border rounded-md p-3" > 
                          <Image src={item.product.imageCover} width={90} height={90} className="rounded-md w-30 object-cover" alt={item.product.title} />
                          <div>
                            <h4 className="font-semibold">
                              {item.product.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              Qty: {item.count} | Price:{" "}
                              {item.price} EGP
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
    <p className=' text-end'>Last updated: { order?.updatedAt.split('.',1).join().replace('T',' ')} AM</p>

 </div>
        </div>
      </div>)}
      
      </>}
     
    </div>
   </>

}
