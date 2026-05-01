import ArtistCard from '../ArtistCard'

const artists = [
  { id: 1, name: 'Amaranthe', image: '/public/amaranthe.png' },
  { id: 2, name: 'Sabaton', image: '/public/sabaton.png' },
  { id: 3, name: 'Beyond the Black', image: '/public/beyond-the-black.png' },
  { id: 4, name: 'Beast in Black', image: '/public/beast-in-black.png' },
  { id: 5, name: 'Ad infinitum', image: '/public/ad-infinitum.png' },
]

const ArtistsSection = () => {
  return (
    <section id='artists' className='w-full min-h-[20rem] flex flex-col items-center justify-center bg-gradient-to-t from-night via-night to-liliac-soft px-4 py-12'>
      <h2 className='font-title text-pumpkin text-4xl md:text-5xl drop-shadow-lg mb-6'>Artistas Invitados</h2>
      <div className='flex flex-wrap justify-center gap-4'>
        {artists.map((artist) => (
          <ArtistCard
            key={artist.id}
            image={artist.image}
            name={artist.name}
            className="w-[30%] md:w-[20%] lg:w-[1/5] min-w-[8rem]"
          />
        ))}
      </div>
    </section>
  )
}

export default ArtistsSection