
export interface AddressResponse {
  status: string
  message: string
  data: dataI[]
}

export interface dataI {
  _id: string
  name: string
  details: string
  phone: string
  city: string

}

