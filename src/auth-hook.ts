import { IAuthService } from './resources/auth-service';
import { ILifecycleHooks, lifecycleHooks } from "aurelia";
import { inject } from 'aurelia';

@lifecycleHooks()
@inject(IAuthService)
export class AuthHook implements ILifecycleHooks {

    constructor(readonly auth: IAuthService) { }

    canLoad() {
        if ( !this.auth.isLoggedIn ) {
            return 'login';
        }

        return true;
    }

}