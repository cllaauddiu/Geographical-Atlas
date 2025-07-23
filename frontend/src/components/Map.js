import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapView() {
  const position = [45.9432, 24.9668];

  return (
    <MapContainer center={position} zoom={6} style={{ height: "80vh", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          România - centrul geografic
        </Popup>
      </Marker>
    </MapContainer>
  );
}