'use server'
export async function ResetPasswordAction({email,newPassword}:{email:string,newPassword:string}){
    const response=await fetch(`${process.env.API_URL}auth/resetPassword`,{
        method:'PUT',
        body:JSON.stringify({
            email,
            newPassword
        }),
        headers:{
            'content-type':'application/json'
        }
    })
    const data =await response.json()
    return data
}