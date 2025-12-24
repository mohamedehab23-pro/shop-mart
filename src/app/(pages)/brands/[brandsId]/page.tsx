
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import MyStar from '@/components/mystar/myStar'
import Link from 'next/link'
import { Params } from 'next/dist/server/request/params'
import { productI } from '@/interfaces'
import AddToCart from '@/components/AddToCart/AddToCart'
import AddProductToWishList from '@/components/AddToWishList/AddProductToWishlist'
import { cookies } from "next/headers"
export default async function BrandsDetails({params}:{params:Params}) {
let {brandsId}=await params
const response=await fetch(`${process.env.API_URL}products?brand=`+brandsId)
const {data:brands}:{data:productI[]}=await response.json()

const cookieStore = await cookies(); 
  const allCookies = cookieStore.toString();
const wishlistRes = await fetch(`${process.env.NEXT_URL}/api/get-wishlist`, {
    cache: 'no-store',
    headers: {
      cookie: allCookies 
    },
  });
  const wishlistData = await wishlistRes.json()
  console.log("Full Wishlist Data:", wishlistData); 
const wishlistIds = wishlistData?.data?.map((item: any) => item._id) || [];
  return<>

  <div className='container py-8 mx-auto'>
<h2 className='text-3xl ps-3 py-3 font-bold'>{brands.length>0?brands[0].brand.name:<span>Brands</span>}</h2>
<h2 className='text-2xl ps-3 py-3 '>products from this brand</h2>
 {brands.length==0?<div className='flex justify-center items-center min-h-[50vh]'>
<h2 className='text-2xl font-normal'>No products found in this brand.</h2>
 </div>
 
 : <div className=' grid grid-cols-1 sm:grid-cols-2 pt-3 md:grid-cols-3 lg:grid-cols-4 gap-3'>
{brands.map((item)=><div className='px-2' key={item._id}>

<Card className='h-full'>
  <Link href={'/products/'+item._id}>
  <CardHeader>
    <Image src={item.imageCover} className='w-full h-75  object-cover'  width={300} height={300} alt={item.brand.name}/>
    <CardDescription className='py-1 text-lg'>{item.brand.name}</CardDescription>
    <CardTitle className='font-bold '>{item.title.split(' ').slice(0,2).join(' ')}...</CardTitle>
    <CardDescription className='py-1 text-lg'>{item.category.name}</CardDescription>
  </CardHeader>
  <CardContent>
<div className="flex py-1 ">
<MyStar/>
<MyStar/>
<MyStar/>
<MyStar/>
<MyStar/>
    <p className='ms-2'>({item.ratingsQuantity})</p>

</div>
<p  className='font-semibold text-xl pt-2'> EGP <span>{item.price},00</span> </p>
  </CardContent>
  </Link>
  <CardFooter className='gap-2 mt-6 cursor-pointer'>
<AddToCart productId={item._id}/>
    <AddProductToWishList initialIsFavorite={wishlistIds.includes(item._id)} productId={item._id}/>
</CardFooter>
</Card>

</div>)}
  </div> } 
  </div>
  </>
}
