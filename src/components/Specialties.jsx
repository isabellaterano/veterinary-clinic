import { Heart, Eye, Bone, Tooth, Pill, Bandaids } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const specialties = [
  {
    title: "Cardiologia",
    description: "Diagnóstico e tratamento de doenças cardíacas em pets.",
    icon: <Heart size={48} color="#c51111" weight="fill" />,
  },
  {
    title: "Dermatologia",
    description: "Tratamento de doenças de pele e alergias.",
    icon: <Bandaids size={48} />,
  },
  {
    title: "Oftalmologia",
    description: "Cuidados e cirurgias para a saúde ocular dos pets.",
    icon: <Eye size={48} color="#221e1b" weight="duotone" />,
  },
  {
    title: "Ortopedia",
    description: "Tratamento de fraturas e doenças ortopédicas.",
    icon: <Bone size={48} color="#0e1010" weight="bold" />,
  },
  {
    title: "Odontologia",
    description: "Cuidados com a saúde bucal dos animais.",
    icon: <Tooth size={48} color="#0e1010" weight="bold" />,
  },
  {
    title: "Oncologia",
    description: "Tratamento de câncer em animais de estimação.",
    icon: <Pill size={48} color="#0e1010" weight="fill" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Specialties = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Nossas Esp
          <span className="underline decoration-orange-500">ecialidades</span>
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-100 p-6 rounded-lg shadow-lg text-center flex justify-center items-center flex-col"
            >
              <div>{specialty.icon}</div>
              <h3 className="text-2xl font-semibold mt-4">{specialty.title}</h3>
              <p className="text-slate-600 mt-2">{specialty.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Specialties;
