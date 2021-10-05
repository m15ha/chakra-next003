import { Checkbox } from '@chakra-ui/checkbox';
import { CloseButton } from '@chakra-ui/close-button';
import { HStack, Badge } from '@chakra-ui/layout';
import React from 'react';

const Item = ({ item, handleDelete, handleCheck }) => {
    return (
        <HStack>
            <Checkbox mr={2} isChecked={item.checked} onChange={() => handleCheck(item.id)}></Checkbox>
            <Badge colorScheme="purple" >{item.title}</Badge>
            <CloseButton _hover={{bg: 'white', color: 'red.500'}} onClick={() => handleDelete(item.id)}/>
        </HStack>
    );
};

export default Item;
