import { db } from '@/database';
import { Entry, IEntry } from '@/models';
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = 
    | { message: string }
    | IEntry

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    const { id } = req.query;

    if( !mongoose.isValidObjectId( id ) ){
        return res.status(400).json({ message: 'The ID is not valid ' + id });
    }
    
    switch (req.method) {

        case 'GET':
            return getEntryById( req, res );

        case 'PUT':
            return updateEntry( req, res );

        case 'DELETE':
            return deleteEntryById( req, res );
            
            default:
                return res.status(400).json({ message: 'The method is invalid' });
    }
}

const updateEntry = async( req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { id } = req.query;
    await db.connect();

    const entryToUpdate = await Entry.findById( id );

    if( !entryToUpdate ){
        await db.disconnect();
        return res.status(400).json({ message: 'No entries with that ID: ' + id });
    }
    
    const {
        description = entryToUpdate.description,
        status = entryToUpdate.status
    } = req.body;

    try {
        const updatedEntry = await Entry.findByIdAndUpdate( id, { description, status }, { runValidators: true, new: true });
        await db.disconnect();
        res.status(200).json( updatedEntry! );
    } catch (error:any) {
        await db.disconnect();
        res.status(400).json({ message: error.errors.status.message });
    }
}

const getEntryById = async( req: NextApiRequest, res: NextApiResponse<Data> ) => {
    const { id } = req.query;
    await db.connect();
    const entryById = await Entry.findById( id );
    await db.disconnect();

    if( !entryById ){
        return res.status(400).json({ message: 'Entry not found' });
    }

    res.status(200).json( entryById );
}

const deleteEntryById = async( req: NextApiRequest, res: NextApiResponse<Data> ) => {
    const { id } = req.query;
    await db.connect();
    const entryDeleted = await Entry.findByIdAndDelete( id );
    await db.disconnect();

    if( !entryDeleted ){
        return res.status(400).json({ message: 'No entries with this ID: ' + id });
    }

    return res.status(200).json({ message: 'Entry deleted' });
}