import { useAedData } from "./useAedData";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
L.Icon.Default.imagePath = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/";

export default function LeafletMap() {
  const data = useAedData();

  return (
    <MapContainer
      style={{ width: "100%", height: "100dvh" }}
      center={{ lat: 34.18583, lng: 131.47139 }}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data?.map((aed, index) => (
        <Marker key={index} position={aed.latLng}>
          <Popup>{aed.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
