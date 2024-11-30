import { AuthHook } from "../resources/auth-hook";

export class Dashboard {
    // Prevent unauthorized access to this route
    static dependencies = [ AuthHook ];
}
