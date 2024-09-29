import React, { useState } from 'react';
import { Mail, Phone, DollarSign, Users, Briefcase, Menu as MenuIcon, X as CloseIcon, Facebook, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="rounded-lg w-full h-auto max-h-[500px] object-cover"
      />
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-orange-600 bg-opacity-50 hover:bg-opacity-75 transition text-white p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-600 bg-opacity-50 hover:bg-opacity-75 transition text-white p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

const Newhomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const summerImages = [
    '/kurt2.jpg',
    '/kurt1.jpg',
    '/letnisezonaimage.jpg',
    '/summer4.jpg',
  ];

  const winterImages = [
    '/zimnisezonaimage.jpg',
    '/kurtyhala2.jpg',
    '/winter3.jpg',
    '/winter4.jpg',
  ];
  
  return (
    <div className="min-h-screen bg-amber-50">
      <header className="bg-gradient-to-r from-orange-500 to-red-600 text-white fixed top-0 left-0 right-0 z-50 py-4 px-6">
        <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/logocimice.png"
                alt="Tenis Čimice Logo"
                className="h-12 w-12 mr-2"
              />
            </Link>
            <div className="ml-4 flex flex-col items-center">
              <a href="https://www.facebook.com/people/Kate%C5%99ina-Peterkov%C3%A1/pfbid0TncMRnyejaJkEkYUzi36H7si3prwYeLDfqJiudBjHMHcPPrWKEeyokFt3Nctphj2l/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 mt-2">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? (
                <CloseIcon className="h-8 w-8" />
              ) : (
                <MenuIcon className="h-8 w-8" />
              )}
            </button>
          </div>
          <ul className={`hidden md:flex md:space-x-4`}>
            {['O nás', 'Aktuality', 'Kempy', 'Ceník', 'Školička', 'Doplňkové služby', 'Kontakt'].map((item) => (
              <li key={item} className="flex-shrink-0">
                <Link
                  to={
                    item === 'O nás' ? '/o-nas' :
                    item === 'Aktuality' ? '/aktuality' :
                    item === 'Kempy' ? '/kempy' :
                    item === 'Ceník' ? '/cenik' :
                    item === 'Školička' ? '/skolicka' :
                    item === 'Doplňkové služby' ? '/doplnkove-sluzby' :
                    item === 'Kontakt' ? '/kontakt' :
                    '#'
                  }
                  className="hover:text-yellow-300 transition duration-300 font-semibold"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className={`md:hidden fixed top-16 right-0 w-64 bg-white text-black shadow-lg transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} rounded-lg overflow-hidden`}>
            <ul className="flex flex-col">
              {['O nás', 'Aktuality', 'Kempy', 'Ceník', 'Školička', 'Doplňkové služby', 'Kontakt'].map((item) => (
                <li key={item} className="border-b border-gray-300">
                  <Link
                    to={
                      item === 'O nás' ? '/o-nas' :
                      item === 'Aktuality' ? '/aktuality' :
                      item === 'Kempy' ? '/kempy' :
                      item === 'Ceník' ? '/cenik' :
                      item === 'Školička' ? 'skolicka' :
                      item === 'Doplňkové služby' ? '/doplnkove-sluzby' :
                      item === 'Kontakt' ? '/kontakt' :
                      '#'
                    }
                    className="block px-4 py-2 hover:bg-gray-200 transition duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <main className="pt-20 max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <section
          className="relative bg-cover bg-center h-[500px] text-white flex items-center justify-center mb-12"
          style={{ backgroundImage: 'url(/teniskoberec.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-bold mb-4 text-orange-400">
              Tenisová škola Čimice
            </h1>
            <p className="text-xl mb-6 text-gray-300">
              Tréninky pro všechny věkové kategorie. Zlepšete
              svou hru s námi.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/rezervace-kurtu"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Rezervovat kurt
              </a>
              <a
                href="/nase-kurzy"
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Naše kurzy
              </a>
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <section
            id="cenik"
            className="bg-white rounded-lg shadow-md p-6 border-t-4 border-orange-500 hover:shadow-lg transition duration-300 transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold mb-4 text-orange-600 flex items-center">
              <DollarSign className="mr-2" />
              Ceník
            </h2>
            <p className="text-gray-700">
              Prohlédněte si naše aktuální ceny pro individuální i
              skupinové lekce.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="/cenik"
                className="text-orange-500 hover:text-orange-600 font-semibold"
              >
                Zobrazit ceník →
              </a>
            </div>
          </section>

          <section
            id="aktuality"
            className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-500 hover:shadow-lg transition duration-300 transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold mb-4 text-red-600 flex items-center">
              <Users className="mr-2" />
              Aktuality
            </h2>
            <p className="text-gray-700">
            Nejnovější zprávy a události z naší tenisové školy. 
            Sledujte aktuální změny a novinky.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="/aktuality"
                className="text-red-500 hover:text-red-600 font-semibold"
              >
                Více informací →
              </a>
            </div>
          </section>

          <section
            id="doplnkove-sluzby"
            className="bg-white rounded-lg shadow-md p-6 border-t-4 border-yellow-500 hover:shadow-lg transition duration-300 transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold mb-4 text-yellow-600 flex items-center">
              <Briefcase className="mr-2" />
              Doplňkové služby
            </h2>
            <p className="text-gray-700">
            Nabízíme tenisové vybavení a vyplétání tenisových raket pro hráče všech úrovní.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="/doplnkove-sluzby"
                className="text-yellow-500 hover:text-yellow-600 font-semibold"
              >
                Prozkoumat služby →
              </a>
            </div>
          </section>
        </div>

        <section className="bg-white rounded-lg shadow-md p-10 border-t-4 border-green-500 hover:shadow-lg transition duration-300">
  <h2 className="text-3xl font-semibold mb-8 text-green-600 text-center">
    Tenisové kurty
  </h2>
  <p className="text-gray-700 text-center mb-8">
  Náš tenisový areál nabízí různé povrchy a zázemí pro rozmanitou a nerušenou hru. 
  K dispozici jsou 4 samostatné haly, které umožňují pohodlné hraní i v zimní sezóně. 
  Mezi povrchy naleznete 2 kurty s nově instalovanou umělou trávou (2023), 1 kurt s umělým povrchem 
  a 2 antukové kurty.
  </p>

  <div className="grid md:grid-cols-2 gap-8">
    {/* Letní sezóna */}
    <div className="flex flex-col items-center text-center">
      <h3 className="text-2xl font-semibold text-green-600 mb-4">Letní sezóna</h3>
      <p className="text-gray-700 mb-4">
        8. dubna – 4. října 2024
      </p>
      <p className="text-gray-700 mb-8">
        2 antukové kurty a 2 kurty s umělou trávou pro letní sezónu.
      </p>
      <ImageCarousel images={summerImages} />
    </div>

    {/* Zimní sezóna */}
    <div className="flex flex-col items-center text-center">
      <h3 className="text-2xl font-semibold text-green-600 mb-4">Zimní sezóna</h3>
      <p className="text-gray-700 mb-4">
        9. října 2023 – 5. dubna 2024
      </p>
      <p className="text-gray-700 mb-8">
      2 kurty umělá tráva, 1 kurt s umělým povrchem a 1 antukový kurt.
      </p>
      <ImageCarousel images={winterImages} />
    </div>
  </div>


</section>


        <section className="bg-white rounded-lg shadow-md p-10 border-t-4 border-blue-500 hover:shadow-lg transition duration-300 mt-12">
          <h2 className="text-3xl font-semibold mb-8 text-blue-600 text-center">
            Trenérský team
          </h2>
          <p className="text-gray-700 text-center mb-8">
            Náš tým trenérů je parta nadšených lidí, kteří tenis opravdu milují. Každý z nás má své zkušenosti a rádi je předáme dál – ať už jsi začátečník, nebo pokročilý. 
            Tréninky vedeme s přátelským přístupem, ale zároveň se snažíme, aby sis z každé lekce odnesl/a něco nového a zlepšil/a svou hru. 
            Přijď za námi na kurt a užij si tenis naplno!
          </p>
          <div className="text-center">
            <img
              src="/tenisovyteam.jpg"
              alt="Trenérský team"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </section>

      </main>

      <footer className="bg-gray-800 text-white px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto py-8 flex flex-col md:flex-row justify-between">
    <div className="mb-4 md:mb-0">
      <h3 className="text-2xl font-semibold mb-2">Tenis Čimice</h3>
      <p className="text-gray-400">
        Na Průhonu 812/3, 181 00 Praha 8 <br />
        © 2024 Tenis Čimice
      </p>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">Kontaktujte nás</h3>
      <ul>
        <li className="flex items-center">
          <Mail className="mr-2" />
          <a
            href="mailto:kptennis@volny.cz"
            className="text-gray-400 hover:text-white"
          >
            kptennis@volny.cz
          </a>
        </li>
        <li className="flex items-center">
          <Phone className="mr-2" />
          <a
            href="tel:+420602354978"
            className="text-gray-400 hover:text-white"
          >
            +420 602 354 978
          </a>
        </li>
        <li className="flex items-center">
          <Phone className="mr-2" />
          <a
            href="tel:+420724265022"
            className="text-gray-400 hover:text-white"
          >
            +420 724 265 022
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>
</div>
  );
};

export default Newhomepage;