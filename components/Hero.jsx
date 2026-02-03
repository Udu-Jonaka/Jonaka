import Link from "next/link";

function Hero() {
  return (
    <section className="hero" data-aos="fade-in">
      <div className="badge" data-aos="fade-down" data-aos-delay="100">
        <div className="status-dot"></div>
        Available for new projects
      </div>

      <h1 data-aos="fade-up" data-aos-delay="200">
        I don't just write code. <br />
        <span>I build digital experiences.</span>
      </h1>

      <p data-aos="fade-up" data-aos-delay="300">
        I'm Jonaka (Jhay), a Full Stack Developer. I turn complex problems into
        clean, scalable web applications using Next.js and Node.
      </p>

      <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
        <Link href="/projects" className="btn-primary">
          View My Work
        </Link>
        <Link
          href="https://github.com/Udu-Jonaka"
          target="_blank"
          className="btn-secondary"
        >
          Github Profile →
        </Link>
      </div>
    </section>
  );
}

export default Hero;
