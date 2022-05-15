import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
// import Layout from '@components/Layout/Layout';
import { AuthProvider } from '@context/useAuth';
import { Provider } from 'react-redux';
import store from 'Redux/store';
import DefaultLayout from '@components/Layout/DefaultLayout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <Provider store={store}>
      <ChakraProvider>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ChakraProvider>
    </Provider>
  );
};
export default MyApp;
