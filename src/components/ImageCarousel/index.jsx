import { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Función para avanzar a la siguiente imagen
  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images])

  // Función para retroceder a la imagen anterior
  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }, [images])

  // useEffect para cambiar automáticamente de imagen
  useEffect(() => {
    const intervalId = setInterval(nextImage, interval)
    return () => clearInterval(intervalId)
  }, [interval, nextImage])

  return (
    <div className="relative w-full overflow-hidden">
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-gray-700 bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all z-10"
      >
        <MdArrowBackIos size={20} />
      </button>

      <div className="w-full h-full flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-[20rem] md:h-[28rem] lg:h-[32rem] object-contain rounded-lg"
            />
          </div>
        ))}
      </div>

      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-gray-700 bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all z-10"
      >
        <MdArrowForwardIos size={20} />
      </button>
    </div>
  )
}

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
};

export default ImageCarousel;