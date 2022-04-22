import * as React from 'react';
import { compose, withProps } from 'recompose';
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
} from 'react-google-maps';
import { KEY_GOOGLE_MAP } from 'constants/constants';

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${KEY_GOOGLE_MAP}&v=3.exp&libraries=drawing`,
    loadingElement: <div style={{ width: '100%', height: '100%' }} />,
    containerElement: <div style={{ width: '100%', height: '100%' }} />,
    mapElement: <div style={{ width: '100%', height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  const {
    onChangePosition,
    centerPosition = { lat: 21.00626, lng: 105.85537 },
    readOnly,
    address,
    disableMark,
    zoom = 14,
  } = props;

  const changePositionAble = () => {
    if (readOnly) {
      return false;
    }
    if (disableMark) {
      return false;
    }
    return true;
  };

  const disableOption = {
    mapTypeControl: false,
    fullscreenControl: false,
    clickableIcons: false,
    streetViewControl: false,
    zoomControl: false,
    keyboardShortcuts: false,
    draggableCursor: 'pointer',
    gestureHandling: 'none',
  };

  return (
    <GoogleMap
      zoom={zoom}
      center={centerPosition}
      defaultCenter={centerPosition}
      key={KEY_GOOGLE_MAP}
      onClick={(e) => {
        changePositionAble() &&
          onChangePosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
      }}
      defaultOptions={readOnly ? disableOption : undefined}
    >
      {centerPosition && (
        <Marker
          position={centerPosition}
          draggable={changePositionAble()}
          onDragEnd={(e) => {
            onChangePosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
          }}
        />
      )}
      {address && (
        <div
          style={{
            position: 'absolute',
            bottom: 10,
            backgroundColor: '#fff',
            padding: '4px',
            width: '70%',
            border: `0.5px solid #BDBDBD`,
            borderRadius: '0px 100px 100px 0px',
          }}
        >
          <div
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {address}
          </div>
        </div>
      )}
    </GoogleMap>
  );
});
export default Map;
