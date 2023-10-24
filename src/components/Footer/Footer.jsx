import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <section className="bg-head mt-24 md:mt-32">
      <footer className="footer px-5 py-24 md:py-32 container mx-auto">
        <aside>
          <img className="w-16 md:w-24 lg:w-28" src={logo} alt="logo" />
          <p className="text-foot-details mt-5">
            Edwin Dias is a software and web <br />
            technologies engineer, a life coach <br />
            trainer who is also a serial.
          </p>
        </aside>
        <nav>
          <header className="footer-title text-white mb-8">About</header>
          <a className="link link-hover text-foot-anchor">Home</a>
          <a className="link link-hover text-foot-anchor">Service</a>
          <a className="link link-hover text-foot-anchor">Contact</a>
        </nav>
        <nav>
          <header className="footer-title text-white mb-8">Company</header>
          <a className="link link-hover text-foot-anchor">About</a>
          <a className="link link-hover text-foot-anchor">Why Car Doctor</a>
        </nav>
        <nav>
          <header className="footer-title text-white mb-8">Support</header>
          <a className="link link-hover text-foot-anchor">Support Center</a>
          <a className="link link-hover text-foot-anchor">Feedback</a>
          <a className="link link-hover text-foot-anchor">Accessibility</a>
        </nav>
      </footer>
    </section>
  );
};

export default Footer;
