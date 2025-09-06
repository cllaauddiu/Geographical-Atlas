import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import SearchBar from './SearchBar';
import './Map.css';

// Component pentru gestionarea evenimentelor de click pe hartă
function MapClickHandler({ onLocationClick }) {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      onLocationClick(lat, lng);
    },
  });
  return null;
}

function LocationInfo({ location, onClose }) {
  if (!location) return null;

  const formatCoordinate = (coord) => {
    if (coord === null || coord === undefined) return 'N/A';
    const num = parseFloat(coord);
    return isNaN(num) ? 'N/A' : num.toFixed(6);
  };

  return (
    <div className="location-info">
      <div className="location-info-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h3>Informații despre locație</h3>
        <div className="location-details">
          <p><strong>Nume:</strong> {location.display_name || 'Locație necunoscută'}</p>
          <p><strong>Coordonate:</strong> {formatCoordinate(location.lat)}, {formatCoordinate(location.lon)}</p>
          {location.address && (
            <div className="address-details">
              <h4>Detalii adresă:</h4>
              {location.address.country && <p><strong>Țară:</strong> {location.address.country}</p>}
              {location.address.state && <p><strong>Județ:</strong> {location.address.state}</p>}
              {location.address.city && <p><strong>Oraș:</strong> {location.address.city}</p>}
              {location.address.town && <p><strong>Oraș:</strong> {location.address.town}</p>}
              {location.address.village && <p><strong>Sat:</strong> {location.address.village}</p>}
              {location.address.road && <p><strong>Stradă:</strong> {location.address.road}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function MapView() {
  const position = [45.9432, 24.9668];
  const [clickedLocation, setClickedLocation] = useState(null);
  const [locationInfo, setLocationInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLocationName = async (lat, lng) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1&accept-language=ro`
      );
      const data = await response.json();
      
      return {
        ...data,
        lat: parseFloat(data.lat) || lat,
        lon: parseFloat(data.lon) || lng
      };
    } catch (error) {
      console.error('Eroare la obținerea numelui locației:', error);
      return {
        display_name: 'Locație necunoscută',
        lat: parseFloat(lat),
        lon: parseFloat(lng)
      };
    } finally {
      setLoading(false);
    }
  };

  // Handler pentru click pe hartă
  const handleMapClick = async (lat, lng) => {
    setClickedLocation([lat, lng]);
    const locationData = await getLocationName(lat, lng);
    setLocationInfo(locationData);
  };

  // Funcție pentru închiderea informațiilor despre locație
  const closeLocationInfo = () => {
    setLocationInfo(null);
    setClickedLocation(null);
  };

  return (
    <div className="map-wrapper">
      <div className="map-searchbar-container">
        <SearchBar />
      </div>
      
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner">Se încarcă...</div>
        </div>
      )}

      <MapContainer center={position} zoom={6} style={{ height: "100vh", width: "100vw" }}>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Marker pentru centrul României */}
        <Marker position={position}>
          <Popup>
            România - centrul geografic
          </Popup>
        </Marker>

        {/* Marker pentru locația unde s-a dat click */}
        {clickedLocation && (
          <Marker position={clickedLocation}>
            <Popup>
              <div>
                <strong>Locația selectată</strong>
                <br />
                {locationInfo?.display_name || 'Se încarcă...'}
              </div>
            </Popup>
          </Marker>
        )}

        {/* Handler pentru evenimentele de click */}
        <MapClickHandler onLocationClick={handleMapClick} />
      </MapContainer>

      {/* Componenta pentru afișarea informațiilor despre locație */}
      <LocationInfo location={locationInfo} onClose={closeLocationInfo} />
    </div>
  );
}