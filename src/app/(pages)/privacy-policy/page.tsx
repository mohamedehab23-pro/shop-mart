import Link from 'next/link'
export default function Privacy() {
  return <>
  <div className='min-h-screen mt-2 mb-12 py-12 flex justify-center items-center bg-gray-50'>
<div className='bg-white rounded-2xl p-8  w-240 shadow '>
<h2 className='py-3 text-3xl font-bold'>Privacy Policy</h2>
<div className=' p-2'>
<div>
   <h3 className=' text-lg text-gray-800/80 font-semibold'>Last updated: <span className='text-md font-normal'> 9/20/2025</span></h3>
<h2 className='pt-4 text-2xl font-semibold'>Information We Collect</h2>

   <p className='py-3 font-normal text-lg '>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
<h2 className='pt-4 text-2xl font-semibold'>How We Use Your Information</h2>

   <p className='py-3 font-normal text-lg '>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
<h2 className='pt-4 text-2xl font-semibold'>Information Sharing</h2>

   <p className='py-3 font-normal text-lg '>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
<h2 className='pt-4 text-2xl font-semibold'>Data Security</h2>

   <p className='py-3 font-normal text-lg '>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
<h2 className='pt-4 text-2xl font-semibold'>Contact Us</h2>

   <p className='py-3 font-normal text-lg '>If you have any questions about this Privacy Policy, please contact us at <Link target='_blank' className='text-blue-500 hover:underline' href='https://outlook.live.com/mail/0/'>privacy@shopmart.com.</Link></p>

</div>


</div>
</div>
  </div>
  </>
}
