import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './SimpleMap.css'

const SimpleMap = () => {
    const posStart = [40.44795126357991, -3.6359747451386735]; 
    // const posEnd = [51.505, -0.07];

    return (
        <div className="simple-map-container">
            <MapContainer center={posStart} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='© <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                />
                <Marker position={posStart}>
                    <Popup>
                        Hotel Silken Puerta de Madrid 🏩
                    </Popup>
                </Marker>

                {/* <Marker position={posEnd}>
                    <Popup>
                        End of Route 👌
                    </Popup>
                </Marker> */}
            </MapContainer>
        </div>
    );
}

export default SimpleMap;
