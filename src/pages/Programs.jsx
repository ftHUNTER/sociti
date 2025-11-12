import { Link } from 'react-router-dom';

export default function Programs() {
  return (
    <div className="min-h-dvh flex flex-col bg-white text-neutral-900">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="font-semibold">Positive Impact Initiatives</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link to="/" className="hover:text-[#632DE9]">Accueil</Link>
            <Link to="/programs" className="hover:text-[#632DE9]">Programmes</Link>
          </nav>
          <Link to="/programs" className="inline-flex items-center rounded-md bg-[#632DE9] px-4 py-2 text-white text-sm font-medium hover:bg-[#5321d0]">Nous rejoindre</Link>
        </div>
      </header>

      <section className="relative isolate bg-gradient-to-b from-[#F4F0FF] to-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Nos Programmes d'Impact</h1>
          <p className="mt-4 max-w-3xl mx-auto text-neutral-700">Explorez les plateformes YI², WI² et GI² et leurs parcours dédiés à l'inclusion socio-économique, au leadership féminin et à la transition écologique durable.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 space-y-20">
        {/* YI² */}
        <div id="yi2" className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            <h2 className="text-2xl font-bold">Youth Impact Initiatives (YI²)</h2>
            <p className="text-neutral-700">CAP Jeunes accompagne les jeunes NEETs via un ensemble de passeports modulaires pour construire un avenir professionnel durable.</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700 text-sm">
              <li><strong>Cap Pro</strong> : orientation</li>
              <li><strong>Pass Pro</strong> : construction du projet</li>
              <li><strong>Pass Compétences</strong> : formation</li>
              <li><strong>Pass Entreprendre</strong> : création de projet</li>
            </ul>
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-neutral-200 bg-white shadow-sm grid place-items-center text-sm text-neutral-500">
            Visuel YI² (à intégrer)
          </div>
        </div>

        {/* WI² */}
        <div id="wi2" className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            <h2 className="text-2xl font-bold">Women Impact Initiatives (WI²)</h2>
            <p className="text-neutral-700">CAP Elles favorise le renforcement des capacités, l'autonomisation économique et l'inclusion sociale.</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700 text-sm">
              <li><strong>Passeport Inclusion Elles</strong></li>
              <li><strong>Passeport Leadership Elles</strong></li>
            </ul>
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-neutral-200 bg-white shadow-sm grid place-items-center text-sm text-neutral-500">
            Visuel WI² (à intégrer)
          </div>
        </div>

        {/* GI² */}
        <div id="gi2" className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            <h2 className="text-2xl font-bold">Green Impact Initiatives (GI²)</h2>
            <p className="text-neutral-700">CAP Green sensibilise et crée des emplois durables en appuyant l'économie circulaire et les énergies propres.</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700 text-sm">
              <li><strong>Passeport Vert</strong></li>
            </ul>
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-neutral-200 bg-white shadow-sm grid place-items-center text-sm text-neutral-500">
            Visuel GI² (à intégrer)
          </div>
        </div>
      </section>

      <section className="bg-[#632DE9] text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center space-y-6">
          <h2 className="text-3xl font-bold">Prêt à rejoindre une plateforme ?</h2>
          <p className="max-w-2xl mx-auto text-white/80">Contactez-nous pour obtenir votre passeport et démarrer le parcours adapté à votre profil et vos ambitions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="rounded-md bg-white text-[#632DE9] px-6 py-3 font-semibold hover:bg-white/90">Retour à l'accueil</Link>
            <Link to="/programs#yi2" className="rounded-md bg-white/15 px-6 py-3 font-semibold hover:bg-white/25">Explorer YI²</Link>
            <Link to="/programs#wi2" className="rounded-md bg-white/15 px-6 py-3 font-semibold hover:bg-white/25">Explorer WI²</Link>
            <Link to="/programs#gi2" className="rounded-md bg-white/15 px-6 py-3 font-semibold hover:bg-white/25">Explorer GI²</Link>
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
