import { MapContainer, Marker, Popup } from "react-leaflet";
import { TileLayer } from "react-leaflet/TileLayer";
import 'leaflet/dist/leaflet.css'


export type MapPropType = {
  position: [number, number];
  popup?: string;
};

export const MapView = (props: MapPropType) => {
  return (
    <MapContainer
      className="rounded-lg m-10"
      // attribution="&copy; | <a href='https://anurag-bhatt.me' target='_blank'>Anurag Bhatt 👨🏻‍💼</a>"
      center={props?.position || [0, 0]}
      zoom={17}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", border: "2px solid black" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={props?.position}>
        {props?.popup && <Popup>{props?.popup}</Popup>}
      </Marker>
    </MapContainer>
  );
};
