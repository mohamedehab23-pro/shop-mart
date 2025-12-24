import { FailedLoginResponse, SuccessLoginResponse } from "@/interfaces/login"
import { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
export const authOptions: AuthOptions={
    providers:[
CredentialsProvider({
    name:'credentials',
    credentials:{
        email:{},
        password:{}
    },
    authorize:async(credentials)=>{
const response= await fetch(`${process.env.API_URL}auth/signin`,{
    method:'POST',
    body:JSON.stringify({
        email:credentials?.email,
        password:credentials?.password
    }),
    headers:{'content-type':'application/json'}
})
const payload:SuccessLoginResponse|FailedLoginResponse=await response.json()

if('token' in payload){
    return {
    user:payload.user,
    token:payload.token,
    id:payload.user.email,
    email:payload.user.email
}
}else{
    throw new Error(payload.message)
}

    }
})
    ],
    callbacks:{
        jwt:({token,user})=>{
if(user){
    token.user=user.user,
token.token= user.token,
token.email=user.user.email

}
return token
        },
        session:({session,token})=>{
session.user= token.user,
session.user.email=token.user.email
return session        
}
    },
pages:{
    signIn:'/login',
    error:'/login'
},
secret:process.env.NEXTAUTH_SECRET
  
}