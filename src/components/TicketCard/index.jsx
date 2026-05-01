import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

const TicketCard = ({ name, price, features, buttonText = "Comprar Tickets" })=> {
  const navigate = useNavigate()

  const handleBuyTickets = ()=> {
    navigate('/buy-tickets')
  }

  return (
    <div className="w-80 bg-gradient-to-b from-gray-800 to-black text-frosted rounded-lg shadow-lg px-6 py-12 flex flex-col items-center">
      <h3 className="font-title text-2xl mb-4">{name}</h3>
      <p className="text-5xl font-title font-bold mb-4">{price}</p>
      <ul className="font-body italic text-center mb-4">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">- {feature}</li>
        ))}
      </ul>
      <button
        onClick={handleBuyTickets}
        className="mt-auto font-title bg-pumpkin hover:bg-ambar-dark text-liliac-dark font-semibold text-lg py-2 px-4 rounded-lg hover:scale-110"
      >
        {buttonText}
      </button>
    </div>
  )
};

TicketCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.string,
};

export default TicketCard;
