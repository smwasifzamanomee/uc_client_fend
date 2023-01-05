import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [interval, setInterval] = useState(0);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
        <SessionProvider session={session} refetchInterval={interval}>
            <Component {...pageProps} />
        </SessionProvider>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
