import { Api } from './api';
declare class settingApi extends Api {
    private path;
    set(id: number, mapType: number, pos: string): Promise<any>;
    getAll(): Promise<any>;
    getOne(id: number): Promise<any>;
}
declare const _default: settingApi;
export default _default;
