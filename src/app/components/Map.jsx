// components/MapEmbed.js
import PropTypes from 'prop-types';

export default function MapEmbed({ latitude, longitude, zoom = 14, width = "100%", height = "100%" }) {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.85800128338!2d90.38347647397535!3d23.894653483225664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c43a7aeae529%3A0xd0856a9d666a2288!2sAiry%20International!5e0!3m2!1sen!2sbd!4v1730995000664!5m2!1sen!2sbd`;

  return (
    <div className="overflow-hidden rounded-lg shadow-lg" style={{ width, height }}>
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        src={mapUrl}
        title="Google Map"
        style={{ border: 0 }}
      ></iframe>
    </div>
  );
}

MapEmbed.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
};
