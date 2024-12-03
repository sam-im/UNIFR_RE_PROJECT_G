import { AuthHook } from "../../resources/auth-hook";

export class MyFaculty {
    static dependencies = [AuthHook];

    mainFaculty = 'Faculty of Science';
    secondaryFaculty = 'Faculty of Economy';
}