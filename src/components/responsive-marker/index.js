import React, { useEffect } from 'react';

import L from 'leaflet';
import R from 'leaflet-responsive-popup';
import 'leaflet-responsive-popup/leaflet.responsive.popup.css';
import { useLeafletContext } from '@react-leaflet/core';
import { renderToStaticMarkup } from 'react-dom/server';

const ResponsivePopupMarker = (props) => {
  const context = useLeafletContext();
  const content = renderToStaticMarkup(props?.content);
  useEffect(() => {
    const position = props.position;
    const marker = L.marker(position, { icon: props.icon });
    let popup = {};
    if (props.autoPanPadding) {
      if (props.hasTip) {
        popup = R.responsivePopup({
          hasTip: props?.hasTip,
          autoPanPadding: props?.autoPanPadding,
          offset: props?.offset,
        }).setContent(content);
      } else {
        popup = R.responsivePopup({
          // hasTip: props?.hasTip,
          autoPanPadding: props?.autoPanPadding,
          offset: props?.offset,
        }).setContent(content);
      }
    } else {
      if (props.hasTip) {
        popup = R.responsivePopup({
          hasTip: props?.hasTip,
          // autoPanPadding: props?.autoPanPadding,
          offset: props?.offset,
        }).setContent(content);
      } else {
        popup = R.responsivePopup({
          // hasTip: props?.hasTip,
          // autoPanPadding: props?.autoPanPadding,
          offset: props?.offset,
        }).setContent(content);
      }
    }

    marker.bindPopup(popup);
    marker.addTo(context.map);

    return () => {
      marker.remove();
    };
  }, [context.map, props]);

  return null;
};

export default ResponsivePopupMarker;