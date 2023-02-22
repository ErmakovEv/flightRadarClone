export default class DashboardCore {
    private airport;
    constructor(airport: string);
    render(): Promise<HTMLDivElement>;
}
