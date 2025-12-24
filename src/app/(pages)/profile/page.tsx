'use client'
import { AddressResponse, dataI } from "@/interfaces/address";

import toast from "react-hot-toast";


import { useEffect, useRef, useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from '@radix-ui/react-dropdown-menu'

import { Loader } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Loading from "@/app/loading";
import RemoveAddress from "@/components/removeAddress/removeAddress";
import { AddAddressAction } from "./_action/addAddress.action";



export default  function Profile() {
const [profileData, setProfileData] = useState<dataI[]|null>(null)
 const [isLoading, setIsLoading] = useState(false)
  const [addressShow, setAddressShow] = useState<dataI[]|null>(null)
   let nameInput=useRef<HTMLInputElement | null>(null)
 let detailsInput=useRef<HTMLInputElement | null>(null)
 let phoneInput=useRef<HTMLInputElement | null>(null)
 let cityInput=useRef<HTMLInputElement | null>(null)

async function GetAddress(){
  setIsLoading(true)
  const response= await fetch(`/api/get-addresses`)
const {data:addresses}:{data:dataI[]}=await response.json()
setAddressShow(addresses)
  setIsLoading(false)

}
useEffect(()=>{
  GetAddress()
},[])

 async  function AddAddress(){
  
  setIsLoading(true)

const address:AddressResponse=await AddAddressAction({name:nameInput.current!.value,
  details:detailsInput.current!.value,
  phone:phoneInput.current!.value,
  city:cityInput.current!.value
})
setAddressShow(address.data)
  setProfileData(address.data)
toast.success('address added successfully!')
setIsLoading(false)
 }


  
  return <>
{isLoading?<Loading/>:addressShow?.length==0?<div className="min-h-[75vh]  flex justify-center flex-col items-center">
<h2 className='addresscover size-50 sm:size-60'> </h2>
<Dialog>
      <form>
        <DialogTrigger asChild>
             <Button  className='grow  lg:p-7  lg:text-xl rounded-xl  cursor-pointer'>Add Address</Button>  
        </DialogTrigger>
         <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Enter Your Address</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label >Name:</Label>
              <Input  ref={nameInput} id="name-1" name="name" />
            </div>
            <div className="grid gap-3">
              <Label >Details:</Label>
              <Input ref={detailsInput} id="name-1" name="name" />
            </div>
            <div className="grid gap-3">
              <Label >Phone:</Label>
              <Input ref={phoneInput} id="name-1" name="name" />
            </div>
            <div className="grid gap-3">
              <Label >City:</Label>
              <Input ref={cityInput} id="name-1" name="name" />
            </div>
          </div>
         <DialogFooter>
            <DialogClose asChild>
              <Button className='cursor-pointer' variant="outline">Cancel</Button>
            </DialogClose>
           
            <Button onClick={()=>AddAddress()} className='cursor-pointer' type="submit">{isLoading&& <Loader className='animate-spin'/>}Save Address</Button>
          
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
</div> : <div className="container mx-auto py-6 min-h-[75vh]">
    <h2 className='text-3xl py-4 ps-6 font-bold'>Your Addresses</h2>
  <div className="grid  w-3/4 gap-6 md:grid-cols-2 lg:w-full  lg:grid-cols-3 py-5">
 {addressShow?.map((address)=><div key={address._id} className=' relative w-full py-6 mx-6 px-3 rounded-2xl shadow border border-divider'>
<RemoveAddress setAddressShow={setAddressShow}  addressId={address._id}/>

  <h2 className='py-2 text-lg'>name: {address.name} </h2>
  <h2 className='py-2 text-lg'>details: {address.details}</h2>
  <h2 className='py-2 text-lg'>phone: {address.phone}</h2>
  <h2 className='py-2 text-lg'>city: {address.city}</h2>

</div>)}

  </div>
 <div className='flex gap-3  items-center py-3'>
  <Dialog>
      <form>
        <DialogTrigger asChild>
             <Button  className='grow  lg:p-7 mx-6 lg:text-xl rounded-xl  cursor-pointer'>Add Address</Button>  
        </DialogTrigger>
         <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Enter Your Address</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label >Name:</Label>
              <Input placeholder="Full Name" ref={nameInput} id="name-1" name="name" />
            </div>
            <div className="grid gap-3">
              <Label >Details:</Label>
              <Input placeholder="Street, Building..." ref={detailsInput} id="name-1" name="name" />
            </div>
            <div className="grid gap-3">
              <Label >Phone:</Label>
              <Input placeholder="010..." ref={phoneInput} id="name-1" name="name" />
            </div>
            <div className="grid gap-3">
              <Label >City:</Label>
              <Input placeholder="Cairo" ref={cityInput} id="name-1" name="name" />
            </div>
          </div>
         <DialogFooter>
            <DialogClose asChild>
              <Button className='cursor-pointer' variant="outline">Cancel</Button>
            </DialogClose>
           
            <Button onClick={(e)=>{
              e.preventDefault()
              AddAddress()}}  className='cursor-pointer' type="submit">{isLoading&& <Loader className='animate-spin'/>}Save Address</Button>
          
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
 
</div>

  
  </div>}
  
  
  </>
  }

