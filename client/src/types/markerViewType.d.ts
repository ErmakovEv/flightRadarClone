import L from 'leaflet';
import 'leaflet-rotatedmarker';
export default interface IMarkerType {
    marker: L.Marker | null;
    polyline: L.Polyline | undefined;
    popUp: null | HTMLDivElement;
}
