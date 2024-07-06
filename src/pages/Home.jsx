import Hero from "../components/Hero";
import Specialties from "../components/Specialties";
import Testimonial from "../components/Testimonial";
import Clients from "../components/Clients";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="mx-2 lg:mx-8">
        <Specialties />
        <Clients />
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
