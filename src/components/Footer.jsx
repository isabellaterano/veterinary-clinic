import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="border-t-2 border-orange-600 text-center py-6">
      <div className="container mx-auto">
        <p className="mb-4">
          &copy; 2024 Clínica PetCare. Todos os direitos reservados.
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-300">
            <FacebookLogo size={32} weight="fill" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-300">
            <TwitterLogo size={32} weight="fill" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-300">
            <InstagramLogo size={32} weight="fill" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
            <LinkedinLogo size={32} weight="fill" />
          </a>
        </div>
        <p className="mb-1">Clínica PetCare</p>
        <p className="mb-1">Rua Normandia, 12 - Moema</p>
        <p>Email: contact@petcare.com | Phone: (11) 1234-5678</p>
      </div>
    </footer>
  );
};

export default Footer;
