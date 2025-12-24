import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import Link from 'next/link'


export default function Loading() {
  return <>
  <div className='flex flex-col items-center justify-center min-h-screen'>
    <div className='flex gap-2 items-center'>
  <Button className='text-3xl'>S</Button>
<h2 className='text-4xl font-bold'><Link href={'/'}>ShopMart</Link></h2>

</div> 
 <Spinner className=" mt-5 size-8" />
  </div>
  
  </>
}
