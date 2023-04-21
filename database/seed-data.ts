
interface SeedData{
    entries: SeedEntry[];
}

interface SeedEntry{
    description: string;
    status: string;
    createdAt: number;
}

export const seedData:SeedData = {
    entries:[
        {
            description: 'Pending: description of the first task',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: 'In Progress: description of the second task',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            description: 'Completed: description of the third task',
            status: 'completed',
            createdAt: Date.now() - 100000,
        },
    ]
}