import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
// import './maps.css';

export const USMap = () => {
    const geoUrl = "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json";
    return (
        <div className="map-container">
            <h1>US States Presidential Leaning Map</h1>
            <ComposableMap 
              projection="geoAlbersUsa" 
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


export const IndiaMap = () => {
    const geoUrl = "https://raw.githubusercontent.com/geohacker/india/master/state/india_telengana.geojson";
    return (
        <div className="map-container">
            <h1>India States Political Leaning Map</h1>
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
