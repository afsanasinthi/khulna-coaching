import React from 'react';

const Preloader = () => {
    return (
        <div>
            <div className="preloader">
                <div className="loader rubix-cube">
                    <div className="layer layer-1"></div>
                    <div className="layer layer-2"></div>
                    <div className="layer layer-3 color-1"></div>
                    <div className="layer layer-4"></div>
                    <div className="layer layer-5"></div>
                    <div className="layer layer-6"></div>
                    <div className="layer layer-7"></div>
                    <div className="layer layer-8"></div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;