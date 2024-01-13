import { PageContextProvider } from "@/context/pageContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <PageContextProvider>
        <Component {...pageProps} />
      </PageContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
