import { useState, useEffect } from 'react';
const locToLangLong = (item) => [item.latitude, item.longitude];

const useLeafletMarker = (pmarkers) => {
  const [data, setData] = useState({});
  const [markers, setMarkers] = useState([]);

  const prepare = (param) => {
    let properties = {};
    let tempData = [];
    if (param?.length > 0) {
      for (let index = 0; index < param.length; index++) {
        const element = param[index];
        for (let index = 0; index < element.items.length; index++) {
          const mc = element?.markerCluster;
          const rp = element?.responsivePopup;
          const item = element.items[index];
          properties = { responsivePopup: rp, markerCluster: mc };
          if (element.tooltip && element.popup) {
            throw new Error('only one (choose tooltip or popup)');
          } else {
            if (element.tooltip) {
              let markerProps = {
                key: index,
                position: locToLangLong(item),
                icon: element.icon(item),
                eventhandlers: element.eventhandlers,
                tooltip: element.tooltip,
              };
              tempData.push(markerProps);
            } else if (element.popup) {
              let markerProps = {
                key: index,
                position: locToLangLong(item),
                icon: element.icon(item),
                eventhandlers: element.eventhandlers,
                popup: element.popup,
              };
              tempData.push(markerProps);
            } else {
              let markerProps = {
                key: index,
                position: locToLangLong(item),
                icon: element.icon(item),
                eventhandlers: element.eventhandlers,
              };
              tempData.push(markerProps);
            }
          }
        }
      }
    }
    setMarkers({ markers: tempData, properties: properties });
  };
  useEffect(() => {
    if (pmarkers) {
      setData(pmarkers);
    }
  }, []);
  useEffect(() => {
    prepare(data);
  }, [data]);
  return { markers, setData };
};

export default useLeafletMarker;
const markers = [
  {
    item: {
      satellites: 0,
      localDateTime: '2023-11-07T13:22:00Z',
      engineOn: true,
      distance: 0,
      vehiclePlate: '42C1306',
      latitude: 37.9566087,
      deviceKey: '3091070',
      speed: -4,
      mtId: '0E4NSTV0XYS8S',
      engineHours: 0,
      mCode: 'KV',
      totalDistance: 0,
      longitude: 32.5903961,
    },
    icon: function () {
      return divIcons.car(this.item);
    },
    position: function () {
      return locToLangLong(this.item);
    },
    eventhandlers: {
      click: (event, item) => {},
    },
  },
  {
    item: {
      satellites: 0,
      localDateTime: '2023-11-07T13:22:00Z',
      engineOn: true,
      distance: 0,
      vehiclePlate: '42C1306',
      latitude: 37.9567187,
      deviceKey: '3091070',
      speed: -4,
      mtId: '0E4NSTV0XYS8S',
      engineHours: 0,
      mCode: 'KV',
      totalDistance: 0,
      longitude: 32.5903961,
    },
    icon: function () {
      return divIcons.car(this.item);
    },
    position: function () {
      return locToLangLong(this.item);
    },
    eventhandlers: {
      click: (event, item) => {},
    },
  },
  {
    item: {
      satellites: 0,
      localDateTime: '2023-11-07T13:22:00Z',
      engineOn: true,
      distance: 0,
      vehiclePlate: '42C1306',
      latitude: 37.9568287,
      deviceKey: '3091070',
      speed: -4,
      mtId: '0E4NSTV0XYS8S',
      engineHours: 0,
      mCode: 'KV',
      totalDistance: 0,
      longitude: 32.5903961,
    },
    icon: function () {
      return divIcons.car(this.item);
    },
    position: function () {
      return locToLangLong(this.item);
    },
    eventhandlers: {
      click: () => {},
    },
    tooltipProps: {},
    popupProps: {},
    content: {
      popup: true,
      tooltip: false,
    },
  },
];