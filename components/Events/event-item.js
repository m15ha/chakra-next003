import { Button } from '@chakra-ui/button';
import { ArrowForwardIcon, CalendarIcon, StarIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import NextLink from 'next/link';
import { Badge, Box, Flex } from '@chakra-ui/layout';
import React from 'react';

const EventItem = ({
    id,
    title,
    description,
    location,
    date,
    image,
    isFeatured,
}) => {
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;
    return (
        <Box
            maxW='lg'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            _hover={{ shadow: 'lg' }}
        >
            <Image src={'/' + image} alt={title} />

            <Box d='flex' p='4' flexGrow='1' flexDirection='column'>
                <Box d='flex' alignItems='baseline' >
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        {humanReadableDate}
                    </Badge>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='sm'
                        as='h4'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {title}
                    </Box>
                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    fontSize='xs'
                    lineHeight='tight'
                    isTruncated
                >
                    {description}
                </Box>
                <Box d='flex' mt='2' alignItems='center'>
                    <CalendarIcon />
                    <Box as='span' mx='2' color='gray.600' fontSize='sm'>
                        {formattedAddress}
                    </Box>
                </Box>
                <Flex mt='4'>
                    <NextLink href={exploreLink} passHref>
                        <Button
                            rightIcon={<ArrowForwardIcon />}
                            colorScheme='blue'
                            size='xs'
                        >
                            More
                        </Button>
                    </NextLink>
                </Flex>
            </Box>
        </Box>
    );
};

export default EventItem;
