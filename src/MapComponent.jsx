import React, { useEffect } from 'react';
import { DMapProps, DTileLayerProps, DZoomLayerProps } from './constants';
import {
  MapContainer as LMapContainer,
  TileLayer,
  ZoomControl,
  Polyline,
  Marker,
  Popup,
  Tooltip,
} from 'react-leaflet';
import { MarkerCluster,ResponsivePopupMarker,GeomanControl } from './components';
import { useLeafletMarker } from './hooks';
export const MapContainer = (props) => {
  const { markers, setData } = useLeafletMarker(props.markers);
  useEffect(() => {
    setData(props.markers);
  }, [props.markers]);
  return (
    <LMapContainer
      style={{ height: '100%', minHeight: '100%',zIndex: 20 }}
      {...{ ...DMapProps, ...props?.mapProps }}
    >
      <TileLayer {...{ ...DTileLayerProps, ...props?.tileLayerProps }} />
      {!markers?.properties?.markerCluster ? (
        markers?.markers?.length > 0 &&
        markers.markers.map((m, key) => {
          if (markers.properties.responsivePopup) {
            return (
              <ResponsivePopupMarker
                key={key}
                position={m.position}
                icon={m.icon}
                content={m.popup.content}
                hasTip={m.popup.props.hasTip}
                autoPanPadding={m.popup.props.autoPanPadding}
                offset={m.popup.props.offset}
              />
            );
          } else {
            return (
              <Marker key={key} {...m}>
                {m?.tooltip?.content && (
                  <Tooltip {...m?.tooltip?.props}>
                    {m?.tooltip?.content}
                  </Tooltip>
                )}
                {m?.popup?.content && (
                  <Popup className="" {...m?.popup?.props}>
                    {m?.popup?.content}
                  </Popup>
                )}
              </Marker>
            );
          }
        })
      ) : (
        <MarkerCluster>
          {markers?.markers?.length > 0 &&
            markers.markers.map((m, key) => {
              if (markers.properties.responsivePopup) {
                return (
                  <ResponsivePopupMarker
                    key={key}
                    position={m.position}
                    vc
                    icon={m.icon}
                    content={m.popup.content}
                    hasTip={m.popup.props.hasTip}
                    autoPanPadding={m.popup.props.autoPanPadding}
                    offset={m.popup.props.offset}
                  />
                );
              } else {
                return (
                  <Marker key={key} {...m}>
                    {m?.tooltip?.content && (
                      <Tooltip {...m?.tooltip?.props}>
                        {m?.tooltip?.content}
                      </Tooltip>
                    )}
                    {m?.popup?.content && (
                      <Popup className="" {...m?.popup?.props}>
                        {m?.popup?.content}
                      </Popup>
                    )}
                  </Marker>
                );
              }
            })}
        </MarkerCluster>
      )}
      {props?.multiPolylineProps && <Polyline {...props.multiPolylineProps} />}
      {props?.polylineProps && <Polyline {...props.polylineProps} />}
      {props.geomanControl && (
        <GeomanControl
          position="bottomleft"
          oneBlock
          {...props.geomanControlProps}
        ></GeomanControl>
      )}
      <ZoomControl {...{ ...DZoomLayerProps, ...props?.zoomLayerProps }} />
    </LMapContainer>
  );
};