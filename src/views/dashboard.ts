import { IAuthService } from '../resources/auth-service';
import { AuthHook } from "../resources/auth-hook";
import { inject } from 'aurelia';

@inject(IAuthService)
export class Dashboard {
    static dependencies = [AuthHook];

    constructor(private auth: IAuthService) {}
}
