import { motion } from 'framer-motion';
import { profile, projects, skillCategories } from '../data/sunny';
import { EASE, SectionHeading } from './fx';

export default function ResumeSection({ onView }: { onView: () => void }) {
  return (
    <>
      <SectionHeading kicker="The screenplay" title="The Full Story" />
      <div className="gutter grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
        <motion.article
          className="relative min-h-[340px] overflow-hidden rounded-xl border border-white/10 bg-[#121110] p-6 sm:p-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(70%_70%_at_90%_0%,rgba(237,189,101,0.15),transparent_65%)]" />
          <div className="relative">
            <p className="text-[10px] font-bold tracking-[0.34em] text-[#edbd65]">RESUME · ONLINE</p>
            <h3 className="mt-5 font-display text-5xl leading-[0.9] tracking-wide text-bone sm:text-7xl">{profile.fullName}</h3>
            <p className="mt-3 text-sm text-mist">{profile.role} · B.Tech Computer Science and Engineering graduate</p>
            <div className="mt-10 border-t border-white/10 pt-5">
              <p className="text-xs leading-relaxed text-mist">Resume provided as a Google Drive document.</p>
            </div>
          </div>
        </motion.article>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-serif text-3xl italic leading-tight text-bone">A concise view of the work so far.</p>
          <p className="mt-3 text-sm leading-relaxed text-mist">Open the supplied resume document or view the background and projects featured here.</p>
          <a href={profile.links.resume} target="_blank" rel="noreferrer" className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-bone px-6 text-sm font-bold text-ink transition hover:bg-white">
            Open Resume PDF ↗
          </a>
          <button type="button" onClick={onView} className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-white/20 px-6 text-sm font-semibold text-bone transition hover:border-white/50 hover:bg-white/5">
            View resume details
          </button>
          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-white/10 text-center">
            {[
              { value: String(projects.length), label: 'Featured projects' },
              { value: String(skillCategories.length), label: 'Skill groups' },
            ].map((item) => (
              <div key={item.label} className="bg-ink-2 px-2 py-4">
                <dd className="font-display text-3xl leading-none text-bone">{item.value}</dd>
                <dt className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-smoke">{item.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}