import heroLogo from './assets/WhatsApp Image 2025-10-11 at 7.13.49 PM.jpeg'
import gallery1 from './assets/WhatsApp Image 2025-10-11 at 7.13.50 PM.jpeg'
import gallery2 from './assets/WhatsApp Image 2025-10-11 at 7.13.52 PM.jpeg'
import gallery3 from './assets/WhatsApp Image 2025-10-11 at 7.13.52 PM (1).jpeg'
import { Lightbulb, Briefcase, Compass, FileText } from "lucide-react";


export default function App() {

    const steps = [
      {
        icon: <Lightbulb className="w-6 h-6 text-indigo-600 z-10" />,
        title: "Diagnostic des Compétences",
        text: "Évaluation complète de vos aptitudes, talents et potentiels à travers des outils d'assessment innovants qui révèlent vos forces cachées et identifient les domaines de développement prioritaires.",
      },
      {
        icon: <Briefcase className="w-6 h-6 text-indigo-600 z-10" />,
        title: "Découverte des Secteurs et Métiers",
        text: "Exploration approfondie des opportunités professionnelles dans différents secteurs d'activité, avec une analyse détaillée des tendances du marché et des compétences recherchées par les employeurs.",
      },
      {
        icon: <Compass className="w-6 h-6 text-indigo-600 z-10 " />,
        title: "Construction du Projet Professionnel",
        text: "Élaboration d'un plan de carrière personnalisé et réaliste, aligné sur vos aspirations et les réalités du marché, avec des objectifs clairs et des étapes concrètes à suivre.",
      },
      {
        icon: <FileText className="w-6 h-6 text-indigo-600 z-10" />,
        title: "CV et Accès aux Opportunités",
        text: "Création d'un CV professionnel optimisé et accès privilégié à notre réseau d'opportunités d'insertion professionnelle, stages et emplois dans votre domaine de prédilection.",
      },
    ];
  
  return (
    <div className="min-h-dvh flex flex-col bg-white text-neutral-900">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="font-semibold">Positive Impact Initiatives</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#mission" className="hover:text-[#632DE9]">Mission</a>
            <a href="#domains" className="hover:text-[#632DE9]">Domaines</a>
            <a href="#values" className="hover:text-[#632DE9]">Valeurs</a>
            <a href="#young" className="hover:text-[#632DE9]">Jeunes</a>
            <a href="#training" className="hover:text-[#632DE9]">Formations</a>
            <a href="#women" className="hover:text-[#632DE9]">Femmes</a>
            <a href="#contact" className="hover:text-[#632DE9]">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-md bg-[#632DE9] px-4 py-2 text-white text-sm font-medium hover:bg-[#5321d0]">Nous rejoindre</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate bg-gradient-to-b from-[#F4F0FF] to-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(99,45,233,0.12),transparent_50%)]" />
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-28 grid md:grid-cols-2 gap-12 items-center">
      <div>
            <p className="text-sm uppercase tracking-wide text-[#632DE9] font-semibold">Positive Impact Initiatives</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
              La plateforme d'impact nouvelle génération
            </h1>
            <p className="mt-4 text-neutral-600">
              « Parce que nous croyons que chacun peut devenir un catalyseur de changement, et que l'action concrète est la clé d'effets significatifs, durables et mesurables, nous construisons, avec vous, un monde meilleur. »
            </p>
            <div className="mt-10 flex gap-3">
              <a href="#programs" className="rounded-md bg-[#632DE9] px-6 py-3.5 text-white font-semibold hover:bg-[#5321d0]">Découvrir nos initiatives</a>
            </div>
          </div>
          <div className="w-full">
            <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-[#BFA9FF]/60 bg-white">
              <img src={heroLogo} alt="PI² - Empowering change. Building impact." className="h-full w-full object-contain bg-white" />
            </div>
          </div>
      </div>
      </section>

      {/* Programs/Initiatives Gallery - removed as requested */}

      {/* Mission */}
      <section id="mission" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Notre Mission : Transformer la Recherche en Action</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-neutral-700">
            <p>
              Face au constat que la recherche et les études d'impact restent trop rarement traduites en actions concrètes, Positive Impact Initiatives a été créée pour rapprocher la théorie du terrain et agir ainsi dans la durée pour impacter positivement notre société.
            </p>
            <p>
              Nos champs d'actions s'inspirent de la vision royale, des recommandations du Nouveau Modèle de Développement et des Objectifs de Développement Durable. Cette approche intégrée nous permet de créer des solutions durables et mesurables qui répondent aux défis contemporains de notre époque.
            </p>
            <p>
              Notre plateforme révolutionnaire connecte les jeunes, les femmes et les acteurs du changement avec des opportunités concrètes de développement personnel et professionnel, créant ainsi un écosystème d'impact positif et durable.
            </p>
          </div>
          <div className="w-full">
            <div className="aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-neutral-200 bg-white shadow-sm">
              <img src={heroLogo} alt="Positive Impact Initiatives" className="h-full w-full object-contain bg-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Domains */}
      <section id="domains" className="bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h3 className="text-2xl md:text-3xl font-bold">Nos Domaines d'Action Prioritaires</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Card */}
            <div className="group rounded-2xl bg-[#F4F0FF] ring-1 ring-[#BFA9FF]/60 p-6 transition-shadow hover:shadow-md">
              <div className="flex items-start gap-3">
                <div className="shrink-0 h-10 w-10 rounded-full bg-white grid place-items-center ring-1 ring-[#BFA9FF]/70 text-[#632DE9]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M15.5 8.5 13 13l-4.5 2.5L11 11z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Inclusion Socio-Économique des Jeunes NEETs</h4>
                  <p className="mt-2 text-neutral-700 text-sm">Favoriser l'inclusion socio-économique et l'amélioration de l'employabilité des jeunes qui ne sont ni en emploi, ni en éducation, ni en formation. Nous développons des parcours personnalisés qui transforment les potentiels en opportunités concrètes.</p>
                </div>
              </div>
              
            </div>

            {/* Card */}
            <div className="group rounded-2xl bg-[#F4F0FF] ring-1 ring-[#BFA9FF]/60 p-6 transition-shadow hover:shadow-md">
              <div className="flex items-start gap-3">
                <div className="shrink-0 h-10 w-10 rounded-full bg-white grid place-items-center ring-1 ring-[#BFA9FF]/70 text-[#632DE9]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                    <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
                    <path d="M4 20a8 8 0 0 1 16 0"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Accompagnement des Femmes Vulnérables</h4>
                  <p className="mt-2 text-neutral-700 text-sm">Renforcer les capacités des femmes en situation de vulnérabilité et promouvoir l'empowerment féminin à travers des programmes d'accompagnement adaptés qui valorisent leurs compétences et créent des opportunités d'autonomisation.</p>
                </div>
              </div>
              
            </div>

            {/* Card */}
            <div className="group rounded-2xl bg-[#F4F0FF] ring-1 ring-[#BFA9FF]/60 p-6 transition-shadow hover:shadow-md">
              <div className="flex items-start gap-3">
                <div className="shrink-0 h-10 w-10 rounded-full bg-white grid place-items-center ring-1 ring-[#BFA9FF]/70 text-[#632DE9]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                    <path d="M12 20c0-4.418 3.582-8 8-8-4.418 0-8-3.582-8-8 0 4.418-3.582 8-8 8 4.418 0 8 3.582 8 8Z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Durabilité et Transition Verte</h4>
                  <p className="mt-2 text-neutral-700 text-sm">Promouvoir la durabilité, l'économie circulaire et la transition verte en développant des initiatives innovantes qui allient impact environnemental positif et création de valeur économique durable pour les communautés.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="mx-auto max-w-6xl px-4 py-20">
        <h3 className="text-3xl font-extrabold">Nos Valeurs Fondamentales</h3>
        <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {/* Engagement */}
          <div className="flex items-start gap-4">
            <div className="shrink-0 h-9 w-9 rounded-lg bg-[#F4F0FF] grid place-items-center ring-1 ring-[#BFA9FF]/60 text-[#632DE9]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                <path d="M12 3c2 3 1 5-1 7 2 0 4 2 4 5a5 5 0 0 1-10 0c0-3 3-6 7-12Z"/>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold">Engagement</h4>
              <p className="mt-2 text-neutral-700 text-sm">Agir avec conviction pour transformer la recherche en actions concrètes et mesurables. Notre engagement se traduit par une approche rigoureuse et une détermination sans faille à créer un impact positif durable dans nos communautés.</p>
            </div>
          </div>

          {/* Innovation Sociale */}
          <div className="flex items-start gap-4">
            <div className="shrink-0 h-9 w-9 rounded-lg bg-[#F4F0FF] grid place-items-center ring-1 ring-[#BFA9FF]/60 text-[#632DE9]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                <path d="M9 18h6M10 22h4"/>
                <path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.2 3.9-3 5l-.5.4a3 3 0 0 0-1.1 2.3V17H9v-.3a3 3 0 0 0-1.1-2.3l-.5-.4c-1.8-1.1-3-2.5-3-5a7 7 0 0 1 7-7Z"/>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold">Innovation Sociale</h4>
              <p className="mt-2 text-neutral-700 text-sm">Créer des solutions nouvelles et adaptées aux défis réels de notre société. Nous développons des approches innovantes qui répondent aux besoins spécifiques de nos bénéficiaires tout en maximisant l'impact social et économique.</p>
            </div>
          </div>

          {/* Inclusion */}
          <div className="flex items-start gap-4">
            <div className="shrink-0 h-9 w-9 rounded-lg bg-[#F4F0FF] grid place-items-center ring-1 ring-[#BFA9FF]/60 text-[#632DE9]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                <path d="M8 12h3l2-2 3 3 2-2"/>
                <path d="M3 7h6v6H3zM15 11h6v6h-6z"/>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold">Inclusion</h4>
              <p className="mt-2 text-neutral-700 text-sm">Offrir aux jeunes et aux femmes des opportunités équitables de développement et d'épanouissement. Notre approche inclusive garantit que chacun puisse accéder aux ressources et au soutien nécessaires pour réaliser son potentiel.</p>
            </div>
          </div>

          {/* Durabilité */}
          <div className="flex items-start gap-4">
            <div className="shrink-0 h-9 w-9 rounded-lg bg-[#F4F0FF] grid place-items-center ring-1 ring-[#BFA9FF]/60 text-[#632DE9]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                <path d="M4 20c8 0 12-8 12-16 0 0-8 0-12 8v8Z"/>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold">Durabilité</h4>
              <p className="mt-2 text-neutral-700 text-sm">Inscrire nos actions dans une logique de long terme qui assure la pérennité de nos impacts. Nous construisons des solutions durables qui continuent à générer de la valeur bien au-delà de nos interventions directes.</p>
            </div>
          </div>

          {/* Collaboration */}
          <div className="flex items-start gap-4">
            <div className="shrink-0 h-9 w-9 rounded-lg bg-[#F4F0FF] grid place-items-center ring-1 ring-[#BFA9FF]/60 text-[#632DE9]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                <path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11 5"/>
                <path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 1 0 7.07 7.07L13 19"/>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold">Collaboration</h4>
              <p className="mt-2 text-neutral-700 text-sm">Construire des synergies avec nos partenaires pour maximiser l'impact de nos initiatives. La collaboration est au cœur de notre approche, permettant de créer un écosystème d'acteurs engagés vers un objectif commun.</p>
            </div>
          </div>

          {/* Transparence & Mesurabilité */}
          <div className="flex items-start gap-4">
            <div className="shrink-0 h-9 w-9 rounded-lg bg-[#F4F0FF] grid place-items-center ring-1 ring-[#BFA9FF]/60 text-[#632DE9]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                <path d="M3 3v18h18"/>
                <path d="M7 15v3M12 11v7M17 7v11"/>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold">Transparence & Mesurabilité</h4>
              <p className="mt-2 text-neutral-700 text-sm">Produire des effets réels, mesurables et durables en maintenant une transparence totale sur nos méthodes et résultats. Chaque action est évaluée et documentée pour assurer une amélioration continue de nos pratiques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Young passports */}
      <section id="young" className="bg-[#F4F0FF]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-sm uppercase tracking-wide text-[#632DE9] font-semibold">Young Impact Initiatives</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold">Votre passeport vers l'avenir</h3>
          <div className="mt-6 flex items-center gap-8">
            <div className="w-full md:w-1/2">
              <img src={gallery1} alt="Youth Impact Initiatives" className="w-full max-w-md h-auto object-contain" />
            </div>
            <p className="text-neutral-700 max-w-3xl md:w-1/2">
            Construisez votre avenir avec nos passeports personnalisés
Notre plateforme révolutionnaire est spécialement conçue pour accompagner les jeunes dans leur parcours de développement professionnel et personnel. Grâce à nos trois passeports innovants, nous offrons un accompagnement complet et personnalisé qui transforme les aspirations en réalisations concrètes.
Chaque parcours est conçu pour répondre aux besoins spécifiques des jeunes d'aujourd'hui, en combinant diagnostic personnalisé, formation qualifiante et accompagnement entrepreneurial. Notre approche holistique garantit un développement complet des compétences et une préparation optimale au marché du travail.            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3 ">
            <div className="rounded-xl  bg-white bg-cover bg-center  p-6 shadow-sm border">
              <div className="text-sm font-semibold text-[#632DE9] ">01</div>
              <h4 className="mt-2 font-semibold text-black">Passeport Orientation Jeunes</h4>
              <p className="mt-2 text-neutral-700 text-black">Choisissez votre secteur et votre métier d'avenir grâce à notre système de diagnostic avancé qui identifie vos talents naturels et vos aspirations professionnelles.</p>
              <img src="/src/assets/passport.jpeg" className=" " />
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm border">
              <div className="text-sm font-semibold text-[#632DE9]">02</div>
              <h4 className="mt-2 font-semibold">Passeport Compétences Jeunes</h4>
              <p className="mt-2 text-neutral-700">Découvrez les compétences essentielles et apprenez comment les acquérir à travers notre catalogue de formations qualifiantes en soft skills, langues et métiers..</p>
              <img src="/src/assets/passport2.jpeg" className=" " />
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm border">
              <div className="text-sm font-semibold text-[#632DE9]">03</div>
              <h4 className="mt-2 font-semibold">Passeport Entrepreneuriat Jeunes</h4>
              <p className="mt-2 text-neutral-700">Transformez votre projet en réalité grâce à notre offre de valeur entrepreneuriale complète qui vous accompagne de l'idée à la concrétisation.</p>
              <img src="/src/assets/passport3.jpeg" className=" " />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-white text-gray-900 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
        Parcours d'Accompagnement Personnalisé
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            {/* Arrow shape with icon */}
            <div className="relative flex items-center justify-center w-24 h-16 bg-[#E7E6FA] rounded-md">
              <div className="absolute right-[-14px] top-0 h-16 w-7 bg-[#E7E6FA] clip-path-arrow" />
              <div className="relative left-[-4px] flex items-center justify-center">
                {step.icon}
              </div>
            </div>
            {/* Text content */}
            <div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Training */}
      <section id="training" className="mx-auto max-w-6xl px-4 py-20">
        <h3 className="text-2xl md:text-3xl font-bold">Catalogue de Formations Qualifiantes</h3>
        <p className="mt-3 text-neutral-700 max-w-3xl">Développez vos compétences avec nos formations expertes
Notre catalogue de formations qualifiantes est conçu pour répondre aux exigences du marché du travail moderne. Nous proposons des programmes complets et certifiants qui vous permettent d'acquérir les compétences les plus recherchées par les employeurs d'aujourd'hui.
Chaque formation est dispensée par des experts reconnus dans leur domaine et combine théorie pratique et mise en situation réelle. Les participants bénéficient d'un suivi personnalisé et d'un accompagnement post-formation pour maximiser leur insertion professionnelle.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {/* Soft Skills */}
          <div className="group rounded-2xl bg-[#F4F0FF] ring-1 ring-[#BFA9FF]/60 p-6 transition-shadow hover:shadow-md">
            <div className="flex items-start gap-3">
              <div className="shrink-0 h-10 w-10 rounded-full bg-white grid place-items-center ring-1 ring-[#BFA9FF]/70 text-[#632DE9]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                  <path d="M7 8h6m-6 4h4"/>
                  <path d="M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h7l4 3v-3h3a2 2 0 0 0 2-2Z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Soft Skills</h4>
                <p className="mt-2 text-neutral-700 text-sm">Développez vos compétences comportementales essentielles : communication, leadership, gestion du temps, travail en équipe, résolution de problèmes et intelligence émotionnelle pour exceller dans votre environnement professionnel.</p>
              </div>
            </div>
            <div className="mt-5">
              {/* <a href="#" className="inline-flex items-center gap-2 rounded-md bg-[#632DE9] px-4 py-2 text-white text-sm font-medium hover:bg-[#5321d0]">S'inscrire à une formation<span>→</span></a> */}
            </div>
          </div>

          {/* Langues */}
          <div className="group rounded-2xl bg-[#F4F0FF] ring-1 ring-[#BFA9FF]/60 p-6 transition-shadow hover:shadow-md">
            <div className="flex items-start gap-3">
              <div className="shrink-0 h-10 w-10 rounded-full bg-white grid place-items-center ring-1 ring-[#BFA9FF]/70 text-[#632DE9]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Langues</h4>
                <p className="mt-2 text-neutral-700 text-sm">Maîtrisez les langues internationales avec nos programmes intensifs d'apprentissage linguistique adaptés au monde professionnel, incluant l'anglais, le français, l'espagnol et l'arabe des affaires.</p>
              </div>
            </div>
            <div className="mt-5">
              {/* <a href="#" className="inline-flex items-center gap-2 rounded-md bg-[#632DE9] px-4 py-2 text-white text-sm font-medium hover:bg-[#5321d0]">S'inscrire à une formation<span>→</span></a> */}
            </div>
          </div>

          {/* Métiers */}
          <div className="group rounded-2xl bg-[#F4F0FF] ring-1 ring-[#BFA9FF]/60 p-6 transition-shadow hover:shadow-md">
            <div className="flex items-start gap-3">
              <div className="shrink-0 h-10 w-10 rounded-full bg-white grid place-items-center ring-1 ring-[#BFA9FF]/70 text-[#632DE9]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                  <rect x="3" y="7" width="18" height="13" rx="2"/>
                  <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Métiers</h4>
                <p className="mt-2 text-neutral-700 text-sm">Acquérez les compétences techniques spécifiques à votre secteur d'activité grâce à nos formations métiers complètes qui vous préparent directement aux exigences de votre futur emploi.</p>
              </div>
            </div>
            <div className="mt-5">
              {/* <a href="#" className="inline-flex items-center gap-2 rounded-md bg-[#632DE9] px-4 py-2 text-white text-sm font-medium hover:bg-[#5321d0]">S'inscrire à une formation<span>→</span></a> */}
            </div>
          </div>
      </div>
      </section>

      {/* Women */}
      <section id="women" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h3 className="text-2xl md:text-3xl font-extrabold">Women Impact Initiatives : Empowerment Féminin</h3>
          <div className="mt-8 grid md:grid-cols-2 gap-10 items-start">
            {/* Copy */}
            <div>
              <h4 className="text-lg font-semibold">Accompagnement spécialisé pour l'autonomisation des femmes</h4>
              <p className="mt-4 text-neutral-700">
                Notre programme Women Impact Initiatives est spécialement conçu pour accompagner les femmes en situation de vulnérabilité vers l'autonomisation économique et sociale. Nous proposons un parcours complet d'accompagnement qui valorise les compétences féminines et crée des opportunités concrètes d'insertion professionnelle et entrepreneuriale.
              </p>
              <p className="mt-4 text-neutral-700">
                À travers des ateliers de renforcement des capacités, des sessions de coaching personnalisé et un réseau de mentoring féminin, nous aidons chaque participante à développer sa confiance en soi, ses compétences professionnelles et son projet de vie. Notre approche holistique prend en compte les défis spécifiques auxquels font face les femmes dans leur parcours professionnel.
              </p>
              <p className="mt-4 text-neutral-700">
                Le programme inclut également un volet entrepreneurial qui accompagne les femmes désireuses de créer leur propre activité économique, avec un soutien technique, financier et un accès privilégié à notre réseau de partenaires et d'investisseurs engagés dans l'empowerment féminin.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#" className="rounded-md bg-[#632DE9] px-5 py-3 text-white text-sm font-medium hover:bg-[#5321d0]">Rejoindre le programme</a>
                <a href="#" className="rounded-md border px-5 py-3 text-sm font-medium hover:bg-neutral-50">En savoir plus</a>
              </div>
            </div>
            {/* Images */}
            <div className="grid gap-6">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-neutral-200">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop" alt="Women leadership" className="h-full w-full object-cover" />
              </div>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-neutral-200">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" alt="Women collaboration" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative isolate bg-gradient-to-r from-[#632DE9] to-[#5321d0] text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Rejoignez notre écosystème d'impact</h3>
            <p className="mt-2 text-white/80 max-w-2xl">Partenariats, opportunités, médias et réseaux sociaux pour amplifier votre impact.</p>
          </div>
          <div className="flex gap-3">
            <a href="#" className="rounded-md bg-white text-[#632DE9] px-5 py-3 font-medium hover:bg-white/90">Nous contacter</a>
            <a href="#programs" className="rounded-md bg-white/15 px-5 py-3 font-medium hover:bg-white/25">Découvrir nos programmes</a>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer id="contact" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-600">© {new Date().getFullYear()} Positive Impact Initiatives</div>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-blue-600">Nos réseaux</a>
            <a href="#" className="hover:text-blue-600">Nous contacter</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
