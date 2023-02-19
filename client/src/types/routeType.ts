import AdminPanel from '../pages/adminView';
import Dashboard from '../pages/dashboardView';
import Login from '../pages/LoginView';
import Map from '../pages/mapView';
import Settings from '../pages/settingsView';

export default interface IRoute {
  path: string;
  view:
    | typeof AdminPanel
    | typeof Dashboard
    | typeof Login
    | typeof Map
    | typeof Settings;
  subPage: number;
}
