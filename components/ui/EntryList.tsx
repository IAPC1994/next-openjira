import { Box, List, Paper } from '@mui/material';
import { EntryCard } from './EntryCard';
import { EntryStatus } from '@/interfaces';
import { useContext, useMemo } from 'react';
import { EntriesContext } from '@/context/entries';

interface Props{
    status: EntryStatus;
}

export const EntryList = ({ status }:Props) => {
    
    const { entries } = useContext(EntriesContext);

    const entriesByStatus = useMemo( () => entries.filter( entry => entry.status === status ), [entries]);

    return(
        <Box>
            <Paper sx={{ height: 'calc(100vh - 250px)', overflow:'scroll', backgroundColor: 'transparent', '&::-webkit-scrollbar': { display: 'none' }, padding: '3px 5px' }}>
                {/* TODO: change depending if we are doing drag or not */}
                <List sx={{ opacity: 1 }}>
                    {
                        entriesByStatus.map( entry => (
                            <EntryCard  key={ entry._id } entry={ entry }/>
                        ))
                    }
                </List>
            </Paper>
        </Box>
    );
}