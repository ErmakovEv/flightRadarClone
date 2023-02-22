export default interface Ishedule {
    arr_time?: number;
    dep_time?: number;
    flight_icao: string;
    flight_iata: string;
    arr_iata?: string;
    dep_iata?: string;
    aircraft_icao: string;
    status: string;
}
