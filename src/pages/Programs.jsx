import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import programmeText from '../content/programmeText.cleaned.json';

function Icon({ name, className = 'w-6 h-6' }) {
  switch (name) {
    case 'yi':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l2.7 5.5L20 9l-4 3.9L17.4 20 12 16.8 6.6 20 8 12.9 4 9l5.3-1.5L12 2z" fill="#632DE9" />
        </svg>
      );
    case 'wi':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2a5 5 0 100 10 5 5 0 000-10zm0 12c-4.4 0-8 2.2-8 4.9V22h16v-3.1c0-2.7-3.6-4.9-8-4.9z" fill="#E54E8A" />
        </svg>
      );
    case 'gi':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8 6 4 7 4 11c0 5 8 11 8 11s8-6 8-11c0-4-4-5-8-9z" fill="#2FBF71" />
        </svg>
      );
    default:
      return null;
  }
}

function Section({ id, title, items, defaultOpen = false, icon }) {
  const [open, setOpen] = useState(defaultOpen);
  const containerRef = useRef(null);
  const paragraphs = items.flatMap(p => p.text.split('\n\n').map(s => s.trim()).filter(Boolean));

  // small auto-summary: first sentences of first paragraph
  const summary = (paragraphs[0] || '').split(/\.|\n/).map(s => s.trim()).filter(Boolean).slice(0, 3);

  // smooth open on hash navigation
  useEffect(() => {
    if (location && location.hash === `#${id}`) setOpen(true);
  }, [id]);

  return (
    <section id={id} className="space-y-4" ref={containerRef}>
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <Icon name={icon} className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-neutral-900">{title}</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {summary.map((s, i) => (
                <span key={i} className="text-xs bg-neutral-100 text-neutral-700 px-2 py-1 rounded-full">{s.length > 40 ? s.slice(0, 40) + '…' : s}</span>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => setOpen(v => !v)}
          className="text-sm rounded-lg px-4 py-2 ring-1 ring-neutral-200 bg-white/95 hover:bg-white shadow-sm"
        >
          {open ? 'Masquer' : 'Lire'}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ${open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="mt-4 space-y-4 bg-white ring-1 ring-neutral-100 p-6 rounded-lg shadow-md">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-neutral-700 leading-relaxed">{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Programs() {
  const bySection = {
    yi2: programmeText.slice(0, 3),
    wi2: programmeText.slice(3, 5),
    gi2: programmeText.slice(5, 8),
  };

  return (
    <div className="min-h-dvh flex flex-col bg-white text-neutral-900">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="font-semibold">Positive Impact Initiatives</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link to="/" className="hover:text-[#632DE9]">Accueil</Link>
            <Link to="/programs" className="text-[#632DE9] font-medium">Programmes</Link>
          </nav>
          <Link to="/" className="inline-flex items-center rounded-md bg-[#632DE9] px-4 py-2 text-white text-sm font-medium hover:bg-[#5321d0]">Nous rejoindre</Link>
        </div>
      </header>

      {/* Full-width Programs intro (matches home style) */}
      <section className="w-full bg-gradient-to-b from-[#F4F0FF] to-white">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <h1 className="text-3xl font-extrabold">Nos Programmes d'Impact</h1>
          <p className="mt-3 text-neutral-700">Explorez les plateformes et leurs parcours dédiés à l'inclusion socio-économique, au leadership féminin et à la transition écologique durable.</p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid justify-center">
          {/* Sommaire removed as requested */}

          <div className="w-full max-w-4xl mx-auto space-y-8">
            {/* intro moved to full-width section above */}

            <div id="yi2">
              <Section id="yi2" title={'CAP Jeunes'} items={bySection.yi2} defaultOpen={true} icon="yi" />
            </div>

            <div id="wi2">
              <Section id="wi2" title={'CAP Elles'} items={bySection.wi2} defaultOpen={false} icon="wi" />
            </div>

            <div id="gi2">
              <Section id="gi2" title={'CAP Green'} items={bySection.gi2} defaultOpen={false} icon="gi" />
            </div>

            {/* CTA moved below to span full viewport width */}
          </div>
        </div>
      </main>

      {/* Full-width CTA */}
      <section className="relative isolate w-full overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#632DE9] to-[#4a21b8]" />
        <div className="mx-auto max-w-4xl px-6 py-6 md:py-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Prêt à rejoindre une plateforme ?</h2>
              <p className="mt-3 text-white/90">Contactez-nous pour obtenir votre passeport et démarrer le parcours adapté à votre profil et vos ambitions.</p>
              <div className="mt-4">
                <Link to="/" className="rounded-md border border-white/30 text-white px-4 py-2 text-sm font-medium hover:bg-white/5">Retour à l'accueila</Link>
              </div>
            </div>
            <div className="hidden md:flex justify-end">
              <div className="aspect-video w-56 overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/20 bg-white/5" />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-600">© {new Date().getFullYear()} Positive Impact Initiatives</div>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-blue-600">Nos réseaux</a>
            <a href="#" className="hover:text-blue-600">Nous contacter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

