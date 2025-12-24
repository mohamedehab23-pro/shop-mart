import AddToCart from '@/components/AddToCart/AddToCart';
import AddProductToWishList from '@/components/AddToWishList/AddProductToWishlist';
import MyStar from '@/components/mystar/myStar';
import { Card, CardHeader, CardDescription, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { productI } from '@/interfaces';
import { Params } from 'next/dist/server/request/params'
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';


export default async function CategoryDetails({params}:{params:Params}) {
 let {categoryId}= await params
  const response= await fetch(`${process.env.API_URL}products?category[in]=`+categoryId)
  const {data:categories}:{data:productI[]}=await response.json()
    
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
  return <>
<div className='container py-8 mx-auto'>
<h2 className='text-3xl p-3 font-bold'>{categories.length>0?categories[0].category.name:<p>categories</p>}</h2>
<h2 className='text-2xl p-3 '>products in this category</h2>
 {categories.length==0?<div className='flex justify-center items-center min-h-[50vh]'>
<h2 className='text-2xl font-normal'>No products found in this category.</h2>
 </div>
 
 : <div className=' grid grid-cols-1 sm:grid-cols-2 pt-3 md:grid-cols-3 lg:grid-cols-4 gap-3'>
{categories.map((category)=><div className='p-2' key={category._id}>

<Card >
  <Link href={'/products/'+category._id}>
  <CardHeader>
    <Image src={category.imageCover} className='w-full h-75 object-cover' width={300} height={300} alt={category.title}/>
    <CardDescription className='py-1 text-lg'>{category.brand.name}</CardDescription>
    <CardTitle className=' text-lg'>{category.title.split(' ',2).join(' ')}</CardTitle>
    <CardDescription className='py-1 text-lg'>{category.category.name}</CardDescription>
  </CardHeader>
  <CardContent>
<div className="flex py-1 items-center gap-2">
<div className='flex'>
  <MyStar/>
<MyStar/>
<MyStar/>
<MyStar/>
</div>
   <div>
     <p className='text-lg'>({category.ratingsAverage})</p>
   </div>

</div>
<p className='font-bold text-lg py-1'>price:<span >{category.price}</span> EGP</p>
  </CardContent>
  </Link>
  <CardFooter className='gap-2 mt-3 cursor-pointer'>
<AddToCart productId={category._id}/>

    <AddProductToWishList initialIsFavorite={wishlistIds.includes(category._id)} productId={category._id}/>
 
</CardFooter>
</Card>

</div>)}
  </div> } 
  </div>

  </>
}
