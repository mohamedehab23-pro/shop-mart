
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {

  return <>

  <div className="py-25 container mx-auto  ">
<div className=" text-center w-2/3 py-8 mx-auto">

  <h1 className="py-3 text-4xl lg:text-5xl font-extrabold">Welcome To Shop Mart</h1>
  <p className="py-7 text-lg lg:text-2xl">Discover the latest technology,fashion and lifestyle products. Quality guaranteed with <br /> fast shipping and excellent customer service.</p>
  <div className="flex gap-3 justify-center  items-center">
     <Button className="lg:p-6 p-5 bg-gray-800 hover:bg-gray-900 rounded-xl text-lg cursor-pointer"><Link className="text-lg" href={'/products'}>Shop Now</Link></Button>
     <Button className="border-black rounded-xl text-lg  p-5 lg:p-6 cursor-pointer  border-2" variant="outline"><Link className="text-lg" href={'/categories'}>Browse Categories</Link></Button>

  </div>

  </div>
  </div>
  
  
  </>
}
