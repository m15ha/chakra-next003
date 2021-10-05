import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    Box,
} from '@chakra-ui/react';
import { FaRegAddressCard, FaHouseDamage } from 'react-icons/fa';
import React from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout';
import { getEventById } from '../../dummy-data';

const EventDetailPage = () => {
    const router = useRouter();

    const id = router.query.id;
    const event = getEventById(id);

    const humanReadableDate = new Date(event.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const formattedAddress = event.location.replace(', ', '\n');

    const Feature = ({ text, icon, iconBg }) => {
        return (
            <Stack direction={'row'} align={'center'}>
                <Flex
                    w={8}
                    h={8}
                    align={'center'}
                    justify={'center'}
                    rounded={'full'}
                    bg={iconBg}
                >
                    {icon}
                </Flex>
                <Text fontWeight={600}>{text}</Text>
            </Stack>
        );
    };

    // if (!event) {
    //     return <Text>No event found!</Text>;
    // }

    return (
        <Box>
            <Container maxW={'7xl'} minH={'89vh'} py={14}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Stack spacing={4}>
                        <Text
                            textTransform={'uppercase'}
                            color={'blue.400'}
                            fontWeight={600}
                            fontSize={'sm'}
                            bg='blue.50'
                            p={2}
                            alignSelf={'flex-start'}
                            rounded={'md'}
                        >
                            {humanReadableDate}
                        </Text>
                        <Heading>{event.title}</Heading>
                        <Text color={'gray.500'} fontSize={'lg'}>
                            {event.description}
                        </Text>
                        <Stack
                            spacing={4}
                            divider={<StackDivider borderColor='gray.100' />}
                        >
                            <Feature
                                icon={
                                    <Icon
                                        as={FaHouseDamage}
                                        color={'green.500'}
                                        w={5}
                                        h={5}
                                    />
                                }
                                iconBg='green.100'
                                text={formattedAddress}
                            />

                            <Feature
                                icon={
                                    <Icon
                                        as={FaRegAddressCard}
                                        color={'purple.500'}
                                        w={5}
                                        h={5}
                                    />
                                }
                                iconBg='purple.100'
                                text={'Market Analysis'}
                            />
                        </Stack>
                    </Stack>
                    <Flex>
                        <Image
                            rounded={'md'}
                            alt={'feature image'}
                            src={'/' + event.image}
                            objectFit={'cover'}
                        />
                    </Flex>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default EventDetailPage;
