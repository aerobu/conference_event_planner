import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import './maps.css';

export const IndiaMap = () => {
    const geoUrl = "https://raw.githubusercontent.com/geohacker/india/master/state/india_telengana.geojson";
    return (
        <div className="map-container">
            <ComposableMap 
              projection="geoMercator" 
              projectionConfig={{ scale: 900, center: [78.9629, 20.5937] }}
              width={300} 
              height={1000}
            >
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
