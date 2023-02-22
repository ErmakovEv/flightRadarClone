import { userType } from '../types/userType';
declare class Model {
    private settingApi;
    private userRole;
    private userId;
    private mapType;
    private position;
    constructor(role: userType, id: number);
    getUserRole(): userType;
    setUser(id: number, role: userType): void;
    toggleMapType(): Promise<void>;
    setPosition(airport: string): Promise<void>;
    getSetting(): Promise<{
        mapType: number;
        position: string;
    }>;
}
export default Model;
