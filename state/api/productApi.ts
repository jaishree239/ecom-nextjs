import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApiCall",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products",
        }),
    }),
});

export const { useGetAllProductsQuery } = productsApi;

// 1. RTK Query get product ---> done
// 2. RTK Query login ---> done
// 3. RTK Query Sign Up ---> done
// 4. RTK Query Cart add ---> done
// 5. RTK Query Cart remove ---> done
// 6. .env set up


