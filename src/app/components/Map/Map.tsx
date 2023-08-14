"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Title } from "../Title";
import { markerPositions } from "./markerPositions";

export default function Map()  {
  return (
    <div className="sm:p-10 p-4">
      <div className="w-full flex items-center justify-center pb-10">
        <Title title="Onde estamos" color="text-primary" />
      </div>

      <MapContainer
        className="w-full h-[400px]"
        center={[-12.901751, -38.486415]}
        zoom={12}
        minZoom={5}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markerPositions.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <Popup
            className="max-w-[200px]"
            >{marker.content}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
