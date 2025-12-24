
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function trackOrder() {
  return <>
  <div className='min-h-screen mt-2 mb-12 py-12 flex justify-center items-center bg-gray-50'>
<div className='bg-white rounded-2xl p-8  w-210 shadow '>
<h2 className='py-3 text-3xl font-bold'>Track Your Order</h2>
<div className=' p-3'>
<div>
   <h3 className=' text-2xl font-semibold'>Enter Your Order Information</h3>
<div className='py-3'>
   <h2 className='pt-4 text-lg font-semibold'>Order Number</h2>
<Input className='mt-3'  placeholder='Enter Your Order Number'/>
</div>
<div className='py-2'>
   <h2 className='pt-4 text-lg font-semibold'>Email Address</h2>
<Input className='mt-3' placeholder='Enter Your Email Address'/>
</div>
<Button className='bg-blue-600 p-5 text-lg font-normal hover:bg-blue-700 my-4'>Track Order</Button>
<h2 className='py-4 text-xl font-semibold'>Order Status</h2>

<div className='bg-gray-100 rounded-2xl text-center py-7 '>
   <p className='text-gray-600'>Enter your order number and email above to track your order status.</p>
   </div>  
<h2 className='pt-4 text-xl font-semibold'>Need Help?</h2>

   <p className='py-3 text-lg my-2 text-gray-600'>If you're having trouble tracking your order, please contact our customer service team.</p>
  
  <Button className='bg-gray-600 font-normal text-lg cursor-pointer hover:bg-gray-700 p-5'><Link href={'/contact'}>Contact Support</Link></Button>




</div>


</div>
</div>
  </div>
  </>
}
