import { IRouteableComponent, IRoute } from '@aurelia/router';

export class MyApp implements IRouteableComponent {
    static routes: IRoute[] = [
        {
            path: '',
            component: () => import('./views/dashboard'),
            id: 'Dashboard',
            title: 'Dashboard'
        },
        {
            path: 'about',
            component: () => import('./views/about'),
            id: 'About',
            title: 'About'
        },
    ];

}
