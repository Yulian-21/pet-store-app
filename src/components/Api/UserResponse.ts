import { AxiosResponse } from "axios";
import { resolve } from "path";
import IUser from '../Users/UserType/UserType';

export const userResponseHandler = (data: IUser) => {
  
    return { status: 200, statusText: "OK", data: data, headers: {}, config: {}, request:{}}
}

export const promisify = (data: IUser): Promise<AxiosResponse> => {
         return new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(userResponseHandler(data));
            }, 1000)
         })
        }
