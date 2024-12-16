import Image from "next/image";
import "./about.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">ABOUT ME</h1>

      {/* Text Section */}
      <div className="about-text-section">
        <p>
          Hello! Allow me to introduce myself: Minhal, a promising young full
          stack web developer who enjoys creating new and exciting web
          applications. At present, I am enrolled at GIAIC Karachi, while I am
          in HSSC Part II Pre Engineering at the Aga Khan College, Kharadar.
        </p>

        <p>
          Equipped with the knowledge of different programming languages and
          frameworks, I will be able to undertake either front-end or back-end
          development. Also, since I have an interest in artificial
          intelligence, I am able to include smart solutions to my projects.
        </p>

        <p>
          One thing that makes me a dependable third party and an outstanding
          option for clients is my ability to comprehend their requirements
          well. I do make it a point to engage in effective communication and
          team work, as it is only seems reasonable to say that we will work
          together in order to get your concepts implemented. My thirst for
          gaining knowledge and the drive to change with technologies enables me
          to provide efficient solutions while keeping me in touch with the
          latest trends.
        </p>
        <br />
        <p className="about-bold-text">
          I am looking forward to working with you on your next project and make
          it a reality!
        </p>
      </div>

      <h1 className="skills-heading">SKILLS</h1>

      {/* Skills Section */}
      <div className="skills-grid">
        <Image
          className="skill-image"
          width="60"
          height="60"
          src="/typescript.png"
          alt="skills"
        />
        <Image
          className="skill-image"
          width="60"
          height="60"
          src="/html1.png"
          alt="skills"
        />
        <Image
          className="skill-image"
          width="60"
          height="60"
          src="/css.png"
          alt="skills"
        />
        <Image
          className="skill-image"
          width="60"
          height="60"
          src="/java-script.png"
          alt="skills"
        />
        <Image
          className="skill-image"
          width="60"
          height="60"
          src="/next.js.png"
          alt="skills"
        />
        <Image
          className="skill-image"
          width="60"
          height="60"
          src="/tailwindcSS.png"
          alt="skills"
        />
        <Image
          className="skill-image"
          width="60"
          height="60"
          src="/react.png"
          alt="skills"
        />
        <Image
          className="skill-image"
          width="60"
          height="60"
          src="/node.js.png"
          alt="skills"
        />
        <Image
          className="skill-image"
          width="60"
          height="60"
          src="/figma.png"
          alt="skills"
        />
      </div>
    </div>
  );
}
