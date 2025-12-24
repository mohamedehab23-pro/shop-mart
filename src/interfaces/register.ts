import { UserResponse } from "./login"

export interface SuccessRegisterResponse{
     message: string,
    user: UserResponse,
    token: string
}
export interface FailedRegisterResponse{
     statusMsg: string,
    message: string
}