import { Container, Flex, SimpleGrid } from '@chakra-ui/layout';
import React from 'react';
import EventItem from './event-item';

const EventList = ({ events }) => {
    return (
        <Container maxW='container.lg'>
      <SimpleGrid columns={[ 1, 1, 3, 3 ]} spacing='8' >  
            {/* <Flex my='8' alignItems="flex-start" justifyContent="space-between" align="center" justify="center"> */}
                {events.map((item) => (
                    <Flex key={item.id} my={{sm: 5, md: 5}}>
                        <EventItem {...item} />{' '}
                    </Flex>
                ))}
            </SimpleGrid>            
        </Container>
    );
};

export default EventList;
