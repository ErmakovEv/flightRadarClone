export default interface ITrack {
    icao24: string;
    callsing: string;
    startTime: number;
    endTime: number;
    path: Path[];
}
type Path = [number, number, number, number, number, boolean];
export {};
