import L from 'leaflet';
import 'leaflet-rotatedmarker';
export default class FligtCore {
    private map;
    private layer;
    private COUNTER;
    private cnt;
    private aircraftsView;
    constructor(mapType: number, position: string);
    render(): void;
    mappingFlyght(planeIcon: L.Icon, planeIconA: L.Icon): Promise<void>;
    renderPlain(): void;
    aircraftInfo(callsing: string): Promise<HTMLDivElement>;
    aircraftPath(icao: string): Promise<[number, number][]>;
}
