import { FC, PropsWithChildren, useReducer } from 'react';
import { EntriesContext, entriesReducer } from './';

import { v4 as uuidv4 } from 'uuid';

import { Entry } from '@/interfaces';


export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE:EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pending: description of the first task',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'In Progress: description of the second task',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            _id: uuidv4(),
            description: 'Completed: description of the third task',
            status: 'completed',
            createdAt: Date.now() - 100000,
        },
    ],
}

export const EntriesProvider:FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addNewEntry = ( description: string ) => {
        const newEntry: Entry ={
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }

        dispatch({ type: '[Entries] - Add-Entry', payload: newEntry });
    }

    const updateEntry =  ( entry: Entry ) => {
        dispatch({ type: '[Entries] - Update-Entry', payload: entry });
    }

    return(
       <EntriesContext.Provider value={{
            ...state,
            //Methods
            addNewEntry,
            updateEntry
       }}>
            { children }
       </EntriesContext.Provider>
    );
}