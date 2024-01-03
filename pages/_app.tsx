import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../state/store'
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { productsApi } from "./features/apiSlice";
import { productsApi } from "../state/api/productApi";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* <ApiProvider api={productsApi}> */}
      <Component {...pageProps} />
      {/* </ApiProvider> */}
    </Provider>
  )
}
