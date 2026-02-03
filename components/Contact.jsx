import { FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title" data-aos="fade-up">
        Contact Me
      </h2>
      <div className="contact-info">
        <div className="info-item" data-aos="fade-up" data-aos-delay="100">
          <FaEnvelope />
          <div>
            <h3>
              <a href="mailto:udunnanna0@gmail.com">Email</a>
            </h3>
            <p>
              <a href="mailto:udunnanna0@gmail.com">udunnanna0@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="info-item" data-aos="fade-up" data-aos-delay="200">
          <FaWhatsapp />
          <div>
            <h3>
              <a href="https://wa.me/2347075878316" target="_blank">
                WhatsApp
              </a>
            </h3>
            <p>
              <a href="https://wa.me/2347075878316" target="_blank">
                Message me
              </a>
            </p>
          </div>
        </div>

        <div className="info-item" data-aos="fade-up" data-aos-delay="300">
          <FaInstagram />
          <div>
            <h3>
              <a href="https://www.instagram.com/jhay.codes/" target="_blank">
                Instagram
              </a>
            </h3>
            <p>
              <a href="https://www.instagram.com/jhay.codes/" target="_blank">
                Connect with Me
              </a>
            </p>
          </div>
        </div>

        <div className="info-item" data-aos="fade-up" data-aos-delay="400">
          <FaXTwitter />
          <div>
            <h3>
              <a href="https://x.com/Jonaka_Udu" target="_blank">
                X
              </a>
            </h3>
            <p>
              <a href="https://x.com/Jonaka_Udu" target="_blank">
                Follow Me
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
