import 'leaflet/dist/leaflet.css';
import React, { type FC } from 'react';
import {
	MapContainer,
	type MapContainerProps,
	Marker,
	type MarkerProps,
	Popup,
	TileLayer,
} from 'react-leaflet';

interface MapBaseProps extends MapContainerProps, MarkerProps {
	height?: string;
	popupText?: string;
}

export const MapBase: FC<MapBaseProps> = (props) => {
	const {
		center,
		position,
		zoom = 13,
		scrollWheelZoom = false,
		height = '500px',
		popupText,
	} = props;

	return (
		<MapContainer
			center={center}
			zoom={zoom}
			scrollWheelZoom={scrollWheelZoom}
			style={{ minHeight: height }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker position={position}>
				{popupText && (
					<Popup>
						<span dangerouslySetInnerHTML={{ __html: popupText }} />
					</Popup>
				)}
			</Marker>
		</MapContainer>
	);
};

MapBase.displayName = 'MapBase';
