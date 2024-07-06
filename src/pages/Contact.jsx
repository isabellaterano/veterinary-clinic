import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

const Contact = () => {
  return (
    <section className="mt-28 mb-8 mx-2 lg:mx-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-medium mb-8">Contato</h2>
        <p className="mt-4 text-xl">
          Entre em contato conosco para mais informações.
        </p>
        <div className="flex flex-col lg:flex-row lg:justify-between mt-8">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <p className="text-gray-700 mb-4">
              A Clínica PetCare oferece uma ampla gama de serviços para cuidar
              do seu pet. Nossa equipe dedicada está pronta para fornecer o
              melhor atendimento veterinário, desde consultas de rotina até
              cirurgias avançadas.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Endereço:</strong> Rua Normandia, 12 - Moema
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> contact@petcare.com
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Telefone:</strong> (123) 456-7890
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-gray-500">
                <FacebookLogo size={32} weight="fill" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-500">
                <TwitterLogo size={32} weight="fill" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-500"
              >
                <InstagramLogo size={32} weight="fill" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-500">
                <LinkedinLogo size={32} weight="fill" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-500">
                <WhatsappLogo size={32} weight="fill" />
              </a>
            </div>
          </div>
          <form className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700">Nome</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Mensagem</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-orange-100 py-2 rounded-full hover:bg-orange-700"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
