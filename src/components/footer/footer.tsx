import Link from 'next/link'
import Image from 'next/image'
import sora from '../../app/svgviewer-output.svg'

export default function Footer() {
  return <>
  <div className="container border-t py-10 gap-6 ps-6 border-divider mx-auto text-start  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

  <div className='flex flex-col  max-w-60   gap-2 items-start'>
    <div className='flex gap-3 text-start'>
<Link href={'/'}><Image src={sora} width={150} height={100} alt=''/></Link>

    </div>
<p className='text-gray-600'>Your one-stop destination for the latest technology, fashion, and lifestyle products. Quality guaranteed with fast shipping and excellent customer service.</p>
<div className='flex items-center gap-2'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

<p>  123 Shop Street, Octoper City, DC 12345</p>
</div>
<div className='flex items-center gap-2'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>


<p> (+20) 01093333333</p>
</div>
<div className='flex items-center gap-2'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
</svg>



<p> support@shopmart.com</p>
</div>
</div>
<div>
  <h2 className='font-bold text-[20px]'>SHOP</h2>
 <p className='my-4' ><Link href={'/categories'}>Electronics</Link></p> 
 <p className='my-4' ><Link href={'/categories'}>Fashion</Link></p> 
 <p className='my-4' ><Link href={'/categories'}>Home & Garden</Link></p> 
 <p className='my-4' ><Link href={'/categories'}>Sport</Link></p> 
 <p className='my-4' ><Link href={'/categories'}>Deals</Link></p> 

</div>
<div>
  <h2 className='font-bold text-[20px]'>CUSTOMER SERVICE</h2>
 <p className='my-4' ><Link href={'/contact'}>Contact Us</Link></p> 
 <p className='my-4' ><Link href={'/help'}>Help Center</Link></p> 
 <p className='my-4' ><Link href={'/track-order'}>Track Your Order</Link></p> 
 <p className='my-4' ><Link href={'/returns'}>Returns & Exchanges</Link></p> 
 <p className='my-4' ><Link href={'/*'}>Size Guide</Link></p> 

</div>
<div>
  <h2 className='font-bold text-[20px]'>ABOUT</h2>
 <p className='my-4' ><Link href={'/about'}>About shopmart</Link></p> 
 <p className='my-4' ><Link href={'/*'}>Careers</Link></p> 
 <p className='my-4' ><Link href={'/*'}>Press</Link></p> 
 <p className='my-4' ><Link href={'/*'}>Investor Relations</Link></p> 
 <p className='my-4' ><Link href={'/*'}>Sustainability</Link></p> 

</div>
<div>
  <h2 className='font-bold text-[20px]'>POLICIES</h2>
 <p className='my-4' ><Link href={'/privacy-policy'}>Privacy Policy</Link></p> 
 <p className='my-4' ><Link href={'/terms-of-service'}>Terms of Service</Link></p> 
 <p className='my-4' ><Link href={'/*'}>Cookie Policy</Link></p> 
 <p className='my-4' ><Link href={'/*'}>Shipping Policy</Link></p> 
 <p className='my-4' ><Link href={'/*'}>Refund Policy</Link></p> 

</div>
  </div>
  
  
  </>
}