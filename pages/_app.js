import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from '../layouts/MainLayout';
function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <MainLayout>
                {' '}
                <Component {...pageProps} />
            </MainLayout>
        </ChakraProvider>
    );
}
export default MyApp;
