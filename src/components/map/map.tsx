import { useEffect, useRef } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { City, Point } from '../../types/location';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks';
import { URL_MARKER_CURRENT, URL_MARKER_STANDART } from '../../const';
import { getChosenOffer } from '../../store/offer-data/selectors';
import { getHighlightedMarker } from '../../store/common-data/selectors';

type MapProps = {
  points: Point[];
  city: City;
}

const currentIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [32, 32],
  iconAnchor: [20, 40]
});

const standartIcon = new Icon({
  iconUrl: URL_MARKER_STANDART,
  iconSize: [32, 32],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const highlightedMarker = useAppSelector(getHighlightedMarker);

  const { points, city } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const currentPoint = useAppSelector(getChosenOffer)?.location;

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      if (currentPoint) {
        const marker = new Marker({
          lat: currentPoint.latitude,
          lng: currentPoint.longitude,
        });
        marker
          .setIcon(currentIcon)
          .addTo(markerLayer);
      }

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });
        let icon;
        if (point === highlightedMarker) {
          icon = currentIcon;
        } else {
          icon = standartIcon;
        }
        marker
          .setIcon(icon)
          .addTo(markerLayer);
      });

      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, highlightedMarker, city, currentPoint]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;
