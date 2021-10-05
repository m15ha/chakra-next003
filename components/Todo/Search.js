import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Container, HStack } from '@chakra-ui/layout';
import React from 'react';

const Search = ({ search, setSearch }) => {
    return (
        <Container maxW={'xl'} mb={5}>
            <HStack alignItems='flex-end' justify='flex-end' spacing={4}>
                <FormControl id='todo'>
                    <FormLabel textTransform='uppercase'></FormLabel>
                    <Input
                        type='text'
                        placeholder='Search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </FormControl>
            </HStack>
        </Container>
    );
};

export default Search;
