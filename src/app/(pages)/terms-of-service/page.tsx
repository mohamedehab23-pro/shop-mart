
import Link from 'next/link'
export default function TermsOfService() {
  return <>
  <div className='min-h-screen mt-2 mb-12 py-12 flex justify-center items-center bg-gray-50'>
<div className='bg-white rounded-2xl p-8  w-240 shadow '>
<h2 className='py-3 text-3xl font-bold'>Terms of Service</h2>
<div className=' p-2'>
<div>
   <h3 className=' text-lg text-gray-800/80 font-semibold'>Last updated: <span className='text-md font-normal'> 9/20/2025</span></h3>
<h2 className='pt-4 text-2xl font-semibold'>Acceptance of Terms</h2>

   <p className='py-3 font-normal text-lg '>By accessing and using ShopMart, you accept and agree to be bound by the terms and provision of this agreement.</p>

<h2 className='pt-4 text-2xl font-semibold'>Use License</h2>
 <p className='py-3 font-normal text-lg '>Permission is granted to temporarily download one copy of the materials on ShopMart for personal, non-commercial transitory viewing only.</p>

<h2 className='pt-4 text-2xl font-semibold'>Product Information</h2>
 <p className='py-3 font-normal text-lg '>We strive to provide accurate product information, but we do not warrant that product descriptions or other content is accurate, complete, reliable, or error-free.</p>

<h2 className='pt-4 text-2xl font-semibold'>Pricing and Payment</h2>
<p className='py-3 font-normal text-lg '>All prices are subject to change without notice. Payment is due at the time of purchase.</p>

<h2 className='pt-4 text-2xl font-semibold'>Returns and Refunds</h2>
<p className='py-3 font-normal text-lg '>Returns are accepted within 30 days of purchase. Items must be in original condition with all tags attached.</p>

<h2 className='pt-4 text-2xl font-semibold'>Contact Information</h2>

   <p className='py-3 font-normal text-lg '>If you have any questions about these Terms of Service, please contact us at <Link target='_blank' className='text-blue-600 hover:underline' href='https://outlook.live.com/mail/0/'>legal@shopmart.com.</Link></p>

</div>


</div>
</div>
  </div>
  </>
}
