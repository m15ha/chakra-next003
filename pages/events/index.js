import React from 'react';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import { Box } from '@chakra-ui/layout';
// import EventsSearch from '../../components/events/events-search';

const AllEvents = () => {
    const router = useRouter();
    const events = getAllEvents();

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }

    return (
        <>
            <Box maxW={'7xl'} minH={'89vh'} py={{ base: 5, md: 14 }}>
                <EventList events={events} />
            </Box>
        </>
    );
};

export default AllEvents;
