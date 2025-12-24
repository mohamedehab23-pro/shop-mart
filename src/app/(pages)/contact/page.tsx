import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
export default function ContactUs() {
  return <>
  <div className='min-h-screen mt-2 mb-12 flex justify-center items-center bg-gray-100'>
<div className='bg-white rounded-2xl p-12 '>
<h2 className='py-3 text-3xl font-bold'>Contact Us</h2>
<div className='flex w-full sm:flex-row flex-col gap-4 py-8'>
<div>
   <h3 className='py-3 text-xl font-semibold'>Get in Touch</h3>
   <p className='py-3'>We'd love to hear from you. Send us a message and <br /> we'll respond as soon as possible.</p>
   <h2 className='py-3 text-xl font-semibold'>Email</h2>
   <p className='py-3'>support@shopmart.com</p>
   <h2 className='py-3 text-xl font-semibold'>Phone</h2>
   <p>(+20) 01093333333</p>
   <h2 className='py-3 text-xl font-semibold'>Address</h2>
   <p>123 Shop Street, Octoper City, DC 12345</p>
</div>
<div>
<h2 className='py-3 text-xl font-semibold'>Send us a Message</h2>
<label className='py-4 text-lg font-semibold'>Name</label>
   <Input className='my-3 focus:outline-blue-500' type="text" />
<label className='py-4 text-lg font-semibold'>Email</label>
   <Input className='my-3' type="email" />
<label className='py-4 text-lg font-semibold'>Message</label>
<Textarea className='mt-1'/>
<Button className='mt-5 w-full text-xl cursor-pointer bg-blue-500 hover:bg-blue-400 py-6'>Send Message</Button>
</div>

</div>
</div>
  </div>
  </>
}
