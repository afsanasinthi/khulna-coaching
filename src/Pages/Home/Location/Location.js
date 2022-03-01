
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 22.837283,
            lng: 89.540056
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCmnnF4uEtB7m1lMZ7s7RKcC4fa3Ht1YeU' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={22.837283}
                        lng={89.540056}
                        text="২৯/১, শেরে-বাংলা রোড (ময়লাপোতা মোড়, শাপলা ক্লিনিকের পাশে), খুলনা।"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;