import React, { PureComponent } from 'react';
import L from 'leaflet';
import { Circle, Map, Marker, Popup, TileLayer } from 'react-leaflet';
import PlaceholderIcon from '../../assets/images/placeholder.svg';

const position = [4.6434, -74.0744];

const pointerIcon = new L.Icon({
  iconUrl: PlaceholderIcon,
  iconRetinaUrl: PlaceholderIcon,
  iconAnchor: [25, 50],
  iconSize: [55, 55],
  popupAnchor: [3, -50]
});

export default class LeafletMap extends PureComponent {
  render() {
    if (typeof window !== 'undefined') {
      return (
        <Map center={position} zoom={17} scrollWheelZoom={false} maxZoom={19}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
          <Circle center={position} radius={150} color="purple" />
          <Marker position={position} icon={pointerIcon}>
            <Popup>
              Torre Ejecutiva Galerías <br />
              Calle 53b #24-80 <br /> Consultorio 605
            </Popup>
          </Marker>
        </Map>
      );
    }
    return null;
  }
}
