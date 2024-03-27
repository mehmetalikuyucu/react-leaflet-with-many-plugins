import { icon } from 'leaflet';
import marker from '../marker-cluster/assets/marker-icon.png';
import markerShadow from '../marker-cluster/assets/marker-shadow.png';
/* 
image import example for icon url
import iconUrl from '../your-image-path'
*/
/*
for more information about icon https://leafletjs.com/reference.html#icon
*/
const exampleİcon = icon({
  iconUrl: 'path/to/your/image.png', // Resminizin URL'si
  iconSize: [38, 95], // İkonun boyutları
  iconAnchor: [22, 94], // İkonun hangi noktasının konumla eşleşeceğini belirtir
  popupAnchor: [-3, -76], // İkon üzerindeki popup'ın hangi noktaya bağlanacağını belirtir
});
const defaultIcon = L.icon({
  iconUrl: marker,
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  shadowUrl: markerShadow,
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});
export { defaultIcon };