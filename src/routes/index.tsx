import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-community.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Queens Of Change Foundation — Empowering Lives" },
      {
        name: "description",
        content:
          "Queens Of Change Foundation empowers students, women, and communities through education, mentorship, and opportunity. Join us as a volunteer today.",
      },
      { property: "og:title", content: "Queens Of Change Foundation" },
      {
        property: "og:description",
        content:
          "Empowering students, women, and communities through education and opportunities.",
      },
    ],
  }),
});

// Initiative cards data
const initiatives = [
  {
    icon: "🎓",
    title: "Education",
    desc: "Scholarships, learning resources, and mentorship for underprivileged students across India.",
  },
  {
    icon: "👑",
    title: "Women Empowerment",
    desc: "Skill-building workshops, leadership training, and safe spaces for women to thrive.",
  },
  {
    icon: "🤝",
    title: "Community Support",
    desc: "Health drives, awareness camps, and relief programs serving rural and urban communities.",
  },
];

const stats = [
  { value: "2,500+", label: "Volunteers" },
  { value: "12,000+", label: "Students Helped" },
  { value: "350+", label: "Events Conducted" },
];

function Index() {
  const [dark, setDark] = useState(false);

  // Dark mode toggle — persisted in localStorage
  useEffect(() => {
    const saved = localStorage.getItem("qoc-theme");
    const isDark = saved === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("qoc-theme", next ? "dark" : "light");
  };

  // Scroll-reveal animations using IntersectionObserver
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ===== Navigation ===== */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="text-2xl">👑</span>
            <span className="gradient-text">Queens Of Change</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["About", "Initiatives", "Impact", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-accent transition-smooth flex items-center justify-center text-lg"
            >
              {dark ? "☀️" : "🌙"}
            </button>
            <a
              href="#join"
              className="hidden sm:inline-flex px-5 py-2.5 rounded-full gradient-primary text-primary-foreground text-sm font-semibold shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-smooth"
            >
              Join Us
            </a>
            <a
              href="/alt"
              className="hidden md:inline text-xs text-muted-foreground hover:text-primary underline underline-offset-4"
            >
              View alt design
            </a>
          </div>
        </nav>
      </header>

      {/* ===== Hero ===== */}
      <section
        id="home"
        className="relative gradient-hero pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      >
        {/* Decorative pastel blobs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute top-40 -right-20 w-96 h-96 rounded-full bg-accent/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-card/70 backdrop-blur text-xs font-semibold tracking-wider uppercase text-primary border border-primary/20">
              ✨ NGO • Est. 2018
            </span>
            <h1 className="font-display mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
              Crowning every <span className="gradient-text">dream</span> with opportunity.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Queens Of Change Foundation empowers students, women, and communities
              through education, mentorship, and lasting opportunities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#join"
                className="px-7 py-3.5 rounded-full gradient-primary text-primary-foreground font-semibold shadow-soft hover:shadow-glow hover:-translate-y-1 transition-smooth"
              >
                Volunteer Now →
              </a>
              <a
                href="#about"
                className="px-7 py-3.5 rounded-full bg-card text-foreground font-semibold border border-border hover:border-primary hover:text-primary transition-smooth"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 gradient-primary rounded-3xl blur-2xl opacity-30 animate-float" />
            <img
              src={heroImage}
              alt="Diverse women and students smiling together in a community classroom"
              width={1536}
              height={1024}
              className="relative rounded-3xl shadow-glow w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center reveal">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Our Mission
          </span>
          <h2 className="font-display mt-3 text-4xl md:text-5xl font-bold">
            Building a kinder, <span className="gradient-text">braver</span> tomorrow.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We believe every individual deserves a chance to rise. Through scholarships,
            workshops, and grassroots community programs, we equip students and women
            with the tools, confidence, and network to transform their lives — and their
            neighborhoods. Together, we crown ordinary stories with extraordinary change.
          </p>
        </div>
      </section>

      {/* ===== Initiatives ===== */}
      <section id="initiatives" className="py-24 px-6 gradient-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center reveal">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">
              What We Do
            </span>
            <h2 className="font-display mt-3 text-4xl md:text-5xl font-bold">
              Our Initiatives
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {initiatives.map((it, i) => (
              <div
                key={it.title}
                className="reveal group p-8 rounded-3xl bg-card border border-border shadow-card hover:shadow-glow hover:-translate-y-2 transition-smooth"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-3xl shadow-soft group-hover:scale-110 transition-smooth">
                  {it.icon}
                </div>
                <h3 className="font-display mt-6 text-2xl font-bold">{it.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{it.desc}</p>
                <a href="#join" className="inline-block mt-5 text-primary font-semibold hover:gap-2 transition-smooth">
                  Get involved →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section id="impact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto reveal">
          <div className="rounded-3xl gradient-primary p-10 md:p-16 shadow-glow">
            <h2 className="font-display text-center text-3xl md:text-4xl font-bold text-primary-foreground">
              Impact, by the numbers
            </h2>
            <div className="mt-12 grid sm:grid-cols-3 gap-8 text-center text-primary-foreground">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-5xl md:text-6xl font-bold">{s.value}</div>
                  <div className="mt-2 text-sm uppercase tracking-widest opacity-90">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Join Us CTA ===== */}
      <section id="join" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Be part of the <span className="gradient-text">change</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Whether you have an hour a week or a passion for a cause — there's a place for
            you at Queens Of Change.
          </p>
          <a
            href="mailto:hello@queensofchange.org"
            className="inline-block mt-8 px-10 py-4 rounded-full gradient-primary text-primary-foreground font-semibold text-lg shadow-soft hover:shadow-glow hover:-translate-y-1 transition-smooth"
          >
            Volunteer Now
          </a>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer id="contact" className="border-t border-border bg-card/50 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2 font-display text-xl font-bold">
              <span className="text-2xl">👑</span>
              <span className="gradient-text">Queens Of Change</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              A non-profit foundation crowning every dream with opportunity since 2018.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-sm text-muted-foreground">hello@queensofchange.org</p>
            <p className="text-sm text-muted-foreground">+91 98765 43210</p>
            <p className="text-sm text-muted-foreground mt-2">Mumbai, India</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { name: "Instagram", icon: "📷" },
                { name: "Twitter", icon: "🐦" },
                { name: "LinkedIn", icon: "💼" },
                { name: "Facebook", icon: "📘" },
              ].map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="w-10 h-10 rounded-full bg-secondary hover:gradient-primary hover:text-primary-foreground flex items-center justify-center transition-smooth hover:-translate-y-1"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Queens Of Change Foundation. Made with ♥ for the
          changemakers.
        </div>
      </footer>
    </div>
  );
}
