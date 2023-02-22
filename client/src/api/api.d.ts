interface RequestParams {
    method: string;
    data?: unknown;
}
export declare class Api {
    private url;
    protected request(path: string, params: RequestParams, query?: string): Promise<any>;
    private stringify;
}
export {};
