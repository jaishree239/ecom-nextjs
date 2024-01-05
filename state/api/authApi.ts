import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApiCall",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
    endpoints: (builder) => ({
        signinUser: builder.mutation({
            query: (body: { email: string; password: string }) => {
                return {
                    url: "/user/signin",
                    method: "post",
                    body,
                };
            },
        }),
        signupUser: builder.mutation({
            query: (body: { name: string; email: string; password: string }) => {
                return {
                    url: "/user/signup",
                    method: "post",
                    body,
                };
            },
        }),
    }),
});

export const {
    useSigninUserMutation,
    useSignupUserMutation,
} = authApi;

