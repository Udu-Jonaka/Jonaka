function Offers() {
  return (
    <section id="offers">
      <h2 className="section-title" data-aos="fade-up">
        Why Choose Me
      </h2>
      <div className="offers-container">
        <div className="offers" data-aos="fade-up">
          <div className="offers-text">
            <h1>RELIABLE</h1>
            <p>
              Clean, maintainable code built with best practices for long-term
              stability and easy collaboration.
            </p>
          </div>
          <div className="offers-img">
            <img src="/images/mock.png" alt="" />
          </div>
        </div>
        <div className="offers reverse" data-aos="fade-up" data-aos-delay="100">
          <div className="reverse-text">
            <h1>FAST</h1>
            <p>
              Optimized performance delivering smooth interactions, quick load
              times, and seamless user experiences
            </p>
          </div>
          <div className="offers-img">
            <img src="/images/zone.png" alt="" />
          </div>
        </div>
        <div className="offers" data-aos="fade-up" data-aos-delay="200">
          <div className="offers-text">
            <h1>SCALABLE</h1>
            <p>
              Flexible architectures designed to grow effortlessly with
              products, users, and future requirements.
            </p>
          </div>
          <div className="offers-img">
            <img src="/images/scale.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
