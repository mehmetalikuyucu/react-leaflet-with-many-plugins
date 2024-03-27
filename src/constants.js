const DMapProps = {
    center: [37.874641, 32.493156],
    zoom: 13,
    zoomControl: false,
    scrollWheelZoom: true,
  };
  const DTileLayerProps = {
    // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  };
  const DZoomLayerProps = {
    position: 'bottomright',
    zoomInText: '+',
    zoomOutText: '-',
    zoomInTitle: 'Zoom in',
    zoomOutTitle: 'Zoom out',
  };
  
  export { DMapProps, DTileLayerProps, DZoomLayerProps };