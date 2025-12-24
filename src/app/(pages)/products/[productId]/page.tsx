import { Params } from 'next/dist/server/request/params'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { productI } from '@/interfaces';
import MyStar from '@/components/mystar/myStar';
import ProductCarousel from '@/components/productCarousel/productCarousel';
import AddToCart from '@/components/AddToCart/AddToCart';
import AddProductToWishList from '@/components/AddToWishList/AddProductToWishlist';
import { cookies } from 'next/headers'; 

export const dynamic = 'force-dynamic';

export default async function ProductDetails({params}:{params:Params}) {
  const {productId} = await params

  
  const response = await fetch(`${process.env.API_URL}products/` + productId)
  const {data:product}:{data:productI} = await response.json()

  const wishlistRes = await fetch(`${process.env.NEXT_URL}/api/get-wishlist`, {
    cache: 'no-store',
    headers: {
      cookie: (await cookies()).toString(), 
    },
  });

  const wishlistData = await wishlistRes.json();
  
  const wishlistIds = wishlistData?.data?.map((item: any) => item._id) || [];

  const isFavorite = wishlistIds.includes(productId);

  return (
    <>
      <div className='min-h-screen flex justify-center items-center'>
        <div className='lg:w-2/4 w-3/4 py-3 mx-auto'>
          <Card className='grid lg:grid-cols-2 py-2 items-center'>
            <div>
              <ProductCarousel images={product.images} altContent={product.title}/>
            </div>
            <div>
              <CardHeader>
                <CardDescription className='py-1 text-lg'>{product.brand.name}</CardDescription>
                <CardTitle className='py-1 text-lg'>{product.title}</CardTitle>
              </CardHeader>
              <CardContent className='py-1 text-lg'>
                <p className='py-1 text-lg'>{product.description}</p>
                <p className='py-2'>{product.category.name}</p>
                <div className='flex py-2'>
                  <MyStar/><MyStar/><MyStar/><MyStar/><MyStar/>
                  <p>({product.ratingsAverage})</p>
                </div>
                <p className='py-2 font-bold'>price:<span>{product.price}</span> EGP</p>
              </CardContent>

              <CardFooter className='pt-4 space-x-2'>
                <AddToCart productId={product._id}/>
                <AddProductToWishList 
                  productId={product._id} 
                  initialIsFavorite={isFavorite} 
                />
              </CardFooter>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}