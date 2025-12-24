'use client'
import { cartResponse } from "@/interfaces";

import { createContext, ReactNode, useEffect, useState } from "react";

export const CartContext=createContext<{
    cartData:cartResponse|null,
setCartData:(value:cartResponse|null)=>void,
isLoading:boolean,
setIsLoading:(value:boolean)=>void,
getCart:()=>void,
cartOwner:cartResponse|null,
setCartOwner:(value:cartResponse|null)=>void

}>({
    cartData:null,
    setCartData:()=>{},
isLoading:false,
setIsLoading:()=>{},
getCart:()=>{},
cartOwner:null,
setCartOwner:()=>{}

})
export default function CartContextProvider({children}:{children:ReactNode}){
    const [cartData, setCartData] = useState<cartResponse|null>(null)
    const [isLoading, setIsLoading] =useState(false)
    const [cartOwner, setCartOwner] =useState<cartResponse|null>(null)
    ؤ
async function getCart(){

const response= await fetch(`/api/get-cart`)
 const data=await response.json()
setCartOwner(data.cartOwner)
 
    setCartData(data)

}
useEffect(()=>{
    getCart()
},[])

    return <CartContext.Provider value={{cartData,setCartData,isLoading,setIsLoading,getCart,cartOwner,setCartOwner}}>

{children}
    </CartContext.Provider>
}