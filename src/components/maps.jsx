import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

export const IndiaMap = () => {
    const geoUrl = "https://raw.githubusercontent.com/geohacker/india/master/state/india_telengana.geojson";
    return (
        <div className="map-container">
            <h1>India States Political Leaning Map</h1>
            <ComposableMap projection="geoMercator">
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                    geographies.map(geo => (
                        <Geography 
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                            default: {
                                fill: "#999",
                                outline: "none"
                            },
                            hover: {
                                fill: "#666",
                                outline: "none"
                            },
                            pressed: {
                                fill: "#444",
                                outline: "none"
                            }
                        }}
                        />
                    ))}
                </Geographies>
            </ComposableMap>
        </div>
    )
}
