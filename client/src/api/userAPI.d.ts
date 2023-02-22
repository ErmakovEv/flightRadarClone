import { Api } from './api';
declare class userApi extends Api {
    private path;
    login(email: string, password: string): Promise<any>;
    registration(email: string, password: string, role: string): Promise<any>;
}
declare const _default: userApi;
export default _default;
