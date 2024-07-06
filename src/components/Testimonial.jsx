import Slider from "react-slick";
import image from "../assets/images/user.jpg";
import image2 from "../assets/images/user2.jpg";
import image3 from "../assets/images/user3.jpg";
import { Quotes } from "@phosphor-icons/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const testimonials = [
    {
      image: image,
      text: "A Clínica PetCare ofereceu um serviço excepcional, superando nossas expectativas em todos os aspectos. A atenção aos detalhes e o compromisso com a excelência realmente os destacam. Recomendamos a Clínica PetCare para qualquer necessidade veterinária.",
      name: "Ana Silva",
      work: "Cliente Satisfeita",
    },
    {
      image: image2,
      text: "A Clínica PetCare transformou a saúde do nosso pet com suas soluções inovadoras e atendimento profissional. A expertise e a dedicação da equipe foram evidentes em todo o processo. Trabalhar com a Clínica PetCare foi um divisor de águas para nós.",
      name: "Carlos Ferreira",
      work: "Cliente Satisfeito",
    },
    {
      image: image3,
      text: "Estamos extremamente felizes com os resultados fornecidos pela Clínica PetCare. A criatividade, a expertise e a dedicação da equipe nos ajudaram a alcançar nossos objetivos e elevar a saúde do nosso pet. A Clínica PetCare é um parceiro confiável com quem continuaremos a colaborar no futuro.",
      name: "Mariana Oliveira",
      work: "Cliente Satisfeita",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <section className="flex p-2 md:p-8 my-8 justify-center items-center min-h-screen flex-col bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        Veja o que{" "}
        <span className="underline decoration-orange-500">
          nossos clientes dizem
        </span>
      </h2>
      <div className="w-full max-w-4xl">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-md shadow-lg">
              <div className="pb-10 flex items-start gap-4">
                <Quotes size={92} color="#ea580c" weight="duotone" />
                <h2 className="text-lg md:text-2xl font-bold">{item.text}</h2>
              </div>
              <div className="lg:flex justify-between items-end">
                <div className="flex gap-4 items-center">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      width={110}
                      className="rounded-full border border-orange-600 p-1"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <span>{item.work}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
