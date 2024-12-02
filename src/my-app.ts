import { IRouteableComponent, IRoute, IRouter } from '@aurelia/router';
import { IAuthService } from './resources/auth-service';
import { inject } from 'aurelia';

@inject(IAuthService, IRouter)
export class MyApp implements IRouteableComponent {
    constructor(readonly auth: IAuthService, readonly router: IRouter) {
    }

    static routes: IRoute[] = [
        {
            path: '',
            component: () => import('./views/dashboard'),
            id: 'dashboard',
            title: 'Dashboard'
        },
        {
            path: 'login',
            component: () => import('./views/login'),
            id: 'login',
            title: 'Login'
        },
        {
            path: 'my-courses',
            component: () => import('./views/studies/my-courses'),
            id: 'my-courses',
            title: 'My Courses'
        },
    ];

    logout() {
        this.auth.logout();
        this.router.load('/');
    }
}