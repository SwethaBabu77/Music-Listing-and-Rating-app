import React from 'react';
import { GooeyCircleLoader } from 'react-loaders-kit';
import './Loaders.css'
function Loaders() {
    const loaderProps = {
        loading: true,
        size: 120,
        duration: 2,
        colors: ["#99fffe", "#f42e00", "#042549"],
    };

    return (
        <div className="loader-container">
            <div className="loader">
                <GooeyCircleLoader {...loaderProps} />
            </div>
        </div>
    );
}

export default Loaders;
