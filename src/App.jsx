import './App.css'
import image1 from './images/1.jpeg';
import image2 from './images/2.jpeg';
import image3 from './images/3.jpeg';
import logo from './images/logo.jpeg';

function App() {

  const projects = [
    {
      title: "Diwali Rangoli",
      description: "Brighten your home with this ready-made rangoli. Perfect for Diwali, bringing prosperity and positive energy.",
      img: image1
    },
    {
      title: "Navratri Special Rangoli",
      description: "Celebrate the nine nights of Navratri with this colorful rangoli, symbolizing devotion and festivity.",
      img: image2
    },
    {
      title: "Makar Sankranti Kolam",
      description: "Traditional kolam design for Makar Sankranti, representing new beginnings and harvest celebrations.",
      img: image3
    },
    {
      title: "Ganesh Chaturthi Rangoli",
      description: "Auspicious rangoli with Lord Ganesha motifs, perfect for welcoming Bappa with divine blessings.",
      img: image1
    },
    {
      title: "Pongal Rangoli",
      description: "Beautiful kolam-style rangoli to celebrate Pongal, symbolizing prosperity and gratitude for the harvest.",
      img: image2
    },
    {
      title: "Holi Themed Rangoli",
      description: "Vibrant and colorful rangoli for Holi, spreading joy, happiness, and festive vibes.",
      img: image3
    },
    {
      title: "Onam Pookalam",
      description: "Traditional floral rangoli (Pookalam) to celebrate the spirit of Onam and welcome King Mahabali.",
      img: image1
    },
    {
      title: "Karva Chauth Rangoli",
      description: "Elegant rangoli for Karva Chauth, creating a divine ambiance for the festival of love and devotion.",
      img: image2
    }
  ];


  return (
    <div className="min-h-screen bg-yellow-50 p-6">
      {/* Header with Theme Colors */}
      <header className="bg-orange-600 text-white text-center py-6 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold">✨ Festival Rangoli Collection ✨</h1>
        <p className="text-lg mt-1">Celebrate Every Occasion with Stunning Rangoli Designs</p>
      </header>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {projects.map((card, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img className="w-full h-40 object-cover" src={card.img} alt={card.title} />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-orange-700">{card.title}</h2>
              <p className="text-gray-700">{card.description}</p>
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
