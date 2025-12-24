'use client'

import { dataI } from '@/interfaces/address'
import { Dispatch, SetStateAction, useState } from 'react'
import toast from 'react-hot-toast'
import { removeAddressAction } from './action/removeAddress.action'

interface RemoveAddressProps {
  addressId: string
  setAddressShow: Dispatch<SetStateAction<dataI[] | null>>
}

export default function RemoveAddress({
  addressId,
  setAddressShow
}: RemoveAddressProps) {
  const [isLoading, setIsLoading] = useState(false)

  async function ClearAddress(addressId: string) {
    setIsLoading(true)

    const data = await removeAddressAction(addressId)

    if (data.status === 'success') {
      setAddressShow(data.data) 
      toast.success('address removed successfully')
    }

    setIsLoading(false)
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      onClick={() => ClearAddress(addressId)}
      className="size-8 cursor-pointer absolute top-4 end-4"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  )
}
