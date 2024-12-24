// components/MapEmbed.js
import PropTypes from 'prop-types';

export default function MapEmbed({ latitude, longitude, zoom = 14, width = "100%", height = "100%" }) {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14430.309768701802!2d55.351617!3d25.284796349999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c8ea240fd4f%3A0x5ff600f60d0aacdf!2sHor%20Al%20Anz%20East%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sbd!4v1735041841158!5m2!1sen!2sbd`;
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
