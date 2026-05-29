import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import heroPortrait from "@/assets/hero-portrait.png";
import javascriptLogo from "@/assets/javascript-logo.svg";
import typescriptLogo from "@/assets/typescript-logo.svg";
import pythonLogo from "@/assets/python-logo.svg";
import javaLogo from "@/assets/java-logo.svg";
import phpLogo from "@/assets/php-logo.svg";
import reactLogo from "@/assets/react-logo.svg";
import nextjsLogo from "@/assets/next-js-logo.svg";
import tailwindLogo from "@/assets/tailwind-logo.svg";
import nodejsLogo from "@/assets/node-js-logo.svg";
import nestjsLogo from "@/assets/nestjs-logo.svg";
import expressLogo from "@/assets/express-logo.svg";
import postgresqlLogo from "@/assets/postgresql-logo.svg";
import mongodbLogo from "@/assets/mongodb-logo.svg";
import dockerLogo from "@/assets/docker-logo.svg";
import awsLogo from "@/assets/aws-logo.svg";
import gitLogo from "@/assets/git-logo.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sheraz Dilbar — Computer Scientist & Software Engineer" },
      { name: "description", content: "Portfolio of Sheraz Dilbar — Computer Scientist building reliable, scalable software systems across backend, web, and AI." },
      { property: "og:title", content: "Sheraz Dilbar — Computer Scientist" },
      { property: "og:description", content: "Building reliable, scalable software systems. Backend, web, AI." },
    ],
  }),
  component: Index,
});

const projects = [
  {
    no: "01",
    title: "Swift — AI Payment Gateway",
    kind: "Hackathon · AI Agents Olympics 2026",
    stack: ["PHP", "Laravel", "React", "OpenAI", "PostgreSQL", "REST APIs"],
    desc: "Next-generation global payment gateway for enterprises with distributed teams. Embeds accounting directly into the payment infrastructure with an AI-driven financial layer that understands, decides, and executes bookkeeping autonomously. Built end-to-end in 7 days with a 4-person team at lablab.ai.",
  },
  {
    no: "02",
    title: "Ozar.hu Service Platform",
    kind: "Full-Stack Service Marketplace",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "JWT", "Socket.io"],
    desc: "Developed a service marketplace platform for connecting customers with skilled service providers, featuring provider search, appointment booking, real-time chat, reviews, service management, availability calendars, notifications, and location-based filtering.",
  },
  {
    no: "03",
    title: "NutriFit — Health & Fitness Tracking",
    kind: "Full-Stack Web Application",
    stack: ["Next.js", "React", "TypeScript", "Prisma", "SQLite", "REST"],
    desc: "Built a full-stack health and fitness tracking application with personalized diet/workout plan generation, BMI and calorie calculations, meal/workout logging, goal tracking, water intake monitoring, reminders, recipe suggestions, authentication, and responsive UI.",
  },
  {
    no: "04",
    title: "Safari Manager — 2D Simulation Game",
    kind: "Python Game Development",
    stack: ["Python", "Pygame", "OOP"],
    desc: "Developed a fully functional 2D safari park management simulation game with dynamic time control, animal behavior, ecosystem management, tourism revenue, difficulty levels, minimap navigation, procedural map generation, and save/load persistence.",
  },
];

const skills = [
  { name: "JavaScript", category: "language", logo: javascriptLogo },
  { name: "TypeScript", category: "language", logo: typescriptLogo },
  { name: "Python", category: "language", logo: pythonLogo },
  { name: "Java", category: "language", logo: javaLogo },
  { name: "PHP", category: "language", logo: phpLogo },
  { name: "React", category: "frontend", logo: reactLogo },
  { name: "Next.js", category: "frontend", logo: nextjsLogo },
  { name: "Tailwind", category: "frontend", logo: tailwindLogo },
  { name: "Node.js", category: "backend", logo: nodejsLogo },
  { name: "NestJS", category: "backend", logo: nestjsLogo },
  { name: "Express", category: "backend", logo: expressLogo },
  { name: "PostgreSQL", category: "database", logo: postgresqlLogo },
  { name: "MongoDB", category: "database", logo: mongodbLogo },
  { name: "Docker", category: "devops", logo: dockerLogo },
  { name: "AWS", category: "devops", logo: awsLogo },
  { name: "Git", category: "devops", logo: gitLogo },
];

function Index() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground w-full overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40 will-change-transform">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-xl tracking-tight">
            <span className="text-gradient-gold">SD.</span>
          </a>
          <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <a href="#work" className="hover:text-primary transition-colors">Work</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#toolkit" className="hover:text-primary transition-colors">Toolkit</a>
            <a href="#education" className="hover:text-primary transition-colors">Education</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <a
            href="mailto:sherazdilbardev@gmail.com"
            className="text-xs uppercase tracking-[0.2em] px-4 py-2 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Hire me
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center pt-20 pb-8 md:pt-24 md:pb-12 noise">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
            style={{ background: "var(--gradient-gold)" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl bg-primary" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          <div className="lg:col-span-7 animate-float-up">
            <div className="flex items-center gap-3 mb-6 md:mb-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="w-8 h-px bg-primary animate-shimmer" />
              Available for opportunities
            </div>
            <h1 className="font-display text-[clamp(2.5rem,8vw,8rem)] leading-[0.95] tracking-tight">
              Sheraz
              <br />
              <span className="italic text-gradient-gold">Dilbar</span>
            </h1>
            <p className="mt-6 md:mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Computer Scientist with <span className="text-foreground">3+ years</span> shipping reliable, scalable, production-ready software — across backend services, web applications, cloud, and AI.
            </p>
            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4 md:gap-6">
              <a href="#work"
                className="group inline-flex items-center gap-3 px-6 md:px-7 py-3 md:py-4 bg-primary text-primary-foreground hover:shadow-[var(--shadow-gold)] transition-all text-sm uppercase tracking-[0.2em]">
                View Work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#contact" className="text-sm uppercase tracking-[0.2em] border-b border-foreground/30 pb-1 hover:border-primary hover:text-primary transition-colors">
                Get in touch
              </a>
            </div>

            <div className="mt-12 md:mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-md">
              <div>
                <div className="font-display text-3xl md:text-4xl text-gradient-gold">3+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Years</div>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl text-gradient-gold">15+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Projects</div>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl text-gradient-gold">4</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Languages</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative aspect-[4/5] overflow-hidden border border-primary/20"
              style={{ boxShadow: "var(--shadow-elegant)" }}>
              <img
                src={heroPortrait}
                alt="Sheraz Dilbar"
                width={1024}
                height={1280}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border py-4 md:py-6 overflow-hidden">
        <div className="flex items-center gap-8 md:gap-12 whitespace-nowrap font-display text-2xl md:text-3xl lg:text-5xl italic animate-marquee" style={{ paddingRight: '2rem' }}>
          {[..."Backend · Web · AI · Cloud · Automation · Databases · Backend · Web · AI · Cloud · Automation · Databases · Backend · Web · AI · Cloud · Automation · Databases · Backend · Web · AI · Cloud · Automation · Databases · ".split("·")].map((w, i) => (
            <span key={i} className={i % 2 === 0 ? "text-foreground" : "text-gradient-gold"}>{w.trim()}</span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h2 className="font-display text-5xl md:text-6xl leading-none">About</h2>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <p className="font-display text-3xl md:text-4xl leading-tight">
              I build software that's <span className="italic text-gradient-gold">reliable, scalable, and production-ready</span> — from the database up to the interface.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Experienced across backend services, web applications, databases, cloud deployment, automation workflows, and AI-driven solutions. Skilled in JavaScript, TypeScript, Node.js, Python, Java, PostgreSQL, Docker, and modern development practices, with a strong focus on clean architecture, problem-solving, and end-to-end software delivery.
            </p>
          </div>
        </div>
      </section>

      {/* TOOLKIT - CATEGORIZED */}
      <section id="toolkit" className="py-32 bg-card/40 border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
            style={{ background: "var(--gradient-gold)" }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-7xl leading-none">Toolkit</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Languages */}
            <div>
              <h3 className="text-lg font-medium text-primary mb-6 pb-3 border-b border-border text-center">
                Languages
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills.filter(s => s.category === 'language').map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-3 px-4 py-3 bg-background border border-border hover:border-primary/50 transition-all cursor-pointer"
                  >
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
                    />
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend Development */}
            <div>
              <h3 className="text-lg font-medium text-primary mb-6 pb-3 border-b border-border text-center">
                Frontend Development
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills.filter(s => s.category === 'frontend').map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-3 px-4 py-3 bg-background border border-border hover:border-primary/50 transition-all cursor-pointer"
                  >
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
                    />
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend & Databases */}
            <div>
              <h3 className="text-lg font-medium text-primary mb-6 pb-3 border-b border-border text-center">
                Backend & Databases
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills.filter(s => s.category === 'backend' || s.category === 'database').map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-3 px-4 py-3 bg-background border border-border hover:border-primary/50 transition-all cursor-pointer"
                  >
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
                    />
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div>
              <h3 className="text-lg font-medium text-primary mb-6 pb-3 border-b border-border text-center">
                Cloud & DevOps
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills.filter(s => s.category === 'devops').map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-3 px-4 py-3 bg-background border border-border hover:border-primary/50 transition-all cursor-pointer"
                  >
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
                    />
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-32 bg-card/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-20">
            <div>
              <h2 className="font-display text-5xl md:text-7xl leading-none">Projects</h2>
            </div>
            <div className="hidden md:block text-sm text-muted-foreground italic">A glance at recent builds.</div>
          </div>

          <div className="space-y-px bg-border">
            {projects.map((p) => (
              <article key={p.no} className="group bg-background hover:bg-card transition-colors p-8 md:p-12 grid md:grid-cols-12 gap-6 items-start cursor-pointer">
                <div className="md:col-span-1 font-display text-3xl text-primary">{p.no}</div>
                <div className="md:col-span-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{p.kind}</div>
                  <h3 className="font-display text-3xl md:text-4xl group-hover:text-gradient-gold transition-all">
                    {p.title}
                  </h3>
                </div>
                <p className="md:col-span-5 text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="md:col-span-2 flex flex-wrap gap-1.5 justify-start md:justify-end">
                  {p.stack.slice(0, 4).map((s) => (
                    <span key={s} className="text-[10px] uppercase tracking-wider px-2 py-1 border border-border text-muted-foreground">{s}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-display text-5xl md:text-6xl leading-none">Education</h2>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <TimelineItem
              when="02/2023 — 05/2026"
              role="Bachelor of Science (BSc) — Computer Science"
              where="Eötvös Loránd University · Budapest, Hungary"
              note="Foundations in algorithms, systems, databases, and software engineering."
            />
          </div>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section id="experience" className="py-32 bg-card/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-display text-5xl md:text-6xl leading-none">Professional Experience</h2>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <TimelineItem
              when="02/2026 — 05/2026"
              role="Research Assistant — Explainable AI (XAI)"
              where="ELTE Faculty of Informatics"
              note="Developing digital signal processing pipelines in Python for heart rate estimation from ECG signals. Implementing XGBoost and Random Forest models; interpreting results using SHAP and LIME to ensure transparency in healthcare diagnostics."
            />
            <TimelineItem
              when="12/2025 — 03/2026"
              role="Founder — Ozar.hu Service Platform"
              where="Full-Stack Service Marketplace"
              note="Deployed production environment on DigitalOcean cloud platform with PostgreSQL database. Built scalable NestJS backend with RESTful APIs, real-time WebSocket communication, JWT authentication."
            />
            <TimelineItem
              when="12/2023 — 07/2024"
              role="Full Stack Web Developer"
              where="NeerY Solutions · Restaurant Management Platform"
              note="Developed AI-powered restaurant management platform using React, Tailwind CSS, and Node.js with features for reservations, digital menus, and customer engagement."
            />
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-display text-5xl md:text-6xl leading-none">Certifications</h2>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <TimelineItem
              when="05/2026"
              role="AI Agent Olympics Hackathon Certificate"
              where="lablab.ai"
              note="Hackathon certificate for building Swift — AI Payment Gateway."
            />
            <TimelineItem
              when="07/2024"
              role="Introduction to Tools and Methods of AI"
              where="ELTE Summer University"
            />
            <TimelineItem
              when="10/2018"
              role="Web Development with PHP"
              where="Aptech Computer Education"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 relative noise border-t border-border">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-3xl"
            style={{ background: "var(--gradient-gold)" }} />
        </div>
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-6xl md:text-9xl leading-none">
            Let's <span className="italic text-gradient-gold">build</span>
            <br />
            something.
          </h2>
          <a
            href="mailto:sherazdilbardev@gmail.com"
            className="inline-block mt-12 font-display text-2xl md:text-4xl italic border-b border-primary/40 hover:border-primary pb-2 transition-colors"
          >
            sherazdilbardev@gmail.com
          </a>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <a href="https://linkedin.com/in/sheraz-dilbar-dev/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors uppercase tracking-[0.2em] text-xs">LinkedIn</a>
            <span className="w-1 h-1 rounded-full bg-border" />
            <a href="https://github.com/sherazdilbar" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors uppercase tracking-[0.2em] text-xs">GitHub</a>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="uppercase tracking-[0.2em] text-xs">+36 70 568 1248</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="uppercase tracking-[0.2em] text-xs">Budapest, HU</span>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <a 
          href="#top" 
          className="hidden md:flex fixed bottom-8 right-8 z-50 w-12 h-12 items-center justify-center bg-primary text-primary-foreground rounded-full shadow-[var(--shadow-gold)] hover:scale-110 transition-all animate-float-up will-change-transform"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </a>
      )}

      <footer className="py-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <div>© 2026 Sheraz Dilbar</div>
          <a 
            href="https://www.linkedin.com/in/sheraz-dilbar-dev/" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

function TimelineItem({ when, role, where, note }: { when: string; role: string; where: string; note?: string }) {
  return (
    <div className="grid grid-cols-12 gap-6 group pb-12 border-b border-border last:border-0">
      <div className="col-span-12 md:col-span-3 text-xs uppercase tracking-[0.2em] text-primary pt-1">{when}</div>
      <div className="col-span-12 md:col-span-9">
        <h3 className="font-display text-2xl md:text-3xl leading-tight group-hover:text-gradient-gold transition-all">{role}</h3>
        <div className="text-sm text-muted-foreground mt-1">{where}</div>
        {note && <p className="mt-3 text-muted-foreground leading-relaxed">{note}</p>}
      </div>
    </div>
  );
}
