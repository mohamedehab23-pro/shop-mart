'use client'
import { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import MyStar from '@/components/mystar/myStar'
import AddToCart from '@/components/AddToCart/AddToCart'
import { productI } from '@/interfaces'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { RemoveFromWishlistAction } from '@/components/RemoveFromWishlist/action/removefromwishlist.action'
import Loading from '@/app/loading'
import { Button } from '@/components/ui/button'

export default  function WishList() {
  const [isLoading, setIsLoading] = useState(false)
  const [isFetched, setIsFetched] = useState(false)
  const [wishListData, setWishListData] = useState<productI[]>([])


async function getWishList(){
    setIsLoading(true)
  let response=await fetch('/api/get-wishlist')
  let {data}:{data:productI[]}=await response.json()
  setWishListData(data)
    setIsLoading(false)
     setIsFetched(true)
}
useEffect(()=>{
    getWishList()
},[])
async function removeFromWishlist(productId:string){
   

  let data =await RemoveFromWishlistAction(productId)

if(data.status=='success'){
  getWishList()

  toast.success('product removed successfully')
  
}

  
}
if (!isFetched || isLoading) {
  return <Loading />
}

if(wishListData?.length==0){
  return(
  <div className='min-h-[75vh] flex justify-center flex-col items-center'>

        <h2 className='cover size-69 '></h2>
        <h2 className='font-bold text-4xl pb-3'>Your wishList is empty</h2>
        <p className='pb-7 font-medium pt-3 text-xl'>Create your first wishlist request</p>
<Link href={'/products'}><Button className='grow  p-6 text-xl rounded-xl cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
Add To Wishlist </Button></Link>
     

  </div>)
}else{ return <>

    {isLoading?<Loading/>: <> <p className='ms-20 text-3xl font-bold py-4'>WishList Products</p>
  <div className='container py-8 mx-auto grid grid-cols-1 sm:grid-cols-2 pt-3 md:grid-cols-3 lg:grid-cols-4 gap-3'>
{wishListData?.map((product)=><Card key={product._id}>
 <div className='relative'>
<button onClick={()=>removeFromWishlist(product._id)} className='absolute -top-3 cursor-pointer end-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>
</button>   <Link href={'/products/'+product._id}>
  <CardHeader >
    <Image src={product.imageCover} className='w-full h-75 object-cover' width={300} height={300} alt={product.title}/>
    <CardDescription className=' text-lg'>{product.brand?.name}</CardDescription>
    <CardTitle className='py-1 text-lg'>{product.title?.split(' ',2).join(' ')}</CardTitle>
    <CardDescription className='text-lg'>{product.category?.name}</CardDescription>
  </CardHeader>
  <CardContent>
<div className="flex py-4 items-center">
<MyStar/>
<MyStar/>
<MyStar/>
<MyStar/>
    <p>{product.ratingsAverage}</p>

</div>
<p className='font-bold text-lg'>price:<span >{product.price}</span> EGP</p>
  </CardContent>
  </Link>
  </div>
  <div className='w-full flex p-5 items-center'>

  <AddToCart  productId={product._id}/>
  </div>

</Card>)}


  </div> </>}
   
  </>}


 
}




