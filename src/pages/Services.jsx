import {
  Ambulance,
  Bone,
  FirstAidKit,
  Hospital,
  Stethoscope,
  Syringe,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Consultas de Rotina",
    description:
      "Nossas consultas de rotina garantem que seu pet esteja sempre saudável.",
    icon: <Stethoscope size={52} color="#c86932" weight="bold" />,
  },
  {
    title: "Vacinação",
    description:
      "Oferecemos todas as vacinas necessárias para manter seu pet protegido.",
    icon: <Syringe size={52} color="#c86932" weight="bold" />,
  },
  {
    title: "Cirurgias",
    description: "Realizamos cirurgias com a mais alta qualidade e segurança.",
    icon: <Hospital size={52} color="#c86932" weight="bold" />,
  },
  {
    title: "Emergências",
    description: "Atendimento 24 horas para emergências.",
    icon: <Ambulance size={52} color="#c86932" weight="bold" />,
  },
  {
    title: "Exames de Imagem",
    description:
      "Equipamentos modernos para exames de ultrassom e radiografia.",
    icon: <FirstAidKit size={52} color="#c86932" weight="bold" />,
  },
  {
    title: "Pet Shop",
    description: "Produtos e alimentos de alta qualidade para seu pet.",
    icon: <Bone size={52} color="#c86932" weight="bold" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Services = () => {
  return (
    <section className="mt-28 mb-8 mx-2 lg:mx-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium mb-8">Nossos Serviços</h2>
        <div className="mb-12 text-lg text-gray-700">
          <p className="mb-4">
            Na Clínica Pet Care, estamos comprometidos em fornecer uma ampla
            gama de serviços para garantir que seu animal de estimação receba os
            melhores cuidados possíveis. Nossa equipe dedicada e nossas
            instalações modernas nos permitem oferecer atendimento de alta
            qualidade, desde consultas de rotina até emergências.
          </p>
          <p>
            Abaixo, você encontrará uma lista de nossos principais serviços,
            cada um projetado para atender às necessidades específicas do seu
            pet. Estamos aqui para ajudar com qualquer coisa que seu animal de
            estimação possa precisar, garantindo que eles permaneçam saudáveis e
            felizes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg text-center flex items-center justify-center flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="text-6xl">{service.icon}</div>
              <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-700 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
