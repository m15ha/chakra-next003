import { Container, Badge, VStack } from '@chakra-ui/layout';
import React from 'react';
import Item from '../Todo/Item';

const ItemsList = ({ items, handleDelete, handleCheck }) => {
    return (
        <Container maxW={'xl'}>
            <VStack w='full' h='full' align='flex-start'>
                {items.length ? 
                (items.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        handleDelete={handleDelete}
                        handleCheck={handleCheck}
                    />
                ))) : <Badge colorScheme="green">Please add Todo</Badge>}
            </VStack>
        </Container>
    );
};

export default ItemsList;
