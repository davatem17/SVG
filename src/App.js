import React, {useState} from 'react'
import SvgComponent from './components/Flecha';
import ReactMapGL, {Marker, GeolocateControl} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

function App() {
    let aux=270;
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDossc86yW8kSY9r7kdW59Y2cvj7jxlZMA"
      })
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
    const geolocateControlStyle = {
        right: 10,
        top: 10
      };
    const [viewport, setViewport] = useState({
        latitude: -1.264417,
        longitude: -78.608275,
        zoom: 10,
        width: "100vw",
        height: "100vh"
    });
    const getUserCoords = (googleRes) => {
        let lat = googleRes[0].geometry.location.lat;
        let long = googleRes[0].geometry.location.lng;
        console.log(lat);
    }
    return (

        <div>
            <ReactMapGL {...viewport}
                mapboxApiAccessToken={
                    process.env.REACT_APP_MAPBOX_TOKEN
                }
                onViewportChange={
                    viewport => {
                        setViewport(viewport);
                    }
            }>
                <GeolocateControl style={geolocateControlStyle}
                    positionOptions={
                        {enableHighAccuracy: true}
                    }
                    trackUserLocation={true}
                    auto></GeolocateControl>
                <Marker latitude={-1.264417}
                    longitude={-78.608275}>
                    <SvgComponent transform={`rotate(${aux} )`}/>
                </Marker>
            </ReactMapGL>
        </div>


    );
}

export default App;
