import { apiSlice } from "./apiSlice"; 
import {fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const EMPLOYEE_ENDPOINT='https://graph.microsoft.com/v1.0'

export const employeeApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        // login:builder.mutation({
        //     query:(data) =>({
        //         url: ''
        //     })
        // })
        getProtectedData:builder.query({
            query: () => '/protected'
        }),
        getEmployees:builder.query({
            query:() =>`${EMPLOYEE_ENDPOINT}/users`,
            providesTags:['Employee'],
         
        }),
        getProfile:builder.query({
            query:() =>`${EMPLOYEE_ENDPOINT}/me`,
            providesTags:['me'],
         
        }),


        getEmployee: builder.query({
            query:(id)=>`${EMPLOYEE_ENDPOINT}/posts/${id}`
        }),

        deleteEmployee: builder.mutation({
            query: (id) =>({
               url:`${EMPLOYEE_ENDPOINT}/posts/${id}`,
               method: 'DELETE',
             

            }),
            invalidatesTags: ['Employee']
        }),

       

    })
})

export const {useGetProtectedDataQuery, useGetProfileQuery, useGetEmployeesQuery, useGetEmployeeQuery, useDeleteEmployeeMutation, useGetPaginationQuery} = employeeApiSlice