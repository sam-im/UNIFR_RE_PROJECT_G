import { AuthHook } from '../../resources/auth-hook';

export class ViewCourses {
    static dependencies = [AuthHook];
    courses = [
        {
            faculty: 'Faculty 1',
            code: 'CS.101',
            name: 'Course 1',
            semester: 'Fall 2024'
        },
        {
            faculty: 'Faculty 2',
            code: 'CS.102',
            name: 'Course 2',
            semester: 'Fall 2024'
        },
        {
            faculty: 'Faculty 3',
            code: 'CS.103',
            name: 'Course 3',
            semester: 'Fall 2024'
        },
        {
            faculty: 'Faculty 4',
            code: 'CS.104',
            name: 'Course 4',
            semester: 'Fall 2024'
        }
    ];

    
}