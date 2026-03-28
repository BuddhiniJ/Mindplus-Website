import Image from "next/image";
import {
  Activity,
  CloudCog,
  Database,
  MessageCircleHeart,
  Mic,
  SlidersHorizontal,
  Smartphone,
  TrendingUp,
  Workflow,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

type TeamMember = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
};

const features: Feature[] = [
  {
    title: "Speech-Based Reflective Support Module",
    description:
      "Voice journaling helps students reflect while analyzing speech for stress and emotion patterns. Peer support groups are matched by stress category for meaningful interactions.",
    icon: Mic,
  },
  {
    title: "Self-Monitoring & Behavioral Tracking Module",
    description:
      "Collects daily stress, sleep, and energy inputs for personalization and forecasting. Includes adaptive audio relaxation where tempo and pitch adjust to stress in real time.",
    icon: SlidersHorizontal,
  },
  {
    title: "Hybrid Stress Forecasting Module",
    description:
      "Predicts 3-5 day stress trends using behavioral history, clustering, and time-series ML models such as LSTM and Random Forest for proactive support.",
    icon: TrendingUp,
  },
  {
    title: "Anonymous Counseling Interface",
    description:
      "A real-time NLP-powered text support space where students can seek help anonymously, reducing stigma while preserving privacy and accessibility.",
    icon: MessageCircleHeart,
  },
];

const team: TeamMember[] = [
  {
    name: "Prof. Samantha Thelijjagoda",
    role: "Supervisor",
    image: "/team/member-01.svg",
    imageAlt: "Portrait of Member 01",
  },
  {
    name: "Ms. Chamali Pabasara",
    role: "Co-Supervisor",
    image: "/team/member-02.svg",
    imageAlt: "Portrait of Member 02",
  },
  {
    name: "Ms. Sachini Pathiraja",
    role: "External Supervisor (Clinical Psychologist)​",
    image: "/team/member-03.svg",
    imageAlt: "Portrait of Member 03",
  },
  {
    name: "Raajapaksha R.N.D.K.",
    role: "IT22315632",
    image: "/team/member-04.svg",
    imageAlt: "Portrait of Member 04",
  },
  {
    name: "Jayasooriya J.K.B.A.P.",
    role: "IT22358684",
    image: "/team/member-05.svg",
    imageAlt: "Portrait of Member 05",
  },
  {
    name: "Gunathilaka M.A.S.",
    role: "IT22341136",
    image: "/team/member-06.svg",
    imageAlt: "Portrait of Member 06",
  },
  {
    name: "Hettiarachchi E.I.",
    role: "IT22004390",
    image: "/team/member-06.svg",
    imageAlt: "Portrait of Member 06",
  },
];

function SectionHeader({
  badge,
  title,
  description,
}: {
  badge: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mx-auto mb-12 max-w-3xl text-center animate-fade-in-up">
      <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold tracking-[0.12em] text-blue-700 uppercase">
        {badge}
      </span>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-pretty text-base leading-7 text-slate-600 sm:text-lg">
        {description}
      </p>
    </header>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-6 py-20 sm:px-10 lg:px-16 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-x-clip bg-slate-50 text-slate-800">
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(70%_90%_at_10%_2%,rgba(56,189,248,0.22),transparent_58%),radial-gradient(60%_75%_at_90%_12%,rgba(129,140,248,0.22),transparent_66%),radial-gradient(50%_65%_at_25%_70%,rgba(14,165,233,0.10),transparent_72%),linear-gradient(180deg,rgba(239,246,255,0.70),rgba(248,250,252,0.55))]" />

      <Section id="hero" className="relative pt-28 sm:pt-36">
        <nav className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 animate-fade-in-up items-center justify-between gap-4 rounded-full border border-white/70 bg-white/80 px-4 py-2 shadow-sm backdrop-blur sm:w-[calc(100%-2.5rem)] sm:px-6">
          <div className="flex items-center gap-3 text-sm font-semibold text-slate-900 sm:text-base">
            <Image
              src="/demo/Logo2.png"
              alt="Mind+ logo"
              width={120}
              height={36}
              className="h-8 w-auto"
              priority
            />
            <span className="hidden sm:inline">Mind+</span>
          </div>
          <div className="hidden items-center gap-5 text-sm text-slate-600 md:flex">
            <a href="#problem" className="transition hover:text-blue-700">
              Problem
            </a>
            <a href="#solution" className="transition hover:text-blue-700">
              Solution
            </a>
            <a href="#features" className="transition hover:text-blue-700">
              Features
            </a>
            <a href="#results" className="transition hover:text-blue-700">
              Impact
            </a>
          </div>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="animate-fade-in-up" style={{ animationDelay: "120ms" }}>
            <p className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-semibold tracking-[0.1em] text-blue-700 uppercase shadow-sm">
              University Research Project
            </p>
            <h1 className="text-balance text-4xl leading-tight font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Mind+ <span className="text-blue-700">Predict. Visualize. Manage Academic Stress Before It Happens.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A digital companion that combines behavioral self-monitoring, stress forecasting, and supportive interventions to help university students act before stress becomes overwhelming.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#demo"
                className="inline-flex items-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-800"
              >
                View Demo
              </a>
              <a
                href="#research"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700"
              >
                Read Research
              </a>
            </div>
          </div>

          <div
            className="relative mx-auto w-full max-w-md animate-fade-in-up"
            style={{ animationDelay: "240ms" }}
          >
            <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-sky-300/40 blur-2xl" />
            <div className="absolute -right-8 bottom-8 h-24 w-24 rounded-full bg-indigo-300/40 blur-2xl" />
            <div className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-xl shadow-slate-200 backdrop-blur">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-500">Stress Signal Preview</h3>
                <Activity className="h-5 w-5 text-blue-600" />
              </div>
              <div className="grid grid-cols-7 gap-1.5 rounded-2xl bg-slate-100 p-3">
                {Array.from({ length: 35 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-5 rounded-sm ${
                      i % 9 === 0
                        ? "bg-red-300"
                        : i % 5 === 0
                          ? "bg-amber-300"
                          : i % 2 === 0
                            ? "bg-sky-300"
                            : "bg-emerald-300"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Forecast model identifies rising stress probability in the next 3-5 days.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="problem">
        <SectionHeader
          badge="The Problem"
          title="Students are under pressure, but most tools respond too late"
          description="Academic stress is often invisible until it disrupts performance and wellbeing. Existing wellness apps are mostly reactive, generic, and disconnected from academic realities."
        />
        <div className="grid gap-4 text-sm sm:grid-cols-3 sm:text-base">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm animate-fade-in-up">
            <p className="font-semibold text-slate-900">High Academic Load</p>
            <p className="mt-2 text-slate-600">Deadlines, exams, and workload fluctuations create persistent mental strain.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm animate-fade-in-up" style={{ animationDelay: "120ms" }}>
            <p className="font-semibold text-slate-900">Reactive Interventions</p>
            <p className="mt-2 text-slate-600">Most apps only engage users after stress has already escalated.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm animate-fade-in-up" style={{ animationDelay: "240ms" }}>
            <p className="font-semibold text-slate-900">No Academic Context</p>
            <p className="mt-2 text-slate-600">Generic recommendations miss the patterns unique to student life.</p>
          </div>
        </div>
      </Section>

      <Section id="solution" className="bg-white/45">
        <SectionHeader
          badge="Our Solution"
          title="A proactive system built around student behavior and academic rhythms"
          description="Mind+ fuses self-monitoring, predictive analytics, and visual storytelling to help students understand stress trends and act early."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in-up">
            <h3 className="text-lg font-semibold text-slate-900">Personalized stress fingerprinting</h3>
            <p className="mt-3 text-slate-600">Profiles each student with clustering-based behavioral signatures instead of one-size-fits-all guidance.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in-up" style={{ animationDelay: "120ms" }}>
            <h3 className="text-lg font-semibold text-slate-900">Forecasting 3-5 days ahead</h3>
            <p className="mt-3 text-slate-600">Uses machine learning to estimate stress spikes in advance and trigger proactive support.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in-up" style={{ animationDelay: "220ms" }}>
            <h3 className="text-lg font-semibold text-slate-900">Adaptive heatmap visualization</h3>
            <p className="mt-3 text-slate-600">Transforms daily signals into intuitive calendar views for immediate trend recognition.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in-up" style={{ animationDelay: "320ms" }}>
            <h3 className="text-lg font-semibold text-slate-900">Anonymous counseling pathways</h3>
            <p className="mt-3 text-slate-600">Supports private outreach and intervention for students who need help but avoid public disclosure.</p>
          </div>
        </div>
      </Section>

      <Section id="features">
        <SectionHeader
          badge="Core Components"
          title="Four intelligent modules powering Mind+"
          description="Each module is designed to help students reflect, track behavior, predict stress, and access support before pressure peaks."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${100 + index * 80}ms` }}
              >
                <span className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-700 transition group-hover:scale-105 group-hover:bg-blue-100">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section id="demo" className="bg-white/45">
        <SectionHeader
          badge="Demo Preview"
          title="A mobile-first interface with heatmap-focused insights"
          description="Showcasing an app experience that makes stress trends readable in seconds."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {["Daily Journal", "Stress Heatmap", "Forecast Insight"].map((label, i) => (
            <div
              key={label}
              className="mx-auto w-full max-w-[270px] rounded-[2rem] border border-slate-300 bg-slate-900 p-2 shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="h-[500px] rounded-[1.6rem] bg-gradient-to-b from-sky-100 via-white to-indigo-100 p-4">
                <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-slate-400/50" />
                <p className="text-center text-sm font-semibold text-slate-700">{label}</p>
                <div className="mt-4 space-y-3">
                  <div className="h-20 rounded-2xl bg-white/90 shadow-sm" />
                  <div className="grid grid-cols-7 gap-1.5 rounded-2xl bg-white/90 p-3 shadow-sm">
                    {Array.from({ length: 21 }).map((_, cellIndex) => (
                      <span
                        key={cellIndex}
                        className={`h-4 rounded-sm ${
                          cellIndex % 6 === 0
                            ? "bg-red-300"
                            : cellIndex % 3 === 0
                              ? "bg-amber-300"
                              : "bg-emerald-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="h-28 rounded-2xl bg-white/90 shadow-sm" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="architecture">
        <SectionHeader
          badge="How It Works"
          title="System architecture connecting behavioral data to proactive support"
          description="A cross-platform technical pipeline designed for scalability, real-time synchronization, and practical deployment."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm animate-fade-in-up">
            <Smartphone className="h-6 w-6 text-blue-700" />
            <h3 className="mt-3 font-semibold text-slate-900">Frontend</h3>
            <p className="mt-1 text-sm text-slate-600">React Native mobile app for student interaction and daily data capture.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <Database className="h-6 w-6 text-blue-700" />
            <h3 className="mt-3 font-semibold text-slate-900">Backend</h3>
            <p className="mt-1 text-sm text-slate-600">Firebase for authentication, storage, and real-time synchronization.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <CloudCog className="h-6 w-6 text-blue-700" />
            <h3 className="mt-3 font-semibold text-slate-900">Machine Learning</h3>
            <p className="mt-1 text-sm text-slate-600">Python models with LSTM and Random Forest for stress prediction.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <Workflow className="h-6 w-6 text-blue-700" />
            <h3 className="mt-3 font-semibold text-slate-900">Data APIs</h3>
            <p className="mt-1 text-sm text-slate-600">Google Fit and HealthKit integrations for contextual activity signals.</p>
          </div>
        </div>
      </Section>

      <Section id="results" className="bg-white/45">
        <SectionHeader
          badge="Results & Impact"
          title="Promising outcomes from early evaluation"
          description="Initial findings indicate strong potential for practical use in student stress management."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm animate-fade-in-up">
            <p className="text-3xl font-semibold text-blue-700">~75%</p>
            <p className="mt-2 text-sm text-slate-600">Forecast accuracy for short-term stress spikes.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm animate-fade-in-up" style={{ animationDelay: "120ms" }}>
            <p className="text-3xl font-semibold text-blue-700">Higher Awareness</p>
            <p className="mt-2 text-sm text-slate-600">Students gain clearer visibility into their personal stress trends.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm animate-fade-in-up" style={{ animationDelay: "240ms" }}>
            <p className="text-3xl font-semibold text-blue-700">Early Action</p>
            <p className="mt-2 text-sm text-slate-600">Proactive interventions reduce the likelihood of stress escalation.</p>
          </div>
        </div>
      </Section>

      <Section id="difference">
        <SectionHeader
          badge="Why We Are Different"
          title="Built for academic stress, not general wellness"
          description="Mind+ goes beyond meditation content by combining predictive intelligence with student-specific context."
        />
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in-up">
          <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 text-sm font-semibold text-slate-700">
            <div className="p-4">Capability</div>
            <div className="p-4">Headspace / Calm</div>
            <div className="p-4">Mind+</div>
          </div>
          {[
            ["Personalized for academic patterns", "❌ Generic advice", "✅ Student-specific modeling"],
            ["Predicts future stress", "❌ No prediction", "✅ 3-5 day forecasting"],
            ["Academic focus", "❌ Broad wellness", "✅ Built around coursework stress"],
          ].map((row, idx) => (
            <div key={row[0]} className={`grid grid-cols-3 text-sm ${idx !== 2 ? "border-b border-slate-100" : ""}`}>
              <div className="p-4 text-slate-700">{row[0]}</div>
              <div className="p-4 text-slate-500">{row[1]}</div>
              <div className="p-4 font-medium text-blue-700">{row[2]}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="team" className="bg-white/45">
        <SectionHeader
          badge="Team"
          title="A 4-member undergraduate research team"
          description="Interdisciplinary collaboration across machine learning, backend systems, frontend development, and research methodology."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {team.map((member, idx) => (
            <article
              key={member.name}
              className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm animate-fade-in-up ${
                idx < 3 ? "lg:col-span-4" : "lg:col-span-3"
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="mb-4">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full border-2 border-blue-100 object-cover shadow-sm"
                />
              </div>
              <h3 className="font-semibold text-slate-900">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-blue-700">{member.role}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="research">
        <SectionHeader
          badge="Research"
          title="Publication and academic dissemination"
          description="The project is being prepared for an IEEE-format publication as a contribution to digital mental health and educational technology research."
        />
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm animate-fade-in-up">
          <p className="text-slate-700">
            Paper title: <span className="font-semibold">Mind+ - A Digital Companion for Academic Stress Management</span>
          </p>
          <p className="mt-2 text-sm text-slate-600">Format: IEEE conference manuscript (in preparation).</p>
          <a
            href="#"
            className="mt-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
          >
            Open Research Paper
          </a>
        </div>
      </Section>

    </main>
  );
}
