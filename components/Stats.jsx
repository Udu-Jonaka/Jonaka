"use client";
import { SiNextdotjs, SiBootstrap, SiMongodb, SiVercel } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import CountUp from "react-countup";

function Stats() {
  return (
    <section className="stats">
      <section className="logos-section" data-aos="fade-up">
        <p className="logos-title">POWERED BY MODERN TECHNOLOGIES</p>
        <div className="logos-marquee">
          <div className="logos-track">
            {/* First Set of Icons */}
            <div className="logo-item">
              <SiNextdotjs /> <span>Next.js</span>
            </div>
            <div className="logo-item">
              <FaReact /> <span>React</span>
            </div>
            <div className="logo-item">
              <SiBootstrap /> <span>Bootstrap</span>
            </div>
            <div className="logo-item">
              <FaNodeJs /> <span>Node.js</span>
            </div>
            <div className="logo-item">
              <SiMongodb /> <span>MongoDB</span>
            </div>
            <div className="logo-item">
              <SiVercel /> <span>Vercel</span>
            </div>

            {/* Duplicate Set for Infinite Scroll */}
            <div className="logo-item">
              <SiNextdotjs /> <span>Next.js</span>
            </div>
            <div className="logo-item">
              <FaReact /> <span>React</span>
            </div>
            <div className="logo-item">
              <SiBootstrap /> <span>Bootstrap</span>
            </div>
            <div className="logo-item">
              <FaNodeJs /> <span>Node.js</span>
            </div>
            <div className="logo-item">
              <SiMongodb /> <span>MongoDB</span>
            </div>
            <div className="logo-item">
              <SiVercel /> <span>Vercel</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        className="stats-section"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="stat-item" data-aos="zoom-in" data-aos-delay="100">
          <div className="stat-number">
            <CountUp
              end={3}
              duration={2.5}
              suffix="+"
              enableScrollSpy
              scrollSpyOnce
            />
          </div>
          <div className="stat-label">Years Learning</div>
        </div>
        <div className="stat-item" data-aos="zoom-in" data-aos-delay="200">
          <div className="stat-number">
            <CountUp
              end={10}
              duration={2.5}
              suffix="+"
              enableScrollSpy
              scrollSpyOnce
            />
          </div>
          <div className="stat-label">Projects Built</div>
        </div>
        <div className="stat-item" data-aos="zoom-in" data-aos-delay="300">
          <div className="stat-number">
            <CountUp
              end={100}
              duration={2.5}
              suffix="%"
              enableScrollSpy
              scrollSpyOnce
            />
          </div>
          <div className="stat-label">Commitment</div>
        </div>
        <div className="stat-item" data-aos="zoom-in" data-aos-delay="400">
          <div className="stat-number">
            <CountUp
              end={24}
              duration={2.5}
              suffix="/7"
              enableScrollSpy
              scrollSpyOnce
            />
          </div>
          <div className="stat-label">Coffee Consumption</div>
        </div>
      </section>
    </section>
  );
}

export default Stats;
