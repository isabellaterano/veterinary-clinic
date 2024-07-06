import { Link } from "react-router-dom";
import HeroImg from "../assets/images/hero.jpg";
import { WhatsappLogo } from "@phosphor-icons/react";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center min-h-screen flex items-center bg-opacity-70 "
      style={{
        backgroundImage: `url(${HeroImg})`,
      }}
    >
      <div className="container mx-auto p-4 md:p-8 lg:p-12">
        <div className="max-w-lg p-6 bg-slate-100 rounded-lg bg-opacity-55">
          <h1 className="text-4xl md:text-6xl font-bold">
            Bem-vindo à Clínica PetCare
          </h1>
          <p className="mt-4 text-xl md:text-2xl">
            Cuidando do seu pet com amor e dedicação.
          </p>
          <Link
            to="/contato"
            className="mt-8 bg-orange-600 text-orange-100 py-2 px-6 rounded-full hover:bg-orange-700 transition duration-300 inline-flex gap-2"
          >
            <WhatsappLogo size={24} color="#12af15" />
            Agende uma Consulta
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
