
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export default function Returns() {
  return <>
  <div className='min-h-screen mt-2 mb-12 py-12 flex justify-center items-center bg-gray-50'>
<div className='bg-white rounded-2xl p-8  w-240 shadow '>
<h2 className='py-3 text-4xl font-bold'>Returns & Exchanges</h2>
<div className=' p-3'>
<div>
   <h3 className=' text-2xl font-semibold'>Return Policy</h3>

   <p className='py-3 text-lg '>We want you to be completely satisfied with your purchase. If you're not happy with your order, we'll make it right.</p>
<div className=' p-4  w-full bg-blue-100/50 rounded-2xl border border-blue-200'>
<h2 className='text-lg text-blue-900 font-semibold'>30-Day Return Window</h2>
<h2 className='text-lg text-blue-800'>You have 30 days from the delivery date to return or exchange your items.</h2>
</div>

<div className='pt-8'>
    <p className='text-2xl font-semibold'>Return Conditions</p>

    <ul className="my-6 ml-6 text-lg text-gray-700 list-disc [&>li]:mt-2">
      <li>Items must be in original condition with all tags attached</li>
      <li>Items must be unworn, unwashed, and unused</li>
      <li>Original packaging should be included when possible</li>
      <li>Some items may be excluded from returns (see product page for details)</li>
    </ul>
</div>
    <p className='text-2xl font-semibold'>How to Return</p>
<ul className='pt-4'>
    <li className='flex  gap-3'>
<div className='flex items-center justify-center'>
    <p className='size-7 border rounded-full text-white text-xl text-center bg-blue-600'>1</p>
</div>
<div className='pt-5'>
    <h2 className='text-xl'>Contact Us</h2>
    <p>Email us at returns@shopmart.com with your order number</p>
</div>
    </li>
    <li className='flex  gap-3'>
<div className='flex items-center justify-center'>
    <p className='size-7 border rounded-full text-white text-xl text-center bg-blue-600'>2</p>
</div>
<div className='pt-5'>
    <h2 className='text-xl'>Get Return Label</h2>
    <p>We'll send you a prepaid return shipping label</p>
</div>
    </li>
    <li className='flex  gap-3'>
<div className='flex items-center justify-center'>
    <p className='size-7 border rounded-full text-white text-xl text-center bg-blue-600'>3</p>
</div>
<div className='pt-5'>
    <h2 className='text-xl'>Ship Your Retur</h2>
    <p>Package your items and drop off at any authorized location</p>
</div>
    </li>
    <li className='flex  gap-3'>
<div className='flex items-center justify-center'>
    <p className='size-7 border rounded-full text-white text-xl text-center bg-blue-600'>4</p>
</div>
<div className='pt-5'>
    <h2 className='text-xl'>Receive Refund</h2>
    <p>We'll process your refund within 5-7 business days</p>
</div>
    </li>
</ul>
<div>

</div>
  

<h2 className='pt-8 text-2xl font-semibold'>Questions?</h2>

   <p className='py-3 '> If you have any questions about returns or exchanges, please don't hesitate to contact us.</p>
    <Button className='  text-lg cursor-pointer font-normal bg-blue-600 p-5 hover:bg-blue-700 '><Link href={'/contact'}>Contact Support</Link></Button>
  
  



</div>


</div>
</div>
  </div>
  </>
}
