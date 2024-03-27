# react-leaflet-with-many-plugins
This package is a customized version of leaflet in react framework.

You can report any questions, problems, development requests by opening an issue.


## Usage

To use the Map Component in your project, follow these steps:

1. Install the package by running the following command:
    ```bash
    npm install react-leaflet-with-many-plugins
    ```

2. Add the `MapContainer` component to your project:

    ```js
    import MapContainer from 'MapContainer';
    ```

3. Use the `MapContainer` component in your code:

    ```jsx
    const App = () => {
        return (
            <div>
                <h1>My Map Component</h1>
                <MapContainer />
            </div>
        );
    };

    export default App;
    ```

    

    ## Props

    The `MapContainer` component accepts the following props:

    | Prop    | Default   | Type    
    |----------|---|----------|
    | mapProps | ✔ | object |
    | tileLayerProps | ✔ |  object|
    |zoomLayerProps|✔|object|
    | markers   | ❌  | array    |
    | polylineProps|❌| object |
    | multiPolylineProps|❌|object | 
    | geomanControl|❌|bool | 
    | geomanControlProps|❌|object | 

## Default Props
```jsx
const mapProps = {
  center: [37.874641, 32.493156],
  zoom: 13,
  zoomControl: false,
  scrollWheelZoom: true,
};

const tileLayerProps = {
  // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
};

const zoomLayerProps = {
  position: 'bottomright',
  zoomInText: '+',
  zoomOutText: '-',
  zoomInTitle: 'Zoom in',
  zoomOutTitle: 'Zoom out',
};

```
## Override Props
```jsx
// for example if we want to override the 'center' prop
const mapProps = {
  center: [37.874641, 32.493156],
};

//Usage
<MapContainer  mapProps={mapProps} />
```


## Create Marker Groups
- The eventhandler prop has been customized. With the second parameter that you will give to each event in the eventhandler, you will be able to process the item that points to that marker.The eventhandler prop has been customized. With the second parameter that you will give to each event in the eventhandler, you will be able to process the item that points to that marker.


- You can handle position and icon field in the same way

                                                                                 
```jsx
// This array includes markers object. Each object reference a marker group
import marker from './images/marker-icon.png';
import markerShadow from './images/marker-shadow.png';
import { renderToStaticMarkup } from 'react-dom/server';



const locToLangLong = (item) => [item.latitude, item.longitude];

const vehicles = [
  {
    vehiclePlate: '42C16',
    latitude: 37.9570187,
    longitude: 32.5903961,
  },
  {
    vehiclePlate: '42C106',
    latitude: 37.9568287,
    longitude: 32.5903961,
  },
];


const Car=({vehicle})=>(
  <div className="absolute top-0 bg-[#304564] border-white border-[1px] -mt-5 text-white px-1 color rounded-md">
  {vehicle.vehiclePlate}
</div>)

  const divIcons = {
  car: (vehicle) => {
    return divIcon({
      html: renderToStaticMarkup(<Car vehicle={vehicle} />),
      iconAnchor: [25, 57],
      iconSize: [50, 57],
      className: '',
    });
  },
};

const markers = [
    {
      items: vehicles,
      tooltip: {
        content: <ExamplePopup />,
        props: {
          direction: 'bottom',
          offset: [0, 73],
          opacity: 1,
          permanent: false,
        },
      },
      icon: function (item) {
        return L.icon({
        iconUrl: marker,
        iconSize: [25, 41],
        iconAnchor: [12.5, 41],
        shadowUrl: markerShadow,
        shadowSize: [41, 41],
        shadowAnchor: [12, 41],
        });
      },
      position: function (item) {
        return locToLangLong(item);
      },
      eventHandlers: {
        click: (event, item) => {
          console.log('clickEvent', event, item);
        },
      },
      markerCluster: true,
      responsivePopup: false,
    },
     {
      items: vehicles,
      popup: {
        content: <ExamplePopup />,
        props: {
          offset: [0, 73],
          opacity: 1,
          permanent: false,
        },
      },
      icon: function (item) {
        return L.icon({
        iconUrl: marker,
        iconSize: [25, 41],
        iconAnchor: [12.5, 41],
        shadowUrl: markerShadow,
        shadowSize: [41, 41],
        shadowAnchor: [12, 41],
        });
      },
      position: function (item) {
        return locToLangLong(item);
      },
      eventHandlers: {
        click: (event, item) => {
          console.log('clickEvent', event, item);
        },
      },
      markerCluster: true,
      responsivePopup: false,
    },
  ];

  
  function ExamplePopup() {
  return <div>examplePopup</div>;
  }

  //Usage
  <Mapcontainer 
  markers={markers}
  />
```

## Create Other Layers
```jsx
const multiPolylineData = [
  [
    [37.8716, 32.4849],
    [37.8717, 32.485],
    [37.8718, 32.4851],
  ],
  [
    [37.8718, 32.4851],
    [37.8719, 32.4852],
    [37.872, 32.4853],
  ],
  [
    [37.882, 32.4853],
    [37.8721, 32.4854],
    [37.8722, 32.4855],
  ],
];
const multiPolylineProps = {
  pathOptions: {
    color: 'red',
  },
  positions: multiPolylineData,
};
const polylineData = [
  [37.9568287, 32.5903961],
  [37.8816, 32.4849],
  [37.8916, 32.4849],
];
const polylineProps = {
  pathOptions: {
    color: 'black',
  },
  positions: polylineData,
};

//Usage
  return (<>
  <MapContainer 
    polylineProps={polylineProps}
    multiPolylineProps={multiPolylineProps}
  >
  </>)
```

## Create Geoman Control Layer And Handle Events
Suppport all free geoman events
[geoman docs](https://www.geoman.io/docs)

```jsx
 const  geomanControlProps={{
    onCreated: (event) => {
      console.log('onCreated', event);
    },
  }}

  //usage 
  return (
    <MapContainer 
    geomanControl
    geomanControlProps={geomanControlProps}
  />
  )
```

## Extension Knowledge

The `MapContainer` component supports the following extensions:

| Extension | Description |
|-----------|-------------|
| Geoman  | added |
| Marker Cluster | added |
| Responsive Popup | added |
| Polyline Mesaure      | adding |
