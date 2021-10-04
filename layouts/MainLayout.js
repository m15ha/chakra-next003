import { Box, Flex, Container } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainLayout = ({ children }) => {
    return (
        <Box h='100%'>
            <Flex minHeight='100%' direction='column'>
                <Header />
                {/* <Box h='88vh'> */}
                    <Container maxW='container.xl'>{children}</Container>
                <Footer />
            </Flex>
        </Box>
    );
};

export const getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default MainLayout;
