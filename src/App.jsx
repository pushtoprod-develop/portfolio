import { useState } from "react";

const NAME = "PushToProd";
const EMAIL = "pushtoprod.develop@gmail.com";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const PROJECTS = [
  { title: "Tidewell", variant: "", heading: "Tidewell: habit tracker",
    text: "Redesigned onboarding and daily check-ins for a mobile habit app. Weekly retention rose 24% after launch.",
    tags: "Product design, React Native" },
  { title: "Ledgerly", variant: "b", heading: "Ledgerly: invoicing for freelancers",
    text: "Built a web app that creates and tracks invoices in under a minute, from first sketch to production.",
    tags: "Full-stack, TypeScript, Postgres" },
  { title: "Fieldnotes", variant: "c", heading: "Fieldnotes: research library",
    text: "Designed the brand and site for a nonprofit that shares open-access local history archives.",
    tags: "Brand identity, Web design" },
];

const SKILLS = [
  "Full-stack web development",
  "React, Node.js, TypeScript",
  "REST APIs and databases",
  "Cloud, CI/CD and DevOps",
  "UI/UX design and design systems",
];

function Project({ title, variant, heading, text, tags }) {
  return (
    <article className="project">
      <div className={`thumb ${variant}`} role="img" aria-label={`Project cover for ${title}`}>
        <span>{title}</span>
      </div>
      <div>
        <h3>{heading}</h3>
        <p>{text}</p>
        <div className="tags">{tags}</div>
      </div>
    </article>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="wrap">
      <header>
        <strong>{NAME}</strong>
        <button
          className="menu-btn"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mainNav"
          onClick={() => setOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>
        <nav aria-label="Main" id="mainNav" className={open ? "open" : ""}>
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
          ))}
        </nav>
      </header>

      <main>
        <div className="hero">
          <h1>I design and build clear, useful software.</h1>
          <p>Product designer and front-end developer based in Pune. I work with small teams to turn rough ideas into products people enjoy using.</p>
          <a className="btn" href="#contact">Start a project</a>
        </div>

        <section id="work">
          <h2>Selected work</h2>
          {PROJECTS.map((p) => (
            <Project key={p.title} {...p} />
          ))}
        </section>

        <section id="about">
          <h2>About</h2>
          <div className="about">
            <div>
              <p>I have 7 years of experience in software development, building web and mobile products for startups and growing teams. I take work from idea to launch: planning, design, coding, testing and deployment.</p>
              <p>I write clean, maintainable code, build reliable APIs, and set up automated testing and CI/CD so releases stay fast and safe. I enjoy solving hard problems, mentoring teammates, and working closely with clients.</p>
            </div>
            <ul className="skills">
              {SKILLS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Contact</h2>
          <p>Available for freelance projects.</p>
          <a className="mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </section>
      </main>

      <footer>
        <span>&copy; {new Date().getFullYear()} {NAME}</span>
      </footer>
    </div>
  );
}
