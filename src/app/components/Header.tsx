import Link from "next/link";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="header-logo">
        <h1>Portfolio</h1>
      </div>

      {/* Navigation */}
      <nav className="header-nav">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
