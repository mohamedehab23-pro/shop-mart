import { productI } from '@/interfaces';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import MyStar from '@/components/mystar/myStar';
import Link from 'next/link';
import AddToCart from '@/components/AddToCart/AddToCart';
import AddProductToWishList from '@/components/AddToWishList/AddProductToWishlist';
import { cookies } from 'next/headers';

export default async function Products() {
const response= await fetch(`${process.env.API_URL}products`)

const {data:products}:{data:productI[]}=await response.json()

const cookieStore = await cookies(); 
  const allCookies = cookieStore.toString();
const wishlistRes = await fetch(`${process.env.NEXT_URL}/api/get-wishlist`, {
    cache: 'no-store',
    headers: {
      cookie: allCookies 
    },
  });
  const wishlistData = await wishlistRes.json()
const wishlistIds = wishlistData?.data?.map((item: any) => item._id) || [];
  return <>
  <div className='container py-8 mx-auto grid  grid-cols-1 sm:grid-cols-2 pt-3 md:grid-cols-3 lg:grid-cols-4 gap-3'>
{products.map((product)=><div className='sm:w-full w-[90%] p-1 mx-auto' key={product._id}>
<Card >
  <Link href={'/products/'+product._id}>
  <CardHeader>
    <Image src={product.imageCover} className='w-full h-85 object-cover' width={300} height={300} alt={product.title}/>
    <CardDescription className=' text-lg'>{product.brand.name}</CardDescription>
    <CardTitle className='py-1 text-lg'>{product.title.split(' ',2).join(' ')}</CardTitle>
    <CardDescription className='text-lg'>{product.category.name}</CardDescription>
  </CardHeader>
  <CardContent>
<div className="flex py-4 items-center">
<MyStar/>
<MyStar/>
<MyStar/>
<MyStar/>
    <p>({product.ratingsAverage})</p>

</div>
<p className='font-bold text-lg'>price : <span >{product.price}</span> EGP</p>
  </CardContent>
  </Link>
  <CardFooter className='gap-2 mt-4 cursor-pointer'>
<AddToCart productId={product._id}/>
    <AddProductToWishList initialIsFavorite={wishlistIds.includes(product._id)} productId={product._id}  />
</CardFooter>
</Card>

</div>)}
  </div>
  
  
  </>
}
