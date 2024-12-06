import { AuthHook } from '../../resources/auth-hook';

export class Grade {
    static dependencies = [AuthHook];
    students = [
        {
            id: 1,
            name: 'Student 1',
        },
        {
            id: 2,
            name: 'Student 2',
        },
        {
            id: 3,
            name: 'Student 3',
        },
        {
            id: 4,
            name: 'Student 4',
        },
        {
            id: 5,
            name: 'Student 5',
        },
        {
            id: 6,
            name: 'Student 6',
        },
        {
            id: 7,
            name: 'Student 7',
        },
        {
            id: 8,
            name: 'Student 8',
        },    
    ];
}