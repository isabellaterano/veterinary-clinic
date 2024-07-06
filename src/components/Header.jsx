import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { List, WhatsappLogo, X } from "@phosphor-icons/react";

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="group relative w-max"
    aria-label={children}
  >
    <span>{children}</span>
    <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-orange-600 group-hover:w-full"></span>
  </Link>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-zinc-50 shadow-lg py-2 px-6 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Clínica Veterinária logo"
            className="w-14 h-14"
          />
          <span className="font-semibold text-lg">Clínica Veterinária</span>
        </div>
        <nav className="hidden md:flex space-x-4 items-center font-semibold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/servicos">Serviços</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>
        <div className="hidden md:flex items-center ml-4 gap-1">
          <WhatsappLogo size={24} color="#12af15" />
          <span>(11) 1234-5678</span>
        </div>
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-100 py-4 shadow-lg z-40">
          <nav className="flex flex-col items-center space-y-2">
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/sobre" onClick={toggleMenu}>
              Sobre
            </NavLink>
            <NavLink to="/servicos" onClick={toggleMenu}>
              Serviços
            </NavLink>
            <NavLink to="/contato" onClick={toggleMenu}>
              Contato
            </NavLink>
            <div className="flex items-center gap-2 mt-2 font-bold">
              <WhatsappLogo size={24} color="#12af15" />
              <span>(11) 1234-5678</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
