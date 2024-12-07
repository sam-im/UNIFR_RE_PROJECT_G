import { AuthHook } from "../../resources/auth-hook";
export class MessageStudents {
    static dependencies = [AuthHook];
    courses: string[] = ['Code 1 - Course 1', 'Code 2 - Course 2', 'Code 3 - Course 3'];
}