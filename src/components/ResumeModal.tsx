import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/sunny';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE } from './fx';

export default function ResumeModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButton.current?.focus({ preventScroll: true });
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex flex-col bg-black/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div className="gutter flex h-16 shrink-0 items-center justify-between gap-3 pt-[env(safe-area-inset-top)]">
        <p id="resume-title" className="truncate font-display text-2xl tracking-wide text-bone">Resume</p>
        <div className="flex items-center gap-2">
          <a href={profile.links.resume} target="_blank" rel="noreferrer" className="rounded-md bg-bone px-4 py-2 text-xs font-bold text-ink">Open PDF ↗</a>
          <button ref={closeButton} type="button" onClick={onClose} aria-label="Close resume panel" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bone">
            ✕
          </button>
        </div>
      </div>
      <motion.div className="gutter flex flex-1 items-center justify-center pb-6" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }}>
        <div className="w-full max-w-2xl border-y border-white/15 py-12 text-center sm:py-16">
          <p className="text-[10px] font-bold tracking-[0.32em] text-[#edbd65]">GOOGLE DRIVE DOCUMENT</p>
          <h2 className="mt-4 font-display text-5xl leading-none text-bone sm:text-7xl">Sunny&apos;s Resume</h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-mist">The resume is hosted on Google Drive. Open the document to view or download it.</p>
          <a href={profile.links.resume} target="_blank" rel="noreferrer" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-bone px-6 text-sm font-bold text-ink transition hover:bg-white">Open Resume PDF ↗</a>
        </div>
      </motion.div>
    </motion.div>
  );
}