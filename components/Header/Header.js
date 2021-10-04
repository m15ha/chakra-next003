import { BiHomeSmile } from 'react-icons/bi';
import { useRouter } from 'next/router';

import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();
    return (
        <>
            <Box bg={useColorModeValue('blue.50', 'blue.900')} px={4}>
                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        bg={useColorModeValue('blue.50', 'blue.900')}                      
                        onClick={isOpen ? onClose : onOpen}
                        _hover={{
                            textDecoration: 'none',
                            bg: 'blue.50',
                        }}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box
                            as={BiHomeSmile}
                            size='33'
                            onClick={() => router.push('/')}
                            cursor={'pointer'}
                        />
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}
                        >
                            <Link
                                px={2}
                                py={1}
                                rounded={'md'}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: 'blue.100',
                                }}
                                onClick={() => router.push('/inspiration')}
                            >
                                Inspiration
                            </Link>
                            <Link
                                px={2}
                                py={1}
                                rounded={'md'}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: 'blue.100',
                                }}
                                onClick={() => router.push('/events')}
                            >
                                Events
                            </Link>
                            <Link
                                px={2}
                                py={1}
                                rounded={'md'}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: 'blue.100',
                                }}
                                onClick={() => router.push('/todo')}
                            >
                                Todo
                            </Link>
                            <Link
                                px={2}
                                py={1}
                                rounded={'md'}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: 'blue.100',
                                }}
                                onClick={() => router.push('/about')}
                            >
                                About
                            </Link>
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        {/* <Button
                            variant={'solid'}
                            colorScheme={'blue'}
                            size={'sm'}
                            mr={4}
                            leftIcon={<AddIcon />}
                        >
                            Action
                        </Button> */}
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}
                            >
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'
                                    }
                                />
                            </MenuButton>
                            <MenuList bg={useColorModeValue('gray.100', 'blue.900')}>
                                <MenuItem _hover={{
                                    textDecoration: 'none',
                                    bg: 'blue.100',
                                }}>Settings</MenuItem>
                                <MenuItem _hover={{
                                    textDecoration: 'none',
                                    bg: 'blue.100',
                                }}>Administration</MenuItem>
                                <MenuDivider />
                                <MenuItem _hover={{
                                    textDecoration: 'none',
                                    bg: 'blue.100',
                                }}>Logout</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                        <Link
                                px={2}
                                py={1}
                                rounded={'md'}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: 'blue.100',
                                }}
                                onClick={() => router.push('/inspiration')}
                            >
                                Inspiration
                            </Link>
                            <Link
                                px={2}
                                py={1}
                                rounded={'md'}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: 'blue.100',
                                }}
                                onClick={() => router.push('/events')}
                            >
                                Events
                            </Link>
                            <Link
                                px={2}
                                py={1}
                                rounded={'md'}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: 'blue.100',
                                }}
                                onClick={() => router.push('/events')}
                            >
                                Todo
                            </Link>
                            <Link
                                px={2}
                                py={1}
                                rounded={'md'}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: 'blue.100',
                                }}
                                onClick={() => router.push('/about')}
                            >
                                About
                            </Link>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
