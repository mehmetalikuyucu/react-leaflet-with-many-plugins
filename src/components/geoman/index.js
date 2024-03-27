import { useLeafletContext } from '@react-leaflet/core';
import { useEffect } from 'react';
import '@geoman-io/leaflet-geoman-free';
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';
import { defaultIcon } from './image-icons.js';
const Geoman = (props) => {
  const context = useLeafletContext();
  const {
    position,
    positions,
    drawMarker,
    drawCircleMarker,
    drawPolyline,
    drawRectangle,
    drawPolygon,
    drawCircle,
    drawText,
    editMode,
    dragMode,
    cutPolygon,
    removalMode,
    rotateMode,
    oneBlock,
    drawControls,
    editControls,
    customControls,
    optionsControls,
    pinningOption,
    snappingOption,
    splitMode,
    scaleMode,
    lang,
    icon,
    //events
    onCreated,
    onEdited,
    onDrawStart,
    onDrawEnd,
    globalDrawModeToggled,
    //edit mode
    onUpdated,
    onEnabled,
    onDisabled,
    onVertextAdded,
    onVertextRemoved,
    onVertexClicked,
    onMarkerDragStart,
    onMarkerDrag,
    onMarkerDragEnd,
    onLayerReset,
    onSnapDrag,
    onSnap,
    onUnsnap,
    onIntersect,
    onCenterPlaced,
    onChange,
    onGlobalEditModeToggled,
    //dragMode
    onDragStart,
    onDrag,
    onDragEnd,
    onDragEnable,
    onDragDisable,
    onGlobalDragModeToggled,
    //remove mode
    onRemove,
    onLayerRemove,
    onGlobalRemovalModeToggled,
    //cut mode
    onCut,
    onGlobalCutModeToggled,
    //rotate mode
    onRotateStart,
    onRotate,
    onRotateEnd,
    onRotateEnable,
    onRotateDisable,
    onGlobalRotateModeToggled,
  } = props;
  useEffect(() => {
    const leafletContainer = context.layerContainer || context.map;

    leafletContainer.pm.addControls({
      position: position || 'bottomleft', // Toolbar position
      positions: positions || {
        // Customize the position of each block
        draw: '',
        edit: '',
        options: '',
        custom: '',
      },
      drawMarker: drawMarker || true, // Adds button to draw Markers
      drawCircleMarker: drawCircleMarker || true, // Adds button to draw CircleMarkers
      drawPolyline: drawPolyline || true, // Adds button to draw Line
      drawRectangle: drawRectangle || true, // Adds button to draw Rectangle
      drawPolygon: drawPolygon || true, // Adds button to draw Polygon
      drawCircle: drawCircle || true, // Adds button to draw Circle
      drawText: drawText || true, // Adds button to draw Text
      editMode: editMode || true, // Adds button to toggle Edit Mode for all layers
      dragMode: dragMode || true, // Adds button to toggle Drag Mode for all layers
      cutPolygon: cutPolygon || true, // Adds button to cut a hole in a Polygon or Line
      removalMode: removalMode || true, // Adds a button to remove layers
      rotateMode: rotateMode || true, // Adds a button to rotate layers
      oneBlock: oneBlock || false, // Display all buttons as one block
      drawControls: drawControls || true, // Shows all draw buttons / buttons in the draw block
      editControls: editControls || true, // Shows all edit buttons / buttons in the edit block
      customControls: customControls || true, // Shows all buttons in the custom block
      optionsControls: optionsControls || true, // Shows all options buttons / buttons in the option block
      pinningOption: pinningOption || true, // Adds a button to toggle the Pinning Option
      snappingOption: snappingOption || true, // Adds a button to toggle the Snapping Option
      splitMode: splitMode || true, // Adds a button to toggle the Split Mode for all layers
      scaleMode: scaleMode || true, // Adds a button to toggle the Scale Mode for all layers
    });
    leafletContainer.pm.setLang(lang || 'tr');
    leafletContainer.pm.setGlobalOptions({
      markerStyle: {
        icon: icon || defaultIcon,
      },
    });

    if (onCreated) {
      leafletContainer.on('pm:create', onCreated);
    }
    if (onEdited) {
      leafletContainer.on('pm:edit', onEdited);
    }
    if (onDrawStart) {
      leafletContainer.on('pm:drawstart', onDrawStart);
    }
    if (onDrawEnd) {
      leafletContainer.on('pm:drawend', onDrawEnd);
    }
    if (globalDrawModeToggled) {
      leafletContainer.on('pm:globaldrawmodetoggled', globalDrawModeToggled);
    }
    //edit mode
    if (onUpdated) {
      leafletContainer.on('pm:update', onUpdated);
    }
    if (onEnabled) {
      leafletContainer.on('pm:enable', onEnabled);
    }
    if (onDisabled) {
      leafletContainer.on('pm:disable', onDisabled);
    }
    if (onVertextAdded) {
      leafletContainer.on('pm:vertexadded', onVertextAdded);
    }
    if (onVertextRemoved) {
      leafletContainer.on('pm:vertexremoved', onVertextRemoved);
    }
    if (onVertexClicked) {
      leafletContainer.on('pm:vertexclick', onVertexClicked);
    }
    if (onMarkerDragStart) {
      leafletContainer.on('pm:markerdragstart', onMarkerDragStart);
    }
    if (onMarkerDrag) {
      leafletContainer.on('pm:markerdrag', onMarkerDrag);
    }
    if (onMarkerDragEnd) {
      leafletContainer.on('pm:markerdragend', onMarkerDragEnd);
    }
    if (onLayerReset) {
      leafletContainer.on('pm:layerreset', onLayerReset);
    }
    if (onSnapDrag) {
      leafletContainer.on('pm:snapdrag', onSnapDrag);
    }
    if (onSnap) {
      leafletContainer.on('pm:snap', onSnap);
    }
    if (onUnsnap) {
      leafletContainer.on('pm:unsnap', onUnsnap);
    }
    if (onIntersect) {
      leafletContainer.on('pm:intersect', onIntersect);
    }
    if (onCenterPlaced) {
      leafletContainer.on('pm:centerplaced', onCenterPlaced);
    }
    if (onChange) {
      leafletContainer.on('pm:change', onChange);
    }
    if (onGlobalEditModeToggled) {
      leafletContainer.on('pm:globaleditmodetoggled', onGlobalEditModeToggled);
    }
    //dragMode
    if (onDragStart) {
      leafletContainer.on('pm:dragstart', onDragStart);
    }
    if (onDrag) {
      leafletContainer.on('pm:drag', onDrag);
    }
    if (onDragEnd) {
      leafletContainer.on('pm:dragend', onDragEnd);
    }
    if (onDragEnable) {
      leafletContainer.on('pm:dragenable', onDragEnable);
    }
    if (onDragDisable) {
      leafletContainer.on('pm:dragdisable', onDragDisable);
    }
    if (onGlobalDragModeToggled) {
      leafletContainer.on('pm:globaldragmodetoggled', onGlobalDragModeToggled);
    }
    //remove mode
    if (onRemove) {
      leafletContainer.on('pm:remove', onRemove);
    }
    if (onLayerRemove) {
      leafletContainer.on('layerremove', onLayerRemove);
    }
    if (onGlobalRemovalModeToggled) {
      leafletContainer.on(
        'pm:globalremovalmodetoggled',
        onGlobalRemovalModeToggled,
      );
    }
    //cut mode
    if (onCut) {
      leafletContainer.on('pm:cut', onCut);
    }
    if (onGlobalCutModeToggled) {
      leafletContainer.on('pm:globalcutmodetoggled', onGlobalCutModeToggled);
    }
    //rotate mode
    if (onRotateStart) {
      leafletContainer.on('pm:rotatestart', onRotateStart);
    }
    if (onRotate) {
      leafletContainer.on('pm:rotate', onRotate);
    }
    if (onRotateEnd) {
      leafletContainer.on('pm:rotateend', onRotateEnd);
    }
    if (onRotateEnable) {
      leafletContainer.on('pm:rotateenable', onRotateEnable);
    }
    if (onRotateDisable) {
      leafletContainer.on('pm:rotatedisable', onRotateDisable);
    }
    if (onGlobalRotateModeToggled) {
      leafletContainer.on(
        'pm:globalrotatemodetoggled',
        onGlobalRotateModeToggled,
      );
    }

    return () => {
      leafletContainer.pm.removeControls();
      leafletContainer.pm.setGlobalOptions({ pmIgnore: true });
    };
  }, [context]);

  return null;
};

export { Geoman as GeomanControl };