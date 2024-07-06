import { Link } from "react-router-dom";
import image1 from "../assets/images/about.jpg";
import image2 from "../assets/images/about1.jpg";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const About = () => {
  return (
    <div className="grid grid-cols-1 gap-8 text-lg items-center mt-10 mb-8 mx-2 lg:grid-cols-5 lg:gap-x-24 lg:gap-y-32 lg:mt-28 lg:mx-8">
      <motion.div
        className="col-span-1 lg:col-span-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <h1 className="text-3xl mb-6 font-medium lg:text-4xl lg:mb-10">
          Bem-vindo à Clínica PetCare
        </h1>

        <div className="space-y-6 lg:space-y-8">
          <p>
            Na Clínica PetCare, acreditamos em fornecer o melhor cuidado
            possível para seus queridos animais de estimação. Nossa equipe
            experiente de veterinários e funcionários de apoio está dedicada a
            garantir a saúde e o bem-estar de cada animal que passa por nossas
            portas.
          </p>
          <p>
            Oferecemos uma ampla gama de serviços, desde check-ups de rotina e
            vacinação até procedimentos cirúrgicos avançados e atendimento de
            emergência. Nossas instalações de última geração e nossa abordagem
            compassiva nos tornam a escolha confiável para os donos de animais
            da comunidade.
          </p>
          <p>
            Seja uma consulta de bem-estar, cuidados dentários ou tratamento
            especializado, estamos aqui para ajudar. Nosso objetivo é criar um
            ambiente confortável e sem estresse para os pets e seus donos.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="col-span-1 lg:col-span-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={imageVariants}
      >
        <img
          src={image1}
          alt="Veterinário com um animal de estimação"
          className="object-cover rounded-lg shadow-md w-full"
        />
      </motion.div>

      <motion.div
        className="relative aspect-square col-span-1 lg:col-span-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={imageVariants}
      >
        <img
          src={image2}
          className="object-cover rounded-lg shadow-md w-full h-full"
          alt="Animais felizes com seus donos"
        />
      </motion.div>

      <motion.div
        className="col-span-1 lg:col-span-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <h1 className="text-3xl mb-6 font-medium lg:text-4xl lg:mb-10">
          Servindo a Comunidade Desde 1990
        </h1>

        <div className="space-y-6 lg:space-y-8">
          <p>
            Desde 1990, a Clínica PetCare tem sido um marco na comunidade,
            oferecendo cuidados veterinários excepcionais com um toque pessoal.
            Nossa clínica foi fundada pela Dra. Jane Doe, cuja paixão pelo
            cuidado animal tem inspirado nossa equipe por mais de três décadas.
          </p>
          <p>
            Nos orgulhamos de construir relacionamentos duradouros com nossos
            clientes e seus pets. Nosso compromisso com a educação contínua e os
            últimos avanços médicos garante que seu pet receba os cuidados da
            mais alta qualidade.
          </p>

          <div>
            <Link
              to="/servicos"
              className="inline-block mt-4 bg-orange-500 text-orange-100 rounded-full px-8 py-5 text-lg font-semibold hover:bg-orange-300 transition-all"
            >
              Explore Nossos Serviços
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
