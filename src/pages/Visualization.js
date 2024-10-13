
import React, { useState } from 'react'; 
import './VisualizationPage.css';
import NavBar from '../components/NavBar';
import TableauEmbed from '../components/TableauEmbed';
import mapImage from '../assets/images/map.png'; 

const Visualization = () => {
    const [activeVisualization, setActiveVisualization] = useState(null); // State to control which visualization to show

    const handleOverlayClick = (type) => {
        setActiveVisualization(type); // Set the active visualization type
    };

    return (
        <div> 
            <NavBar />
            <main>
                <h1>Data Visualizations</h1>
                <p>
                    Our visualizations provide insights into critical environmental and social issues. By exploring this data, 
                    you can better understand the challenges we face and the impact of our actions on the planet and society.
                </p>

                {/* Interactive Map Section */}
                <section>
                    <h2>Interactive Map</h2>
                    <div className="map-container">
                        <img
                            src={mapImage} 
                            alt="Interactive Map"
                            className="map-image"
                        />
                        {/* Clickable area for Environmental Data */}
                        <div className="clickable-area" onClick={() => handleOverlayClick('environmentalData')} style={{ top: '50px', left: '100px', width: '100px', height: '100px' }}></div>
                        {/* Clickable area for Social Metrics */}
                        <div className="clickable-area" onClick={() => handleOverlayClick('socialMetrics')} style={{ top: '200px', left: '150px', width: '100px', height: '100px' }}></div>
                    </div>

                    {/* Renders TableauEmbed based on active visualization */}
                    {activeVisualization === 'environmentalData' && <TableauEmbed />} 
                    {activeVisualization === 'socialMetrics' && <TableauEmbed />} 
                </section>

                <section>
                    <h2>Environmental Data</h2>
                    <TableauEmbed vizURL="https://public.tableau.com/views/CircuitEarth_Emissions_China/Sheet1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"/>
                    <p>
                        This visualization shows the greenhouse gas emissions from China over the years 1900 to 2022.
                    </p>
                </section>

                <section>
                    <h2>Social Metrics</h2>
                    <TableauEmbed />
                    <p>
                        This visualization provides data on social inequality and access to resources in different communities.
                        It illustrates the disparities that exist and the need for focused interventions.
                    </p>
                </section>

            </main>
        </div>
    );
};

export default Visualization;
