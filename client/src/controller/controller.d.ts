import Dashboard from '../pages/dashboardView';
import Map from '../pages/mapView';
import Settings from '../pages/settingsView';
import Login from '../pages/LoginView';
import Admin from '../pages/adminView';
declare class Controller {
    private model;
    private routes;
    private userApi;
    constructor();
    settingHandler(): Promise<{
        mapType: number;
        position: string;
    }>;
    positionHandler(position: string): Promise<void>;
    settingToggle(): Promise<void>;
    loginHandler(email: string, password: string): Promise<void>;
    registationHandler(email: string, password: string, role: string): Promise<void>;
    setRoutes(): ({
        path: string;
        view: typeof Login;
        subPage: number;
    } | {
        path: string;
        view: typeof Map;
        subPage: number;
    } | {
        path: string;
        view: typeof Dashboard;
        subPage: number;
    } | {
        path: string;
        view: typeof Settings;
        subPage: number;
    })[] | ({
        path: string;
        view: typeof Login;
        subPage: number;
    } | {
        path: string;
        view: typeof Admin;
        subPage: number;
    })[];
    getRoutes(): ({
        path: string;
        view: typeof Login;
        subPage: number;
    } | {
        path: string;
        view: typeof Map;
        subPage: number;
    } | {
        path: string;
        view: typeof Dashboard;
        subPage: number;
    } | {
        path: string;
        view: typeof Settings;
        subPage: number;
    })[] | ({
        path: string;
        view: typeof Login;
        subPage: number;
    } | {
        path: string;
        view: typeof Admin;
        subPage: number;
    })[];
    crutch(path: string): void;
}
export default Controller;
