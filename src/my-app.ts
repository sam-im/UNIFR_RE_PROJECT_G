import { IRouteableComponent, IRoute, IRouter } from '@aurelia/router';
import { IAuthService } from './resources/auth-service';
import { inject } from 'aurelia';

@inject(IAuthService, IRouter)
export class MyApp implements IRouteableComponent {
    constructor(readonly auth: IAuthService, readonly router: IRouter) {
    }

    // Each route, and it's path, is defined here below.
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
            path: 'grade/some-course-id',
            component: () => import('./views/teacher/grade'),
            id: 'grade',
            title: 'Grade'
        },
        {
            path: 'message-students',
            component: () => import('./views/teacher/message-students'),
            id: 'message-students',
            title: 'Message Students'
        },
        {
            path: 'results',
            component: () => import('./views/student/results'),
            id: 'results',
            title: 'Exam Results'
        },
        {
            path: 'register',
            component: () => import('./views/administrator/register'),
            id: 'register',
            title: 'Register a User'
        }
    ];

    // This method toggles the notifications popup.
    toggleNotifications() {
        const popup = document.getElementById('notifications-popup');
        if (popup) {
            popup.classList.toggle('hidden');
        }
    }

    // This method logs out the user and redirects to the login page.
    logout() {
        this.auth.logout();
        this.router.load('/');
    }
}