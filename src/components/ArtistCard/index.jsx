import PropTypes from 'prop-types';

const ArtistCard = ({ image, name })=> {
  return (
    <figure className="w-[10rem] md:w-[12rem] lg:w-[14rem] flex flex-col items-center text-center opacity-70 hover:opacity-100 hover:contrast-125 hover:text-4xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105">
      <h2 className="font-title text-frosted text-center mb-2">{name}</h2>
      <img
        className="w-full h-[12rem] md:h-[14rem] lg:h-[16rem] object-cover rounded-md"
        src={image}
        alt={name}
      />
    </figure>
  );
};

ArtistCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ArtistCard;