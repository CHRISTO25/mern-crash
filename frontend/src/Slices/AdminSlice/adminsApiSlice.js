import { adminApiSlice } from "../AdminSlice/apiSlice";

const ADMIN_URL = '/api/admin';

export const apiSlice = adminApiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // admin login 

        login: builder.mutation({
            query: (data) => ({
                url: `${ADMIN_URL}/login`,
                method: 'POST',
                body: data
            })
        }),
        // admin logout 
        adminLogout: builder.mutation({
            query: () => ({
                url: `${ADMIN_URL}/logoutAdmin`,
                method: 'POST'
            })
        }),

    })
})

export const { useLoginMutation,useAdminLogoutMutation } = apiSlice;