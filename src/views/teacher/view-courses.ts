import { AuthHook } from '../../resources/auth-hook';

export class ViewCourses {
    static dependencies = [AuthHook];
    courses = [
        {
            faculty: 'Faculty 1',
            code: 'F1.101',
            name: 'Course 1',
            semester: 'Fall 2024'
        },
        {
            faculty: 'Faculty 2',
            code: 'F2.102',
            name: 'Course 2',
            semester: 'Fall 2024'
        },
        {
            faculty: 'Faculty 1',
            code: 'F1.102',
            name: 'Course 2',
            semester: 'Fall 2024'
        },
        {
            faculty: 'Faculty 1',
            code: 'F1.103',
            name: 'Course 3',
            semester: 'Fall 2024'
        }
    ];

    
}