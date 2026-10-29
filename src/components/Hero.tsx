import { useRef } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { profile, projects } from '../data/sunny';
import { useFinePointer } from '../hooks/useMedia';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } } };
const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE } },
};

export default function Hero({ onPlay, onResume }: { onPlay: () => void; onResume: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const fine = useFinePointer();
  const { scrollTo } = useSmoothScroll();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const artY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const artScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const blackout = useTransform(scrollYProgress, [0.35, 1], [0, 1]);

  // pointer parallax (desktop)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 18 });
  const py = useSpring(my, { stiffness: 60, damping: 18 });
  const artRotY = useTransform(px, [-1, 1], [-3, 3]);
  const artRotX = useTransform(py, [-1, 1], [2, -2]);
  const artShiftX = useTransform(px, [-1, 1], [-8, 8]);
  const chipX = useTransform(px, [-1, 1], [18, -18]);
  const chipY = useTransform(py, [-1, 1], [12, -12]);
  const glowX = useTransform(px, [-1, 1], ['-6%', '6%']);

  const floating = [
    { text: 'React · JavaScript', sub: 'Frontend · from brief', pos: 'left-[2%] top-[30%]', depth: 1 },
    { text: 'Python · Django', sub: 'Project technologies', pos: 'right-[0%] top-[18%]', depth: -1 },
    { text: `${projects.length} featured projects`, sub: 'The current collection', pos: 'right-[4%] bottom-[24%]', depth: 0.6 },
  ];

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden"
      onPointerMove={(e) => {
        if (!fine) return;
        mx.set((e.clientX / window.innerWidth) * 2 - 1);
        my.set((e.clientY / window.innerHeight) * 2 - 1);
      }}
    >
      {/* atmosphere */}
      <motion.div aria-hidden className="absolute inset-0" style={{ x: glowX }}>
        <div className="absolute right-[-10%] top-[-10%] h-[90vh] w-[80vw] rounded-full bg-[radial-gradient(closest-side,rgba(229,19,43,0.38),rgba(229,19,43,0.08)_55%,transparent)] blur-2xl lg:right-[-4%] lg:w-[60vw]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[70vh] w-[60vw] rounded-full bg-[radial-gradient(closest-side,rgba(90,20,120,0.25),transparent)] blur-2xl" />
      </motion.div>
      <Particles className="z-[1]" />
      <div aria-hidden className="absolute inset-0 z-[1] overflow-hidden">
        <span className="light-streak left-[40%] top-[22%] w-[50vw]" style={{ animationDelay: '1.2s' }} />
        <span className="light-streak left-[30%] top-[64%] w-[40vw]" style={{ animationDelay: '3.6s' }} />
        <span className="light-streak left-[55%] top-[44%] w-[30vw]" style={{ animationDelay: '5.2s' }} />
      </div>

      {/* typographic artwork */}
      <motion.div
        className="absolute inset-x-0 top-[12svh] z-[2] flex h-[52svh] items-center justify-center sm:h-[64svh] lg:inset-y-0 lg:left-auto lg:right-[2vw] lg:h-full lg:w-[51vw]"
        style={{ y: artY, scale: artScale, opacity: fade }}
      >
        <motion.div
          className="relative flex h-full w-full items-center justify-center overflow-hidden"
          style={{ rotateY: artRotY, rotateX: artRotX, x: artShiftX, transformPerspective: 1200 }}
          initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0 }}
          animate={{ clipPath: 'inset(0 0 0 0)', opacity: 1 }}
          transition={{ duration: 1.6, ease: EASE, delay: 0.1 }}
        >
          <div aria-hidden className="absolute inset-y-[10%] left-[12%] right-[4%] border-y border-white/10 bg-[linear-gradient(115deg,transparent_10%,rgba(255,121,94,0.12)_45%,transparent_75%)]" />
          <div aria-hidden className="absolute inset-y-[10%] left-[12%] right-[4%] opacity-40 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.12)_1px,transparent_1px,transparent_42px)]" />
          <motion.p aria-hidden className="select-none font-display leading-[0.72] text-white/[0.065]" style={{ fontSize: 'clamp(18rem, 42vw, 44rem)' }} animate={{ y: [0, -10, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}>SG</motion.p>
          <div className="absolute bottom-[14%] right-[8%] border-l border-crimson-2/60 pl-4 text-left">
            <p className="font-display text-[clamp(1.7rem,4vw,4rem)] leading-[0.85] tracking-wide text-bone/80">THE<br />BUILDER&apos;S<br />CUT</p>
            <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-mist">Full-stack · Software</p>
          </div>
          {floating.map((f, i) => (
            <FloatChip key={f.text} {...f} index={i} mx={chipX} my={chipY} />
          ))}
        </motion.div>
      </motion.div>

      {/* readability gradients */}
      <div aria-hidden className="absolute inset-x-0 top-[40svh] z-[3] h-[36svh] bg-gradient-to-b from-transparent via-ink/70 to-ink lg:hidden" />
      <div aria-hidden className="absolute inset-0 z-[3] hidden bg-[linear-gradient(90deg,var(--color-ink)_0%,rgba(7,7,10,0.7)_32%,transparent_58%)] lg:block" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 z-[3] h-48 bg-gradient-to-t from-ink to-transparent" />

      {/* copy */}
      <motion.div
        className="gutter relative z-[4] flex min-h-[100svh] flex-col justify-end pb-16 pt-[48svh] sm:pb-20 lg:max-w-[57vw] lg:justify-center lg:pb-0 lg:pt-24"
        style={{ y: textY, opacity: fade }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-3 text-lg">
          <SeriesMark />
        </motion.div>
        <motion.h1 variants={item} className="max-w-full break-words font-display leading-[0.82] tracking-[0.02em] text-bone" style={{ fontSize: 'clamp(3.2rem, 8.6vw, 8.5rem)' }}>
          <span className="shimmer-text">{profile.firstName}</span>
        </motion.h1>
        <motion.p variants={item} className="mt-1 font-sans text-sm font-bold tracking-[0.62em] text-crimson-2 sm:text-base">
          {profile.seriesTag}
        </motion.p>

        <motion.div variants={item} className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-medium text-mist">
          <span className="rounded border border-white/25 px-1.5 py-px text-[10px] font-bold tracking-wider text-bone">B.Tech CSE</span>
          <span>Graduate</span><span className="h-1 w-1 rounded-full bg-smoke" /><span>{projects.length} featured projects</span>
        </motion.div>

        <motion.p variants={item} className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-bone/90 sm:text-xs sm:tracking-[0.34em]">
          {profile.tagline.join(' • ')}
        </motion.p>

        <motion.p variants={item} className="mt-4 max-w-xl text-[15px] leading-relaxed text-bone/80 sm:text-base">
          {profile.intro}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
          <Magnetic>
            <button
              type="button"
              onClick={() => scrollTo('#originals')}
              className="flex min-h-12 items-center gap-3 rounded-md bg-bone px-6 py-3 text-[15px] font-bold text-ink transition hover:bg-white sm:px-8"
            >
              <span className="text-lg">＋</span> View Projects
            </button>
          </Magnetic>
          <Magnetic>
            <button type="button" onClick={onResume} aria-label="Check resume availability" className="glass flex min-h-12 items-center gap-3 rounded-md px-6 py-3 text-[15px] font-semibold text-bone transition hover:bg-white/15 sm:px-8">
              <span className="text-lg">⤓</span> Download Resume
            </button>
          </Magnetic>
          <button
            type="button"
            onClick={() => scrollTo('#contact')}
            className="flex min-h-12 items-center gap-2 rounded-md border border-white/30 px-5 text-sm font-semibold text-bone transition hover:border-bone hover:bg-white/10"
          >
            Contact Me
          </button>
          <button type="button" onClick={onPlay} className="min-h-12 px-2 text-xs font-semibold uppercase tracking-[0.18em] text-mist hover:text-bone">Play intro</button>
        </motion.div>
      </motion.div>

      <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-[5] bg-ink" style={{ opacity: blackout }} />
    </section>
  );
}

type MV = ReturnType<typeof useTransform<number, number>>;

function FloatChip({ text, sub, pos, depth, index, mx, my }: { text: string; sub: string; pos: string; depth: number; index: number; mx: MV; my: MV }) {
  const x = useTransform(mx, (n: number) => n * depth);
  const y = useTransform(my, (n: number) => n * depth);
  return (
    <motion.div
      className={`glass absolute hidden rounded-xl px-4 py-2.5 md:block ${pos}`}
      style={{ x, y }}
      initial={{ opacity: 0, filter: 'blur(6px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.9, delay: 1.2 + index * 0.18, ease: EASE }}
    >
      <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}>
        <p className="text-sm font-semibold text-bone">{text}</p>
        <p className="text-[10px] uppercase tracking-[0.2em] text-mist">{sub}</p>
      </motion.div>
    </motion.div>
  );
}
