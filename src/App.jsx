import './App.css'
import CircularRangoli from './images/circular-rangoli.jpeg';
import CornerPiece from './images/cirner-piece.jpeg';
import DishCircle from './images/dish-circle.jpeg';
import Ganapti from './images/ganapati.jpeg';
import GudhiOrange from './images/gudhi-orange.jpeg';
import Hibiscus from './images/hibiscus.jpeg';
import Lotus from './images/lotus.jpeg';
import KalashCorner from './images/kalash-corner-piece.jpeg';
import KalashPanti from './images/kalash-panati.jpeg';
import KalashPeackock from './images/kalsh-peacock.jpeg';
import Krishna from './images/krishna.jpeg';
import NathCorner from './images/nath-corner.jpeg';
import OnlyGudhiRed from './images/only-gudhi-red.jpeg';
import OnlyGudhiBlue from './images/only-gudhi-blue.jpeg';
import OnlyGudhiOrange from './images/only-gudhi-orange.jpeg';
import OnlyGudhiPink from './images/only-gudhi-pink.jpeg';
import Saaree from './images/sarree.jpeg';
import WelcomeLady from './images/welcome-lady.jpeg';
import logo from './images/logo.jpeg';

function App() {

  const projects = [
    {
      title: "Circular Rangoli",
      description: "A beautiful circular rangoli design to enhance the beauty of your home.",
      img: CircularRangoli
    },
    {
      title: "Corner Piece",
      description: "A perfect corner piece rangoli to add elegance to your home decor.",
      img: CornerPiece
    },
    {
      title: "Dish Circle",
      description: "A unique dish circle rangoli design for special occasions.",
      img: DishCircle
    },
    {
      title: "Ganapti Rangoli",
      description: "Auspicious rangoli with Lord Ganesha motifs, perfect for welcoming Bappa with divine blessings.",
      img: Ganapti
    },
    {
      title: "Gudhi Orange",
      description: "A vibrant Gudhi orange rangoli to celebrate traditional festivals.",
      img: GudhiOrange
    },
    {
      title: "Hibiscus Rangoli",
      description: "A beautiful hibiscus flower rangoli to add a touch of nature to your home.",
      img: Hibiscus
    },
    {
      title: "Lotus Rangoli",
      description: "A serene lotus rangoli design to bring peace and tranquility.",
      img: Lotus
    },
    {
      title: "Kalash Corner",
      description: "A traditional Kalash corner rangoli to celebrate auspicious occasions.",
      img: KalashCorner
    },
    {
      title: "Kalash Panti",
      description: "A beautiful Kalash panti rangoli to enhance your festive decor.",
      img: KalashPanti
    },
    {
      title: "Kalash Peacock",
      description: "A stunning Kalash peacock rangoli to add a royal touch to your home.",
      img: KalashPeackock
    },
    {
      title: "Krishna Rangoli",
      description: "A divine Krishna rangoli to celebrate Janmashtami and other festivals.",
      img: Krishna
    },
    {
      title: "Nath Corner",
      description: "A traditional Nath corner rangoli to add elegance to your home decor.",
      img: NathCorner
    },
    {
      title: "Gudhi Red",
      description: "A vibrant Gudhi red rangoli to celebrate traditional festivals.",
      img: OnlyGudhiRed
    },
    {
      title: "Gudhi Blue",
      description: "A vibrant Gudhi blue rangoli to celebrate traditional festivals.",
      img: OnlyGudhiBlue
    },
    {
      title: "Gudhi Orange",
      description: "A vibrant Gudhi orange rangoli to celebrate traditional festivals.",
      img: OnlyGudhiOrange
    },
    {
      title: "Gudhi Pink",
      description: "A vibrant Gudhi pink rangoli to celebrate traditional festivals.",
      img: OnlyGudhiPink
    },
    {
      title: "Saaree Rangoli",
      description: "A beautiful Saaree rangoli to add a touch of tradition to your home.",
      img: Saaree
    },
    {
      title: "Welcome Lady",
      description: "A welcoming lady rangoli to greet your guests with warmth and elegance.",
      img: WelcomeLady
    }
  ];

  const handleZoom = (e) => {
    const img = e.target;
    if (img.classList.contains('zoomed')) {
      img.classList.remove('zoomed');
      img.style.transform = 'scale(1)';
      img.style.cursor = 'zoom-in';
    } else {
      img.classList.add('zoomed');
      img.style.transform = 'scale(2)';
      img.style.cursor = 'zoom-out';
    }
  };

  const handleEnquire = (title) => {
    const message = `Hello, I would like to enquire about the ${title} rangoli.`;
    const whatsappNumber = "+919881987729";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="min-h-screen p-6">
      {/* Header with Theme Colors */}
      <header className="flex flex-col sm:flex-row justify-between items-center py-4 px-6 border-b-4 border-orange-500 shadow-md">
        <img src={logo} alt="Swami Creations" className="h-12" />
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-700 text-center sm:text-left">
          ✨ Swami Creations ✨
        </h1>
      </header>
      {/* Subheader */}
      <div className="text-center my-8">
        <h2 className="text-2xl font-bold text-orange-700">Beautiful Ready Rangoli – Instant Elegance for Every Celebration!</h2>
        <p className="text-gray-700 mt-2">Decorate your space effortlessly with vibrant, pre-designed rangolis—perfect for festivals, weddings, and special occasions.</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {projects.map((card, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col">
            <div className="zoom-container">
              <img className="w-full h-40 object-contain zoom" src={card.img} alt={card.title} onClick={handleZoom} />
            </div>
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-semibold text-orange-700">{card.title}</h2>
              <p className="text-gray-700">{card.description}</p>
            </div>
            <div className="p-4">
              <button
                className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 w-full"
                onClick={() => handleEnquire(card.title)}
              >
                Enquire on WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer with Matching Theme */}
      <footer className="mt-12 bg-orange-700 text-yellow-200 text-center py-6 rounded-xl shadow-md">
        <p className="text-lg font-semibold">🌸 Decorate Your Home with Artistic Rangoli 🌸</p>
        <p className="mt-2">Follow us on:
          <a href="#" className="ml-2 text-yellow-300 hover:underline">Instagram</a> |
          <a href="#" className="ml-2 text-yellow-300 hover:underline">Facebook</a> |
          <a href="#" className="ml-2 text-yellow-300 hover:underline">WhatsApp</a>
        </p>
        <p className="mt-2">📞 Contact Us: <span className="font-bold">+91 9881987729</span></p>
        <p className="mt-2 text-sm">© {new Date().getFullYear()} Swami Creations | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App
