import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Input } from '@chakra-ui/input';
import { Container, HStack } from '@chakra-ui/layout';
import React from 'react';

const AddItem = ({ item, setItem, handleSubmit }) => {
    return (
        <Container maxW={'xl'} mb={5}>
            <HStack alignItems='flex-end' justify='flex-end' spacing={4}>
                <FormControl id='todo'>
                    <FormLabel textTransform='uppercase'>Add todo</FormLabel>
                    <Input
                        type='text'
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                    />
                </FormControl>
                <Button
                    variant='outline'
                    colorScheme='blue'
                    rightIcon={<ArrowForwardIcon />}
                    onClick={() => handleSubmit(item)}
                >
                    ADD
                </Button>
            </HStack>
        </Container>
    );
};

export default AddItem;
