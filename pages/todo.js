import { Box } from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import AddItem from '../components/Todo/AddItem';
import ItemsList from '../components/Todo/ItemsList';
import Search from '../components/Todo/Search';

const Todo = () => {
    const toast = useToast();
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('todoList')) || []
    );

    const [item, setItem] = useState('');
    const [search, setSearch] = useState('');

    const newId = Math.random().toString();

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(items));
    }, [items]);

    const handleDelete = (id) => {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
    };
    const handleSubmit = (item) => {
        const newItem = {
            id: newId,
            title: item,
            checked: false,
        };
        const newItems = [...items, newItem];
        setItems(newItems);
        toast({
            title: 'Todo was added successfully!!',
            status: 'success',
            position: 'top',
            duration: 5000,
            isClosable: true,
        });
        setItem('');
    };

    const handleCheck = (id) => {
        const newItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setItems(newItems);
    };

    return (
        <Box maxW={'7xl'} minH={'89vh'} py={{ base: 5, md: 14 }}>
            <AddItem
                handleSubmit={handleSubmit}
                item={item}
                setItem={setItem}
            />
            <Search search={search} setSearch={setSearch} />
            <ItemsList
                items={items.filter((item) =>
                    item.title.toLowerCase().includes(search.toLowerCase())
                )}
                handleDelete={handleDelete}
                handleCheck={handleCheck}
            />
        </Box>
    );
};

export default Todo;
