import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { msalInstance } from '@/app/redux/msalConfig'
import { setAuthState, logout } from './authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: '/',
    prepareHeaders: async(headers, {getState}) =>{
        const state = getState()
        const accessToken = state.auth.accessToken;
        // const { instance } = msalInstance;

        // if(!accessToken){
        //     try{
        //         const account = instance.getAllAccounts()[0];
        //         console.log(account)
        //         const tokenResponse = await instance.acquireTokenSilent({
        //             scopes: ['api.read'],
        //             account,
        //           });
                
        //           headers.set('Authorization', `Bearer ${tokenResponse.accessToken}`);

        //     }catch(error){
        //         if (error instanceof InteractionRequiredAuthError) {
        //             const tokenResponse = await instance.acquireTokenPopup({
        //               scopes: ['api.read'],
        //             });
        //             headers.set('Authorization', `Bearer ${tokenResponse.accessToken}`);
        //           }
        //     }
        // } 
        // else
         if (accessToken){
            headers.set('Authorization', `Bearer ${accessToken}`);}
        

        return headers;
    }
    })

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['me', 'Employee'],  //automated re-fetching
    endpoints: (builder) => ({

    })
})