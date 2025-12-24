'use server'
export async function ForgotPasswordAction({email}:{email:string}){
 let response=await fetch(`${process.env.API_URL}auth/forgotPasswords`,{
        method:'POST',
        body:JSON.stringify({email}),
        headers:{
            'content-type':'application/json'
        }
    })
    let data=await response.json()
    return data
}