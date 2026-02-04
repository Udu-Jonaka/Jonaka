export const metadata = {
  title: "About Me - Jonaka Udu",
  description:
    "Learn more about Jonaka Udu (Jhay Codes) and my journey as a Full-Stack Developer.",
};

export default function AboutPage() {
  return (
    <main>
      <section id="head" className="head" data-aos="fade-in">
        <div className="head-content">
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="200">
            About Me
          </h2>
        </div>
      </section>
      <section className="portfolio-section">
        <div className="about">
          <div className="about-text">
            <p>
              I’m Jonaka Udu (Jhay Codes), a growing software engineering
              student and full-stack web developer who loves turning ideas into
              fast, clean, and visually appealing digital experiences. I
              specialize in building modern, responsive websites using both
              frontend and backend technologies, and I’m constantly improving my
              skills to deliver high-quality, production-ready solutions.
              Whether it’s crafting smooth user interfaces or developing
              powerful backend features, I’m passionate about creating real
              value through code and helping businesses bring their ideas to
              life.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
