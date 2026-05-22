import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import heroImage from "@/assets/hero-editorial.jpg";

export const Route = createFileRoute("/alt")({
  component: AltIndex,
  head: () => ({
    meta: [
      { title: "Queens Of Change Foundation — Editorial" },
      {
        name: "description",
        content:
          "An editorial look at Queens Of Change Foundation: empowering students, women, and communities.",
      },
    ],
  }),
});

const initiatives = [
  {
    no: "01",
    title: "Education",
    desc: "Scholarships, libraries, and one-to-one mentorship reaching first-generation learners.",
  },
  {
    no: "02",
    title: "Women Empowerment",
    desc: "Vocational training, leadership circles, and seed funding for women-led enterprise.",
  },
  {
    no: "03",
    title: "Community Support",
    desc: "Health camps, nutrition drives, and disaster relief delivered with local partners.",
  },
];

const stats = [
  { value: "2,500", label: "Volunteers worldwide" },
  { value: "12K+", label: "Students supported" },
  { value: "350", label: "Events conducted" },
];

function AltIndex() {
  // Reveal-on-scroll
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
    <div className="min-h-screen bg-alt-bg text-alt-fg font-alt-sans">
      {/* ===== Top bar ===== */}
      <header className="fixed top-0 z-50 w-full bg-alt-bg/80 backdrop-blur border-b border-alt-line">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <a href="#top" className="font-alt-serif text-2xl tracking-tight">
            Queens<span className="text-alt-gold">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em]">
            {["Mission", "Initiatives", "Impact", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-alt-gold transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#join"
            className="text-xs uppercase tracking-[0.2em] border-b border-alt-gold pb-1 hover:text-alt-gold transition-colors"
          >
            Volunteer →
          </a>
        </nav>
      </header>

      {/* ===== Hero — editorial magazine split ===== */}
      <section id="top" className="pt-28 md:pt-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8 md:gap-12 items-end pb-12">
          <div className="md:col-span-7 reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-alt-gold mb-6">
              Issue N°06 · Established 2018
            </p>
            <h1 className="font-alt-serif text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tight">
              The quiet
              <br />
              <em className="text-alt-gold font-normal">revolution</em>
              <br />
              of belonging.
            </h1>
          </div>
          <div className="md:col-span-5 reveal">
            <p className="text-lg leading-relaxed text-alt-muted max-w-md">
              Queens Of Change Foundation works at the seam of education and equity —
              standing with students, women, and communities who refuse to be edited
              out of their own story.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#join"
                className="px-7 py-3.5 bg-alt-gold text-alt-bg font-medium tracking-wide hover:bg-alt-fg transition-colors"
              >
                Volunteer Now
              </a>
              <a
                href="#mission"
                className="px-7 py-3.5 border border-alt-line hover:border-alt-gold hover:text-alt-gold transition-colors"
              >
                Read the brief
              </a>
            </div>
          </div>
        </div>

        {/* Full-bleed hero image */}
        <div className="relative reveal">
          <img
            src={heroImage}
            alt="A teacher with her students in a sunlit community classroom"
            width={1024}
            height={1280}
            className="w-full h-[60vh] md:h-[80vh] object-cover grayscale-[15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-alt-bg via-transparent to-transparent" />
          <p className="absolute bottom-6 right-6 text-xs uppercase tracking-[0.25em] text-alt-muted">
            — Field notes, Maharashtra
          </p>
        </div>
      </section>

      {/* ===== Mission ===== */}
      <section id="mission" className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 reveal">
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-alt-gold">Mission</p>
          </div>
          <div className="md:col-span-9">
            <p className="font-alt-serif text-3xl md:text-5xl leading-tight">
              We don't <em className="text-alt-gold">save</em> communities. We sit with
              them, listen, and put resources where they're already building. The crown
              has always been theirs.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Initiatives ===== */}
      <section id="initiatives" className="py-24 px-6 border-t border-alt-line">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 reveal">
            <h2 className="font-alt-serif text-4xl md:text-6xl">Our work</h2>
            <p className="text-xs uppercase tracking-[0.3em] text-alt-muted hidden md:block">
              Three pillars · One commitment
            </p>
          </div>

          <div className="divide-y divide-alt-line border-y border-alt-line">
            {initiatives.map((it) => (
              <article
                key={it.no}
                className="reveal group grid md:grid-cols-12 gap-6 py-10 hover:bg-alt-card transition-colors px-2 md:px-6 -mx-2 md:-mx-6 cursor-pointer"
              >
                <div className="md:col-span-1 text-alt-gold font-alt-serif text-2xl">
                  {it.no}
                </div>
                <h3 className="md:col-span-4 font-alt-serif text-3xl md:text-4xl group-hover:text-alt-gold transition-colors">
                  {it.title}
                </h3>
                <p className="md:col-span-6 text-alt-muted leading-relaxed text-lg">
                  {it.desc}
                </p>
                <div className="md:col-span-1 text-right text-alt-gold text-2xl transition-transform group-hover:translate-x-2">
                  →
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section id="impact" className="py-32 px-6 bg-alt-card">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-alt-gold mb-14 reveal">
            Impact, audited 2024
          </p>
          <div className="grid md:grid-cols-3 gap-12 md:gap-6">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="reveal border-t border-alt-line pt-8"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="font-alt-serif text-7xl md:text-8xl tracking-tight">
                  {s.value}
                </div>
                <div className="mt-4 text-sm uppercase tracking-[0.2em] text-alt-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Join ===== */}
      <section id="join" className="py-32 px-6 border-t border-alt-line">
        <div className="max-w-4xl mx-auto text-center reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-alt-gold mb-6">
            Join the foundation
          </p>
          <h2 className="font-alt-serif text-5xl md:text-7xl leading-[1.05]">
            Bring an hour.
            <br />
            <em className="text-alt-gold">Leave a legacy.</em>
          </h2>
          <a
            href="mailto:hello@queensofchange.org"
            className="inline-block mt-12 px-10 py-4 bg-alt-gold text-alt-bg font-medium tracking-wide hover:bg-alt-fg transition-colors"
          >
            Become a volunteer
          </a>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer id="contact" className="border-t border-alt-line py-14 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="font-alt-serif text-2xl">
              Queens<span className="text-alt-gold">.</span>
            </div>
            <p className="mt-4 text-alt-muted max-w-sm leading-relaxed">
              A non-profit foundation building education, equity, and enterprise in
              communities across India since 2018.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-alt-gold mb-4">Contact</p>
            <p className="text-alt-muted">hello@queensofchange.org</p>
            <p className="text-alt-muted">+91 98765 43210</p>
            <p className="text-alt-muted mt-2">Mumbai, IN</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-alt-gold mb-4">Follow</p>
            <ul className="space-y-2">
              {["Instagram", "Twitter / X", "LinkedIn", "YouTube"].map((s) => (
                <li key={s}>
                  <a href="#" className="hover:text-alt-gold transition-colors">
                    {s} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-14 pt-6 border-t border-alt-line flex flex-wrap justify-between text-xs uppercase tracking-[0.2em] text-alt-muted">
          <span>© {new Date().getFullYear()} Queens Of Change Foundation</span>
          <span>Crowned in change.</span>
        </div>
      </footer>
    </div>
  );
}
