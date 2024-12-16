import Image from "next/image";
import "./services.css"; // Import the custom CSS

export default function Services() {
  return (
    <div className="services-container">
      {/* Web Development */}
      <div className="service-item">
        <Image className="service-img" width="150" height="150" src="/webdev.png" alt="services" />
        <h1 className="service-title">Web Development</h1>
        <p className="service-description">
          I provide responsive, aesthetically appealing web development services to make sure that your websites are looking good and working right on every device. Dedicated to the vision of every client, I ensure that the quality, accessibility, and scalability of the solution create an impact. Committed to collaboration, reliability, and attention to detail, I look forward to bringing your ideas to life.
        </p>
      </div>

      {/* UI/UX Design */}
      <div className="service-item">
        <Image className="service-img" width="150" height="150" src="/ui.png" alt="services" />
        <h2 className="service-title">UI/UX Design</h2>
        <p className="service-description">
          I provide intuitive, visually rich UI/UX designs in accordance with the requirements of the clients so as to create better user experience. Creativity in terms of the behavior of a user and coming up with beautiful designs that work all come together for me, which is as it should be. Quality coupled with effective communication makes me a prime candidate for impact-based, user-centric design.
        </p>
      </div>

      {/* SEO Optimization */}
      <div className="service-item">
        <Image className="service-img" width="150" height="150" src="/seo.png" alt="services" />
        <h3 className="service-title">SEO Optimization</h3>
        <p className="service-description">
          Effective SEO optimization to increase visibility, drive traffic, and improve search rankings. I tailor my strategies, data-driven methods, and results to become a reliable choice for impactful SEO solutions that will help clients reach their target audience.
        </p>
      </div>
    </div>
  );
}
