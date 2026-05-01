import { useNavigate } from 'react-router-dom'
import './HeroSection.css'

const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <section className="w-full min-h-[20rem] flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-night via-night to-liliac-dark px-4">
      {/* Image */}
      <figure className="w-full md:w-1/2 flex justify-center items-center">
        <img
          className="w-full h-[20rem] object-cover hero max-h-[25rem]"
          src="../../../public/skeleton-rocker.png"
          alt="skeleton rocker"
        />
      </figure>
      {/* Text and button */}
      <div className="flex flex-col items-center justify-center text-center w-full md:w-1/2 px-4">
        <p className="font-title text-base md:text-lg text-frosted mb-2">30 y 31 de octubre</p>
        <h2 className="font-title text-2xl md:text-4xl text-pumpkin mb-4">Trick or Treat Fest 2024</h2>
        <p className="font-body text-sm md:text-lg text-frosted italic mb-6">
          Vive Halloween como nunca antes. Prepárate para dos días con lo mejor del heavy y power metal, disfraces y pura adrenalina.
        </p>
        <button
          className="font-title bg-pumpkin text-dark-purple text-base md:text-lg font-bold cursor-pointer rounded-xl px-4 py-2 hover:scale-105 transition duration-300"
          onClick={() => navigate('/buy-tickets')}
        >
          Consigue tus Tickets
        </button>
      </div>
    </section>
  )
}

export default HeroSection