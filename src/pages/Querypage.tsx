import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Eye, Database, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Querypage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-sky-50 to-blue-100">
      {/* Decorative background */}
      <BackgroundDecor />

      {/* Header */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg shadow-blue-500/30" />
          <div>
            <p className="text-xs uppercase tracking-widest text-blue-600/80">
              Welcome to
            </p>
            <h1 className="bg-gradient-to-r from-blue-900 via-sky-700 to-blue-600 bg-clip-text text-2xl font-black text-transparent">
              Query Hub
            </h1>
          </div>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <Badge>Beta</Badge>
          <span className="rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-blue-700 shadow-sm ring-1 ring-blue-200 backdrop-blur">
            Blue & White Theme
          </span>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 mx-auto mt-6 flex w-full max-w-6xl flex-col items-center px-6 pb-24">
        <Hero />
        <div className="mt-10 grid w-full gap-6 md:grid-cols-3">
          <ChoiceCard
            title="Visualizer"
            subtitle="Interactive data stories & rich charts"
            icon={<Eye className="h-6 w-6" />}
            route="/Visualizer"
            accentFrom="from-sky-500"
            accentTo="to-blue-600"
          />
          <ChoiceCard
            title="Talk2db"
            subtitle="Agentic insights & smart automation"
            icon={<Sparkles className="h-6 w-6" />}
            route="/Talk2db"
            accentFrom="from-blue-600"
            accentTo="to-sky-500"
          />
          <ChoiceCard
            title="TalkTobigdb"
            subtitle="Query massive datasets with intelligence"
            icon={<Database className="h-6 w-6" />}
            route="/Talk2bigdb"
            accentFrom="from-sky-600"
            accentTo="to-blue-700"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-blue-200/60 bg-white/70 p-8 shadow-xl shadow-blue-200/40 backdrop-blur">
      <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-sky-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-blue-200/50 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <span className="mb-3 rounded-full border border-blue-200 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 shadow-sm">
          Choose your destination
        </span>
        <h2 className="bg-gradient-to-r from-blue-900 via-blue-700 to-sky-600 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
          What would you like to explore?
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-blue-900/70 md:text-base">
          A crisp, elegant launcher for your AI experiences. Pick one to begin—
          everything else will follow.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 flex items-center gap-2 text-xs text-blue-900/60"
        >
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-sky-500" />
          <span>Ready when you are</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* Choice Card Component */
function ChoiceCard({
  title,
  subtitle,
  icon,
  route,
  accentFrom,
  accentTo,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  route: string;
  accentFrom: string;
  accentTo: string;
}) {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(route)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="cursor-pointer group relative block overflow-hidden rounded-3xl border border-blue-200/70 bg-white/80 p-6 shadow-2xl shadow-blue-200/50 backdrop-blur-md"
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-[1.45rem] bg-gradient-to-br ${accentFrom} ${accentTo} opacity-0 blur-[3px] transition-opacity duration-300 group-hover:opacity-30`}
      />
      <div className="pointer-events-none absolute -inset-x-10 -top-20 h-40 rotate-12 bg-gradient-to-r from-white/0 via-white/60 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-60" />
      <div className="relative z-10 flex h-48 flex-col justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accentFrom} ${accentTo} text-white shadow-lg shadow-blue-400/30`}
          >
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-900 md:text-2xl">
              {title}
            </h3>
            <p className="mt-1 text-sm text-blue-900/70">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">
            <span>Enter</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </div>
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="rounded-xl border border-blue-200 bg-white/70 px-4 py-2 text-sm font-semibold text-blue-800 shadow-sm backdrop-blur transition hover:bg-white hover:shadow-md"
          >
            Launch
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-700 shadow-sm">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-500" />
      {children}
    </span>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 mx-auto mt-16 w-full max-w-6xl px-6">
      <div className="rounded-2xl border border-blue-200/60 bg-white/70 p-4 text-center text-xs text-blue-900/60 shadow-sm backdrop-blur">
        Crafted with ❤ in blue & white • © {new Date().getFullYear()}
      </div>
    </footer>
  );
}

function BackgroundDecor() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.blue.200/.35)_1px,transparent_0)] [background-size:22px_22px]"
      />
      <div className="pointer-events-none absolute inset-x-0 top-[-10%] h-[40vh] w-full bg-gradient-to-b from-sky-200/60 to-transparent blur-2xl" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] top-[20%] h-80 w-80 rounded-full bg-sky-300/30 blur-3xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-[35%] h-72 w-72 rounded-full bg-blue-300/30 blur-3xl"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(black_1px,transparent_1px)] [background-size:3px_3px]" />
    </>
  );
}
