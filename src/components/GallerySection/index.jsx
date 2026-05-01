import ImageCarousel from '../ImageCarousel'

const GallerySection = () => {
  const galleryImages = [
    '/public/fest-01.jpg',
    '/public/fest-02.jpg',
    '/public/fest-03.jpg',
    '/public/fest-04.jpg',
    '/public/fest-05.jpg',
  ]

  return (
    <section id='gallery' className="w-full py-12 bg-gradient-to-b from-night to-liliac-dark">
      <h2 className="font-title text-3xl md:text-5xl text-pumpkin text-center mb-6 drop-shadow-lg">
        Galería
      </h2>
      <p className='font-body text-sm md:text-lg text-frosted italic text-center mb-8'>
        Descubre por qué Trick or Treat Fest es un evento inolvidable. Aquí algunos momentos capturados de ediciones pasadas.
      </p>
      <div className="w-full max-w-[90%] mx-auto">
        <ImageCarousel images={galleryImages} />
      </div>
    </section>
  )
}

export default GallerySection