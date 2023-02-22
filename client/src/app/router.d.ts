export default class Router {
    private routes;
    private controller;
    constructor();
    route(): import("../pages/adminView").default | import("../pages/dashboardView").default | import("../pages/LoginView").default | import("../pages/mapView").default | import("../pages/settingsView").default;
    get(): string[];
}
