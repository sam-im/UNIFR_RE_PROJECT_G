import { AuthHook } from "../../resources/auth-hook";

export class MyCourses {
    static dependencies = [AuthHook];

    updated = false;
    
    // Example data
    active_courses = [
        {
            name: 'Course 1',
            credits: 5,
            code: 'CS.101'
        },
        {
            name: 'Course 2',
            credits: 4,
            code: 'CS.102'
        },
        {
            name: 'Course 3',
            credits: 4,
            code: 'CS.103'
        },
        {
            name: 'Course 4',
            credits: 6,
            code: 'CS.104'

        }
    ];

    // Example data
    available_courses = [
        {
            name: 'Course 5',
            credits: 5,
            code: 'CS.105'
        },
        {
            name: 'Course 6',
            credits: 4,
            code: 'CS.106'
        },
        {
            name: 'Course 7',
            credits: 4,
            code: 'CS.107'
        },
        {
            name: 'Course 8',
            credits: 6,
            code: 'CS.108'

        }
    ];

    // Backup data to restore on discard
    private backup_active_courses = [...this.active_courses];
    private backup_available_courses = [...this.available_courses];

    // Methods
    addCourse(course: { name: string; credits: number; code: string; }) {
        this.active_courses.push(course);
        this.available_courses = this.available_courses.filter(c => c !== course);
        this.updated = true;
    }

    removeCourse(course: { name: string; credits: number; code: string; }) {
        this.available_courses.push(course);
        this.active_courses = this.active_courses.filter(c => c !== course);
        this.updated = true;
    }

    saveChanges() {
        this.backup_active_courses = [...this.active_courses];
        this.backup_available_courses = [...this.available_courses];
        this.updated = false;
        alert('Changes saved successfully!');
    }

    discardChanges() {
        this.active_courses = [...this.backup_active_courses];
        this.available_courses = [...this.backup_available_courses];
        this.updated = false;
        alert('Changes discarded.');
    }
}