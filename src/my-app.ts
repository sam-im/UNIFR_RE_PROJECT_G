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
            component: () => import('./views/student/my-courses'),
            id: 'my-courses',
            title: 'My Courses'
        },
        {
            path: 'my-faculty',
            component: () => import('./views/student/my-faculty'),
            id: 'my-faculty',
            title: 'My Faculty'
        },
        {
            path: 'messages',
            component: () => import('./views/messages'),
            id: 'messages',
            title: 'Messages'
        },
        {
            path: 'view-courses',
            component: () => import('./views/teacher/view-courses'),
            id: 'view-courses',
            title: 'View Courses'
        },
        {
            // TODO: Add course-id parameter to the path
            path: 'grade/some-course-id',
            component: () => import('./views/teacher/grade'),
            id: 'grade',
            title: 'Grade'
        },
    ];

    toggleNotifications() {
        const popup = document.getElementById('notifications-popup');
        if (popup) {
            popup.classList.toggle('hidden');
        }
    }

    logout() {
        this.auth.logout();
        this.router.load('/');
    }
}