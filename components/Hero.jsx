import Link from "next/link";

function Hero() {
  return (
    <section id="hero">
      <section className="hero" id="home">
        <div className="hero-content">
          <p>Hi There! My Name is Jonaka and I'm a </p>
          <h1> Full-Stack Developer</h1>
          <a
            href="mailto:udunnanna0@gmail.com"
            target="_blank"
            className="hero-btn"
          >
            Hire Me
          </a>
        </div>
      </section>
    </section>
  );
}

export default Hero;
