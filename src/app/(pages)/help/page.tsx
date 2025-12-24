import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export default function HelpCenter() {
  return <>
  <div className='min-h-screen mt-2 mb-12 py-12 flex justify-center items-center bg-gray-50'>
<div className='bg-white rounded-2xl p-8  w-210 shadow '>
<h2 className='py-3 text-3xl font-bold'>Help Center</h2>
<div className=' p-3'>
<div>
   <h3 className=' text-2xl font-bold'>Frequently Asked Questions</h3>
<h2 className='pt-4 text-xl font-semibold'>How do I place an order?</h2>

   <p className='py-3 border-b text-lg border-divider'>Simply browse our products, add items to your cart, and proceed to checkout. You'll need to create an account or sign in to complete your purchase.</p>
<h2 className='pt-4 text-xl font-semibold'>What payment methods do you accept?</h2>

   <p className='py-3 border-b text-lg border-divider'>We accept all major credit cards, PayPal, and other secure payment methods.</p>
  
<h2 className='pt-4 text-xl font-semibold'>How long does shipping take?</h2>

   <p className='py-3 border-b text-lg border-divider'>Standard shipping takes 3-5 business days. Express shipping options are available for faster delivery.</p>
  
<h2 className='pt-4 text-xl font-semibold'>Can I return or exchange items?</h2>

   <p className='py-3 border-b text-lg border-divider'>Yes, we offer a 30-day return policy for most items. Items must be in original condition with tags attached.</p>
  
<h2 className='pt-4 text-xl font-semibold'>How do I track my order?</h2>

   <p className='py-3 border-b text-lg border-divider'>Once your order ships, you'll receive a tracking number via email. You can also track your order in your account.</p>
  
<h2 className='pt-8 text-xl font-semibold'>Still Need Help?</h2>

   <p className='py-3 '> If you can't find the answer you're looking for, our customer service team is here to help.</p>
  <div className='flex gap-3 items-center py-3'>
    <Button className='  text-lg cursor-pointer font-normal bg-blue-600 p-5 hover:bg-blue-700 '><Link href={'/contact'}>Contact Us</Link></Button>
  
  <Button className='bg-gray-600 font-normal text-lg cursor-pointer hover:bg-gray-700 p-5'>Email Support</Button>
  </div>



</div>


</div>
</div>
  </div>
  </>
}
