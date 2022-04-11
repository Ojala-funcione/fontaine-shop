import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '@components/Layout/Layout';
import { AuthProvider } from '@context/useAuth';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default MyApp;
