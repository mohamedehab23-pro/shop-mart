import { CategoryI } from '@/interfaces';
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import Link from 'next/link';
export default async function Categories() {
 const response=await fetch(`${process.env.API_URL}categories`)
 const {data:categories}:{data:CategoryI[]}=await response.json()
 
  return <>
  <div className='container mx-auto'>
<h2 className='text-3xl ms-6 xl:ms-0 py-3 font-bold'>Categories</h2>
    <div className=" gap-3 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
{categories.map((category)=><div className='p-1 sm:w-full w-[90%] mx-auto' key={category._id}>
<Link href={'/categories/'+category._id}>
<Card className='hover:shadow-xl'>
  <CardHeader>
    <CardTitle><Image src={category.image} className='w-full h-85 object-cover' width={300} height={300} alt='category'/></CardTitle>
  </CardHeader>

  <CardFooter>
    <p className='font-bold text-2xl  mx-auto'>{category.name}</p>
  </CardFooter>
</Card>
</Link>
</div>)}
    
  </div>
  </div>
  
  </>
}
