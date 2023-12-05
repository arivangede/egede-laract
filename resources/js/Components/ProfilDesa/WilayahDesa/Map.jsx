import React from "react";
import GoogleMapReact from "google-map-react";

const MapComponent = ({ text }) => (
    <div style={{ color: "red", fontWeight: "bold" }}>{text}</div>
);

const Map = ({ apiKey }) => {
    const defaultProps = {
        center: {
            lat: 0,
            lng: 0,
        },
        zoom: 11,
    };

    return (
        <div style={{ height: "500px", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: apiKey }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <MapComponent lat={0} lng={0} text="Ini Posisi Saya" />
            </GoogleMapReact>
        </div>
    );
};

export default Map;
