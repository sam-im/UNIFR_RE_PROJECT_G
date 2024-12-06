import { DI } from 'aurelia';

export const IAuthService = DI.createInterface<IAuthService>('IAuthService', x => x.singleton(AuthService));
export type IAuthService = AuthService;

export class AuthService {
    private loggedIn = false;

    constructor() {
        this.loggedIn = !!(sessionStorage.getItem('authenticated') ?? false);
    }

    async login(username: string, password: string) {
        // Simulate authentication
        if (username === 'student' && password === 'password') {
            sessionStorage.setItem('authenticated', 'true');
            sessionStorage.setItem('role', 'student');
            this.loggedIn = true;
            return true;
        } else if (username === 'teacher' && password === 'password') {
            sessionStorage.setItem('authenticated', 'true');
            sessionStorage.setItem('role', 'teacher');
            this.loggedIn = true;
            return true;
        } else if (username === 'administrator' && password === 'password') {
            sessionStorage.setItem('authenticated', 'true');
            sessionStorage.setItem('role', 'administrator');
            this.loggedIn = true;
            return true;
        }

        this.loggedIn = false;
        return false;
    }

    logout() {
        sessionStorage.removeItem('authenticated');
        sessionStorage.removeItem('role');
        this.loggedIn = false;
    }

    get isLoggedIn() {
        return this.loggedIn;
    }

    get role() {
        return sessionStorage.getItem('role');
    }
}
