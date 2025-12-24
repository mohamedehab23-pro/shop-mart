'use server'
export async function ResetCodeAction({resetCode}:{resetCode:string}){
    const response=await fetch(`${process.env.API_URL}auth/verifyResetCode`,{
    method:'POST',
    body:JSON.stringify({resetCode}),
    headers:{
        'content-type':'application/json'
    }
})
const data=await response.json()
return data
}