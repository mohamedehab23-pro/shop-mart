'use client'
import { useContext, useEffect } from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList

} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Heart, Loader, ShoppingCart, UserIcon } from 'lucide-react'
import sora from '../../app/svgviewer-output.svg'
import { Badge } from "@/components/ui/badge"
import { Button } from '../ui/button'
import { CartContext } from '../contexts/cartContext'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { usePathname} from 'next/navigation'
const navLink=[
  {name:'products',href:'/products'},
  {name:'brands',href:'/brands'},
  {name:'categories',href:'/categories'},
]
export default function Navbar() {
const pathname=usePathname()
 const{cartData,isLoading}= useContext(CartContext)
const session=useSession()

  return <>
  <nav className='py-3 bg-gray-100 text-2xl sticky top-0 z-50'>
  <div className="container mx-auto ">
    <div className="flex gap-5 px-8  flex-row justify-between md:items-center">
<div className='flex gap-2 items-center'>
<Link href={'/'}><Image src={sora} width={150} height={100} alt=''/></Link>
</div>
<NavigationMenu className='font-semibold hidden md:block text-2xl '>
  <NavigationMenuList className='md:flex hidden md:flex-row'>
    {navLink.map((link)=>{
      const isActive=pathname===link.href||(pathname.startsWith(link.href)&&link.href !=='/');
return(
<NavigationMenuItem key={link.name}>
      <NavigationMenuLink asChild>
        <Link  className={isActive?'text-white font-semibold bg-gray-800 lg:text-[19px] md:text-lg capitalize':'lg:text-[19px] md:text-lg text-[#323232] font-semibold capitalize'} href={link.href}>{link.name}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>

)
    })}
  </NavigationMenuList>
</NavigationMenu>
<div className='flex items-center gap-2'>
  <DropdownMenu>
  <DropdownMenuTrigger className='cursor-pointer'><UserIcon className='md:size-7'/></DropdownMenuTrigger>
  <DropdownMenuContent >
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    {session.status=='authenticated'?<>
           <div className='md:hidden'>
             <Link href="/products"><DropdownMenuItem>Products</DropdownMenuItem></Link>
        <Link href="/brands"><DropdownMenuItem>Brands</DropdownMenuItem></Link>
        <Link href="/categories"><DropdownMenuItem>Categories</DropdownMenuItem></Link>

           </div>
    <Link href={'/allorders'}>  <DropdownMenuItem>Your Orders</DropdownMenuItem> </Link>
    <Link href={'/profile'}>  <DropdownMenuItem>Address</DropdownMenuItem> </Link>
    <Link href={'/change-password'}>  <DropdownMenuItem>Change Password</DropdownMenuItem> </Link>
    <DropdownMenuItem onClick={()=>signOut({
      callbackUrl:'/'
    })}>logout</DropdownMenuItem>
    </>: <>
  <Link href={'/login'}>  <DropdownMenuItem>Login</DropdownMenuItem> </Link>
  <Link href={'/register'}>  <DropdownMenuItem>Register</DropdownMenuItem> </Link>
    </>}
    
 

  </DropdownMenuContent>
</DropdownMenu>
{session.status=='authenticated'&&<>
<div className='relative '>
  
<Link href={'/cart'}>
<ShoppingCart className='md:size-7'/>
 <Badge className="h-5 min-w-5 absolute -end-3 -top-3 rounded-full  px-1 font-mono tabular-nums">
          {isLoading?<Loader className='animate-spin'/>:cartData?.numOfCartItems}
        </Badge> 
</Link>
</div>
  <Link className='ms-2' href={'/wishlist'}><Heart className='md:size-7'/></Link>

</>}
</div>
  </div>
  </div>
  </nav>
  </>
}
