/* eslint-disable no-unused-vars */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '@context/useAuth';
import { Provider } from 'react-redux';
import store from 'Redux/store';
import DefaultLayout from '@components/Layout/DefaultLayout';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import GlobalProvider from '@context/globalContext/globalContextProvider';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ??
    ((page: any) => <DefaultLayout>{page}</DefaultLayout>);
  return (
    <GlobalProvider>
      <Provider store={store}>
        <ChakraProvider>
          <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
        </ChakraProvider>
      </Provider>
    </GlobalProvider>
  );
};
export default MyApp;
