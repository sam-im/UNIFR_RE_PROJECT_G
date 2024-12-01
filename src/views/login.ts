import { IRouteableComponent, IRouter } from '@aurelia/router';
import { IAuthService } from '../resources/auth-service';
import { inject } from 'aurelia';

@inject(IRouter, IAuthService)
export class Login implements IRouteableComponent {
    private username = '';
    private password = '';

    constructor(readonly router: IRouter, readonly auth: IAuthService) {

    }

    async login() {
        const result = await this.auth.login(this.username, this.password);
        
        if (result) {
            this.router.load('/');
        }
    }
}