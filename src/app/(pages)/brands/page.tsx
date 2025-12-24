import { BrandI } from '@/interfaces';
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import Link from 'next/link';
export default async function Brands() {
const response=await  fetch(`${process.env.API_URL}brands`)
const {data:brands}:{data:BrandI[]}=await response.json()

  return <>
  <div className='container mx-auto '>
 <h2 className='text-3xl ms-6 xl:ms-0  py-3 font-bold'>Brands</h2>
  <div className=" py-8  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
   
   {brands.map((brand)=><div className='sm:w-full w-[90%] mx-auto p-1' key={brand._id}>
 <Card className='hover:shadow-lg hover:duration-200'>
  <Link href={'/brands/'+brand._id}>
  <CardHeader>
    <CardTitle><Image src={brand.image} className='w-full h-50 object-cover' width={300} height={300} alt='brand-name'/></CardTitle>
  </CardHeader>
  <CardFooter>
    <p className='mx-auto  font-bold text-2xl'>{brand.name}</p>
  </CardFooter>
 </Link>
</Card>

   </div>)}
  </div>
  </div>

  
  
  </>
}
