import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Me - Jonaka Udu",
  description: "Get in touch for collaborations or job opportunities.",
};

export default function ContactPage() {
  return (
    <main>
      <section id="head" className="head" data-aos="fade-in">
        <div className="head-content">
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="200">
            Contact Me
          </h2>
        </div>
      </section>
      <section id="contact" className="portfolio-section">
        <div className="contact-info">
          <div className="info-item contact-card">
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

          <div className="info-item contact-card">
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

          <div className="info-item contact-card">
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
        <ContactForm />
      </section>
    </main>
  );
}
