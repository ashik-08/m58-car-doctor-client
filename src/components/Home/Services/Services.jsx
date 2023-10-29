import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import Title from "../../Title/Title";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // fetch("/services.json")
    // fetch("/updated_services.json")
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="mt-24 md:mt-32 lg:mt-40 xl:mt-44">
      <div className="text-center space-y-5">
        {/* <h5 className="text-special text-xl font-bold">Service</h5> */}
        <Title>Service</Title>
        <h1 className="text-head text-3xl md:text-4xl lg:text-5xl font-bold">
          Our Service Area
        </h1>
        <p className="text-para md:font-medium">
          The majority have suffered alteration in some form, by injected
          humour, or <br />
          randomized words which don&apos;t look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 lg:mt-16">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
