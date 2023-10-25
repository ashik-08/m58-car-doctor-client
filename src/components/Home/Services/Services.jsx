import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="mt-24 md:mt-32 lg:mt-36">
      <div className="text-center space-y-5">
        <h5 className="text-special text-xl font-bold">Service</h5>
        <h1 className="text-head text-3xl md:text-4xl lg:text-5xl font-bold">
          Our Service Area
        </h1>
        <p className="text-para md:font-medium">
          The majority have suffered alteration in some form, by injected
          humour, or <br />
          randomized words which don&apos;t look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {services?.map((service) => (
          <ServiceCard key={service.service_id} service={service}></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
