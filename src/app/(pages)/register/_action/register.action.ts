'use server'
export async function RegisterAction({name,email,password,rePassword,phone}:{name:string,email:string,password:string,rePassword:string,phone:string}){
  const response=await fetch(`${process.env.API_URL}auth/signup`,{
        method:'POST',
        body:JSON.stringify({
          name,
          email,
          password,
          rePassword,
          phone
        }),
        headers:{'content-type':'application/json'}
      })
      const data=await response.json()
      return data
}