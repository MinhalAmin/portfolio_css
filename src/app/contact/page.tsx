import Image from "next/image";
import './contact.css'; 
export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">CONTACT ME</h1>
      <div className="contact-links">
        <div className="contact-item">
          <Image className="contact-icon" width="60" height="60" src="/linkedIn.png" alt="LinkedIn" />
          <a className="contact-link" href="http://www.linkedin.com/in/minhal-mohammed-amin-a0a0592b7" target="_blank">
            www.linkedin.com
          </a>
        </div>
        <div className="contact-item">
          <Image className="contact-icon" width="60" height="60" src="/github.png" alt="GitHub" />
          <a className="contact-link" href="https://github.com/MinhalAmin" target="_blank">
            https://github.com
          </a>
        </div>
        <div className="contact-item">
          <Image className="contact-icon" width="60" height="60" src="/gmail.png" alt="Gmail" />
          <a className="contact-link" href="mailto:minhalmohammedamin@gmail.com" target="_blank">
            minhalmohammedamin@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <Image className="contact-icon" width="60" height="60" src="/instagram.png" alt="Instagram" />
          <a className="contact-link" href="https://www.instagram.com/minhal.zariwala_?igsh=c252aGR0Y3VwNjkx" target="_blank">
            www.instagram.com
          </a>
        </div>
      </div>
    </div>
  );
}
