
import React from 'react';
import mapImage from './assets/map.png';

const InteractiveMap = () => {
    const handleAreaClick = (area) => {
        console.log(`${area} clicked!`);
    };

    return (
        <div>
            <h2>Interactive Map</h2>
            <img
                src={mapImage}
                alt="Map of Areas"
                useMap="#map"
                style={{ width: '100%', height: 'auto' }}
            />
            <map name="map">
                <area shape="rect" coords="34,44,270,350" alt="Area 1" href="#" 
                      onClick={() => handleAreaClick('Area 1')} />
                <area shape="rect" coords="290,172,333,250" alt="Area 2" href="#"
                      onClick={() => handleAreaClick('Area 2')} />
                {/* Add more areas later*/}
            </map>
        </div>
    );
};

export default InteractiveMap;

