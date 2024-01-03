import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApiCall",
    //   baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products",
        }),
        // getProduct: builder.query({
        //   query: (product) => `products/search?q=${product}`,
        // }),
    }),
});

// export const { useGetAllProductsQuery, useGetProductQuery } = productsApi;
export const { useGetAllProductsQuery } = productsApi;

// 1. RTK Query get product ---> done
// 2. RTK Query login 
// 3. RTK Query Sign Up
// 4. RTK Query Cart add
// 5. RTK Query Cart remove


