
// Uses Tableau JavaScript API to display vizzes
import React, { useEffect } from 'react';

const TableauEmbed = ({ vizURL }) => {
    useEffect(() => {
        const vizDiv = document.getElementById('tableauViz');
        
        const options = {
            width: '100%',
            height: '600px',
            hideTabs: true,      // Hides the tab bar
            hideToolbar: true     // Hides the toolbar
        };

        // Initializes the Tableau visualization
        const viz = new window.tableau.Viz(vizDiv, vizURL, options);

        // Cleans up the visualization on component unmount
        return () => {
            viz.dispose();
        };
    }, [vizURL]); // Adds vizURL to the dependency array

    return (
        <div>
            <h2>Tableau Visualization</h2>
            <div id="tableauViz"></div> 
        </div>
    );
};

export default TableauEmbed;
