import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import SearchBar from './SearchBar';
import './Map.css';

export default function MapView() {
  const position = [45.9432, 24.9668];

  return (
    <div className="map-wrapper">
      <div className="map-searchbar-container">
        <SearchBar />
      </div>
      <MapContainer center={position} zoom={6} style={{ height: "100vh", width: "100vw" }}>
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
    </div>
  );
}