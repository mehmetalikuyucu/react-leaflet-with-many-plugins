import React from 'react';
import {
  extendContext,
  createElementObject,
  createPathComponent,
  LeafletContextInterface,
} from '@react-leaflet/core';
import L, { LeafletMouseEventHandlerFn } from 'leaflet';
import 'leaflet.markercluster';
import './assets/MarkerCluster.css';
import './assets/MarkerCluster.Default.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('./assets/marker-icon-2x.png').default,
  iconUrl: require('./assets/marker-icon.png').default,
  shadowUrl: require('./assets/marker-shadow.png').default,
});

function getPropsAndEvents(props) {
  let clusterProps = {};
  let clusterEvents = {};
  const { children, ...rest } = props;
  // Splitting props and events to different objects
  Object.entries(rest).forEach(([propName, prop]) => {
    if (propName.startsWith('on')) {
      clusterEvents = { ...clusterEvents, [propName]: prop };
    } else {
      clusterProps = { ...clusterProps, [propName]: prop };
    }
  });
  return { clusterProps, clusterEvents };
}

function createMarkerClusterGroup(props, context) {
  const { clusterProps, clusterEvents } = getPropsAndEvents(props);
  const markerClusterGroup = new L.MarkerClusterGroup(clusterProps);
  Object.entries(clusterEvents).forEach(([eventAsProp, callback]) => {
    const clusterEvent = `cluster${eventAsProp.substring(2).toLowerCase()}`;
    markerClusterGroup.on(clusterEvent, callback);
  });
  return createElementObject(
    markerClusterGroup,
    extendContext(context, { layerContainer: markerClusterGroup }),
  );
}

const updateMarkerCluster = (instance, props, prevProps) => {
  //TODO when prop change update instance
  //   if (props. !== prevProps.center || props.size !== prevProps.size) {
  //   instance.setBounds(getBounds(props))
  // }
};

const MarkerClusterGroup = createPathComponent(
  createMarkerClusterGroup,
  updateMarkerCluster,
);

export default MarkerClusterGroup;
