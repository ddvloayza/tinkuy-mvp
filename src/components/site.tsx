"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accessibility, ArrowLeft, ArrowRight, BookOpen, CalendarDays, Check,
  ChevronRight, ClipboardList, Download, Eye, GraduationCap,
  HandHeart, Heart, Home, Mail, MapPin, Menu, MessageCircle, Play, Puzzle,
  Search, ShieldCheck, Sparkles, Users, X,
} from "lucide-react";
import { conditions, resources, services, therapies, type View } from "@/lib/content";

const iconMap = { accessibility: Accessibility, book: BookOpen, clipboard: ClipboardList, eye: Eye, hand: HandHeart, heart: Heart, home: Home, message: MessageCircle, play: Play, puzzle: Puzzle, school: GraduationCap, users: Users };
type IconName = keyof typeof iconMap;
function Icon({ name, size = 25 }: { name: string; size?: number }) { const Component = iconMap[name as IconName] || Sparkles; return <Component size={size} strokeWidth={2.2} />; }

const nav = [
  { title: "Inicio", href: "/" }, { title: "Conoce TINKUY", href: "/conoce-tinkuy/" },
  { title: "Recursos", href: "/recursos/" }, { title: "Directorio", href: "/directorio/" },
  { title: "Mi cuenta", href: "/mi-cuenta/" },
];
const tiles = [
  { title: "Conoce TINKUY", href: "/conoce-tinkuy/", icon: "puzzle", tone: "lavender" },
  { title: "Educación inclusiva", href: "/educacion-inclusiva/", icon: "school", tone: "mint" },
  { title: "Apoyo terapéutico", href: "/apoyo-terapeutico/", icon: "heart", tone: "peach" },
  { title: "Recursos", href: "/recursos/", icon: "book", tone: "yellow" },
  { title: "Directorio", href: "/directorio/", icon: "home", tone: "blue" },
  { title: "Acompañamiento", href: "/orientacion/", icon: "users", tone: "mint" },
];
type Modal = { title: string; description: string; bullets?: string[] } | null;

function Brand() {
  return <Link className="brand" href="/" aria-label="TINKUY, ir al inicio">
    <span className="brand-mark" aria-hidden="true"><Image src="/images/tinkuy-logo.png" alt="" width={57} height={57} sizes="57px" /></span>
    <span className="brand-word"><span className="brand-name"><b>T</b><b>I</b><b>N</b><b>K</b><b>U</b><b>Y</b></span><small>Educación para todos</small></span>
  </Link>;
}

function Header({ view }: { view: View }) {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner">
    <Brand />
    <nav className={open ? "desktop-nav open" : "desktop-nav"} aria-label="Navegación principal">
      {nav.map((item) => <Link key={item.href} href={item.href} className={(view === "inicio" ? item.href === "/" : item.href.includes(view)) ? "nav-active" : ""} onClick={() => setOpen(false)}>{item.title}</Link>)}
    </nav>
    <div className="header-actions"><Link className="icon-button search-shortcut" href="/necesidades-educativas/" aria-label="Buscar necesidades educativas"><Search size={19} /></Link><Link className="avatar-button" href="/mi-cuenta/" aria-label="Ir a mi cuenta">M</Link><button className="icon-button menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"}>{open ? <X size={22} /> : <Menu size={22} />}</button></div>
  </div></header>;
}

function MobileNav({ view }: { view: View }) {
  const items = [{ title: "Inicio", href: "/", icon: Home }, { title: "Recursos", href: "/recursos/", icon: BookOpen }, { title: "Directorio", href: "/directorio/", icon: MapPin }, { title: "Mi cuenta", href: "/mi-cuenta/", icon: Users }];
  return <nav className="mobile-nav" aria-label="Navegación móvil">{items.map((item) => <Link key={item.href} href={item.href} className={(view === "inicio" ? item.href === "/" : item.href.includes(view)) ? "active" : ""}><item.icon size={21} /><span>{item.title}</span></Link>)}</nav>;
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <span className="eyebrow"><Sparkles size={14} /> {children}</span>; }
function BackLink() { return <Link className="back-link" href="/"><ArrowLeft size={15} /> Volver al inicio</Link>; }
function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) { return <div className="page-intro"><BackLink /><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{description}</p></div>; }
function ColoredIcon({ name, tone, size = 28 }: { name: string; tone: string; size?: number }) { return <span className={`colored-icon ${tone}`}><Icon name={name} size={size} /></span>; }
function FooterQuote({ children }: { children: React.ReactNode }) { return <div className="footer-quote"><span className="quote-heart">♥</span><p>{children}</p><span className="quote-spark">✦</span></div>; }

function HomeView() {
  return <><section className="hero"><div className="hero-copy"><Eyebrow>Un espacio para crecer juntos</Eyebrow><h1><span className="rainbow-word"><i>T</i><i>I</i><i>N</i><i>K</i><i>U</i><i>Y</i></span><small>Educación para todos</small></h1><p>Una plataforma que acompaña a las familias en el camino hacia una educación inclusiva, con amor, respeto y muchas oportunidades.</p><Link className="primary-button" href="/conoce-tinkuy/">Comenzar <ArrowRight size={18} /></Link></div><div className="hero-visual"><Image src="/images/familia-inclusiva.png" alt="Niñas y niños diversos compartiendo un momento con una adulta, incluyendo a una niña en silla de ruedas" fill priority sizes="(max-width: 760px) 100vw, 54vw" /></div><span className="hero-flower flower-one">✿</span><span className="hero-flower flower-two">✦</span></section>
  <section className="quick-section"><div className="section-label"><span>Explora TINKUY</span><span className="section-line" /></div><div className="quick-grid">{tiles.map((tile) => <Link key={tile.title} href={tile.href} className={`quick-tile ${tile.tone}`}><ColoredIcon name={tile.icon} tone={tile.tone} size={27} /><strong>{tile.title}</strong><ArrowRight size={15} /></Link>)}</div></section>
  <section className="home-lower"><div><Eyebrow>Aprender juntos</Eyebrow><h2>Cada niño y niña merece un lugar donde pueda brillar.</h2><p>Encuentra información clara, ideas para el aula y apoyo para tomar decisiones con confianza.</p></div><Link className="text-link" href="/necesidades-educativas/">Conoce las necesidades educativas <ArrowRight size={18} /></Link></section></>;
}

function AboutView() {
  return <><PageIntro eyebrow="Bienvenidos a TINKUY" title="Un encuentro para aprender sin barreras" description="TINKUY reúne información, recursos y rutas de acompañamiento para familias y docentes que creen en una educación donde todas las personas participan." /><div className="about-hero"><div><span className="small-pill">Nuestra idea</span><h2>La inclusión empieza cuando nos encontramos.</h2><p>Queremos que cada familia encuentre un punto de partida claro y que cada docente tenga herramientas prácticas para abrir más oportunidades de aprendizaje.</p><Link className="primary-button" href="/educacion-inclusiva/">Explorar educación inclusiva <ArrowRight size={17} /></Link></div><div className="about-logo"><Image src="/images/tinkuy-logo.png" alt="Logo de TINKUY, Educación para todos" width={320} height={320} /></div></div><div className="value-grid">{[{ icon: "heart", tone: "peach", title: "Con empatía", text: "Escuchamos historias y contextos antes de proponer apoyos." }, { icon: "book", tone: "yellow", title: "Con claridad", text: "Explicamos conceptos y alternativas en un lenguaje cercano." }, { icon: "users", tone: "mint", title: "En comunidad", text: "Familias, docentes y profesionales pueden avanzar juntos." }].map((v) => <article className="value-card" key={v.title}><ColoredIcon name={v.icon} tone={v.tone} /><h3>{v.title}</h3><p>{v.text}</p></article>)}</div><FooterQuote>Juntos por una educación sin barreras.</FooterQuote></>;
}

function NeedsView({ openModal }: { openModal: (modal: Modal) => void }) {
  const [query, setQuery] = useState(""); const [category, setCategory] = useState("Todas");
  const categories = ["Todas", ...Array.from(new Set(conditions.map((item) => item.category)))];
  const visible = conditions.filter((item) => (category === "Todas" || item.category === category) && `${item.title} ${item.description} ${item.category}`.toLowerCase().includes(query.toLowerCase()));
  return <><PageIntro eyebrow="Información clara" title="Conoce las necesidades educativas" description="Información cercana y confiable para comprender, acompañar y potenciar cada etapa del desarrollo." /><div className="search-box"><Search size={21} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busca una condición o necesidad..." aria-label="Buscar necesidades educativas" /><span className="search-badge">{visible.length} resultados</span></div><div className="browse-layout"><aside className="filter-panel"><h3>Explorar por tema</h3>{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={category === item ? "filter-active" : ""}><ChevronRight size={15} />{item}</button>)}</aside><div className="condition-grid">{visible.length ? visible.map((item) => <article className="condition-card" key={item.title}><ColoredIcon name={item.icon} tone={item.tone} /><span className="card-category">{item.category}</span><h3>{item.title}</h3><p>{item.description}</p><button className="card-more" onClick={() => openModal({ title: item.title, description: item.description, bullets: [item.detail, "Esta información es general; conversa con profesionales si necesitas orientación individual."] })}>Ver más <ArrowRight size={15} /></button></article>) : <div className="empty-state">No encontramos resultados. Prueba otra palabra o categoría.</div>}</div></div></>;
}

function EducationView({ openModal }: { openModal: (modal: Modal) => void }) {
  const topics = [
    { icon: "users", tone: "mint", title: "Derechos de los niños y niñas con discapacidad", text: "Participación, accesibilidad y trato digno en la escuela." },
    { icon: "school", tone: "yellow", title: "Cómo identificar colegios inclusivos", text: "Preguntas útiles al conocer una institución educativa." },
    { icon: "book", tone: "peach", title: "Adaptaciones curriculares", text: "Distintas maneras de aprender y demostrar lo aprendido." },
    { icon: "clipboard", tone: "blue", title: "Normativas y leyes", text: "Una introducción a los marcos que respaldan la inclusión." },
    { icon: "heart", tone: "peach", title: "Tips para una inclusión exitosa", text: "Pequeñas acciones para construir pertenencia cada día." },
    { icon: "message", tone: "lavender", title: "Preguntas frecuentes", text: "Respuestas iniciales para seguir explorando." },
  ];
  return <><PageIntro eyebrow="Aprender juntos" title="Educación inclusiva" description="Conoce tus derechos, las opciones educativas y cómo promover una escuela que valore la diversidad." /><div className="education-grid">{topics.map((item) => <button className={`education-card ${item.tone}`} key={item.title} onClick={() => openModal({ title: item.title, description: item.text, bullets: ["Escucha las necesidades y preferencias del niño o la niña.", "Acuerda apoyos concretos con la escuela y revísalos periódicamente.", "Celebra la participación y los avances, grandes o pequeños."] })}><ColoredIcon name={item.icon} tone={item.tone} size={34} /><strong>{item.title}</strong><span>Explorar <ArrowRight size={14} /></span></button>)}</div><FooterQuote>La inclusión no es un favor, es un derecho. ♥</FooterQuote></>;
}

function TherapyView({ openModal }: { openModal: (modal: Modal) => void }) {
  const [category, setCategory] = useState("Todos"); const categories = ["Todos", "Fisioterapia", "Terapia de lenguaje", "Psicología", "Terapia ocupacional"];
  return <><PageIntro eyebrow="Crecimiento y bienestar" title="Apoyo terapéutico" description="El acompañamiento profesional potencia el desarrollo y la autonomía de cada niño y niña." /><div className="tabs" role="group" aria-label="Filtrar terapias">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={category === item ? "selected" : ""}>{item}</button>)}</div><div className="stack-list">{therapies.filter((item) => category === "Todos" || item.category === category).map((item) => <article className="list-card" key={item.title}><ColoredIcon name={item.icon} tone={item.tone} /><div><h3>{item.title}</h3><p>{item.description}</p></div><button className="outline-button" onClick={() => openModal({ title: item.title, description: item.description, bullets: item.steps })}>Ver más <ArrowRight size={14} /></button></article>)}</div><FooterQuote>Cada niño y niña necesita un tipo de apoyo, y cada avance cuenta. ♥</FooterQuote></>;
}

type Resource = (typeof resources)[number];
function ResourceRow({ item, isFavorite, onToggle, openModal }: { item: Resource; isFavorite: boolean; onToggle: (title: string) => void; openModal: (modal: Modal) => void }) {
  return <article className="list-card resource-card"><ColoredIcon name={item.icon} tone={item.tone} /><div className="resource-copy"><h3>{item.title}</h3><p>{item.description}</p><span className="resource-audience">Para {item.audience.toLowerCase()}</span></div><button className="outline-button" onClick={() => openModal({ title: item.title, description: item.description, bullets: item.items })}>Ver <ArrowRight size={14} /></button><button className={isFavorite ? "favorite-button active" : "favorite-button"} onClick={() => onToggle(item.title)} aria-label={isFavorite ? `Quitar ${item.title} de favoritos` : `Guardar ${item.title} en favoritos`} aria-pressed={isFavorite}><Heart size={20} fill={isFavorite ? "currentColor" : "none"} /></button></article>;
}

function ResourcesView({ openModal, favorites, onToggle }: { openModal: (modal: Modal) => void; favorites: string[]; onToggle: (title: string) => void }) {
  const [audience, setAudience] = useState("Todos");
  return <><PageIntro eyebrow="Ideas para compartir" title="Recursos para familias y docentes" description="Materiales prácticos, guías y herramientas para fortalecer la inclusión desde casa y en el aula." /><div className="resource-toolbar"><div className="tabs" role="group" aria-label="Filtrar recursos">{["Todos", "Familias", "Docentes"].map((item) => <button key={item} onClick={() => setAudience(item)} className={audience === item ? "selected" : ""}>{item}</button>)}</div><Link className="text-link" href="/favoritos/"><Heart size={17} /> Mis favoritos</Link></div><div className="stack-list">{resources.filter((item) => audience === "Todos" || item.audience === audience).map((item) => <ResourceRow key={item.title} item={item} isFavorite={favorites.includes(item.title)} onToggle={onToggle} openModal={openModal} />)}</div><FooterQuote>La inclusión también se construye desde casa y en el aula.</FooterQuote></>;
}

function FavoritesView({ openModal, favorites, onToggle, ready }: { openModal: (modal: Modal) => void; favorites: string[]; onToggle: (title: string) => void; ready: boolean }) {
  const saved = resources.filter((item) => favorites.includes(item.title));
  return <div className="account-layout"><AccountSidebar active="Favoritos" /><div className="account-content"><PageIntro eyebrow="Mi espacio familiar" title="Favoritos" description="Guarda los recursos que quieras volver a consultar. Esta selección se conserva solo en este navegador." />{!ready ? <div className="favorites-loading" role="status">Cargando favoritos…</div> : saved.length ? <div className="stack-list">{saved.map((item) => <ResourceRow key={item.title} item={item} isFavorite onToggle={onToggle} openModal={openModal} />)}</div> : <div className="favorites-empty"><Heart size={30} /><h2>Aún no guardaste recursos</h2><p>Explora los materiales y toca el corazón de los que quieras tener a mano.</p><Link className="primary-button" href="/recursos/">Explorar recursos <ArrowRight size={16} /></Link></div>}</div></div>;
}

function DirectoryView({ openModal }: { openModal: (modal: Modal) => void }) {
  const [query, setQuery] = useState(""); const [category, setCategory] = useState("Todos");
  const visible = services.filter((item) => (category === "Todos" || item.category === category) && `${item.title} ${item.category} ${item.location}`.toLowerCase().includes(query.toLowerCase()));
  return <><PageIntro eyebrow="Encontrar apoyo" title="Directorio de servicios y profesionales" description="Explora tipos de servicios que pueden acompañar el proceso de inclusión. Los registros de esta demo son ilustrativos." /><div className="search-box"><Search size={21} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busca por nombre, servicio o distrito..." aria-label="Buscar en el directorio" /></div><div className="tabs" role="group" aria-label="Filtrar directorio">{["Todos", "Fisioterapia", "Terapia de lenguaje", "Educación", "Orientación"].map((item) => <button key={item} onClick={() => setCategory(item)} className={category === item ? "selected" : ""}>{item}</button>)}</div><div className="stack-list">{visible.length ? visible.map((item) => <article className="list-card" key={item.title}><ColoredIcon name={item.icon} tone={item.tone} /><div><h3>{item.title}</h3><p>{item.description}</p><span className="location"><MapPin size={13} /> {item.location} · {item.category}</span></div><button className="outline-button" onClick={() => openModal({ title: item.title, description: "Ficha de demostración. El directorio real requerirá verificar servicios, ubicación y datos de contacto antes de publicarse.", bullets: [item.description, `${item.category} · ${item.location}`] })}>Ver perfil</button></article>) : <div className="empty-state">No hay resultados para esta búsqueda.</div>}</div></>;
}

function OrientationView() {
  return <><PageIntro eyebrow="Estamos contigo" title="Orientación y acompañamiento" description="Un lugar para escuchar, resolver dudas y encontrar un siguiente paso." /><div className="orientation-hero"><span className="orientation-avatar"><MessageCircle size={43} /></span><div><h2>¿Tienes alguna consulta?</h2><p>Empieza por explorar nuestras guías o revisa las preguntas más comunes. En una siguiente etapa habilitaremos la atención personalizada.</p><div className="button-row"><Link className="primary-button" href="/recursos/">Explorar recursos <ArrowRight size={17} /></Link><Link className="secondary-button" href="/necesidades-educativas/">Conoce las NEE</Link></div></div></div><div className="contact-grid"><div><MessageCircle size={24} /><strong>Orientación en línea</strong><span>Próximamente</span></div><div><Mail size={24} /><strong>Correo de contacto</strong><span>Próximamente</span></div><div><CalendarDays size={24} /><strong>Charlas y talleres</strong><span>Próximamente</span></div></div></>;
}

const accountNav = [
  { href: "/mi-cuenta/", title: "Mi perfil familiar", icon: Home }, { href: "/mi-cuenta/", title: "Mi hijo/a", icon: Users },
  { href: "/conoce-tinkuy/", title: "Conoce TINKUY", icon: Puzzle }, { href: "/educacion-inclusiva/", title: "Educación inclusiva", icon: GraduationCap },
  { href: "/apoyo-terapeutico/", title: "Apoyo terapéutico", icon: Heart }, { href: "/recursos/", title: "Recursos", icon: BookOpen },
  { href: "/favoritos/", title: "Favoritos", icon: Heart },
  { href: "/directorio/", title: "Directorio", icon: MapPin }, { href: "/orientacion/", title: "Orientación", icon: MessageCircle },
];
function AccountSidebar({ active }: { active: string }) { return <aside className="account-sidebar"><div className="sidebar-person"><div className="person-avatar">M</div><strong>Mi perfil familiar</strong><span>Espacio de demostración</span></div><nav aria-label="Menú del perfil">{accountNav.map((item, index) => <Link href={item.href} key={`${item.title}-${index}`} className={item.title === active ? "active" : ""}><item.icon size={18} />{item.title}</Link>)}</nav><div className="sidebar-note">✦ Juntos por una<br /> educación sin barreras <span>♥</span></div></aside>; }
function AccountView() {
  const [tab, setTab] = useState("Información general");
  return <div className="account-layout"><AccountSidebar active="Mi hijo/a" /><div className="account-content"><div className="account-heading"><div><Eyebrow>Mi espacio familiar</Eyebrow><h1>Mi hijo/a</h1></div><span className="demo-badge"><ShieldCheck size={15} /> Datos de ejemplo</span></div><div className="child-card"><div className="child-avatar">👦🏽</div><div><h2>Mateo</h2><span>5 años</span><p>Parálisis cerebral infantil</p></div><span className="child-spark">✦</span></div><div className="tabs account-tabs" role="group" aria-label="Información del perfil">{["Información general", "Necesidades", "Objetivos", "Notas"].map((item) => <button key={item} onClick={() => setTab(item)} className={tab === item ? "selected" : ""}>{item}</button>)}</div>{tab === "Información general" ? <div className="profile-columns"><div className="profile-panel"><h3>Información general</h3><dl><div><CalendarDays size={18} /><dt>Edad</dt><dd>5 años</dd></div><div><Heart size={18} /><dt>Condición de referencia</dt><dd>Parálisis cerebral infantil</dd></div><div><GraduationCap size={18} /><dt>Nivel educativo</dt><dd>Inicial</dd></div><div><HandHeart size={18} /><dt>Apoyos de ejemplo</dt><dd>Fisioterapia · Lenguaje</dd></div></dl></div><div className="profile-panel observation"><h3>Observaciones</h3><p>Le gustan la música, los animales y las actividades al aire libre. Actualmente, se encuentra en proceso de atención multidisciplinaria.</p><Link className="outline-button" href="/plan-personalizado/">Ver plan personalizado</Link></div></div> : <div className="profile-panel tab-panel"><h3>{tab}</h3><p>{tab === "Necesidades" ? "Apoyos para participar en juegos, actividades de aula y momentos de comunicación." : tab === "Objetivos" ? "Promover la autonomía, la comunicación y la participación en experiencias de aprendizaje." : "Espacio de ejemplo para registrar avances y preguntas de la familia."}</p><Link className="text-link" href="/plan-personalizado/">Ver el plan de ejemplo <ArrowRight size={16} /></Link></div>}<Link className="text-link account-favorites-link" href="/favoritos/"><Heart size={17} /> Ver mis recursos favoritos <ArrowRight size={16} /></Link></div></div>;
}

function PlanView() {
  const steps = ["Evaluación", "Plan", "Seguimiento", "Avances"];
  const items = [
    { tone: "peach", icon: "accessibility", text: "Movimiento y juego activo dos veces por semana" },
    { tone: "blue", icon: "message", text: "Estimulación del lenguaje en casa" },
    { tone: "mint", icon: "hand", text: "Materiales sensoriales y de motricidad fina" },
    { tone: "yellow", icon: "users", text: "Seguimiento con especialistas y escuela" },
  ];
  return <><PageIntro eyebrow="Mi espacio familiar" title="Plan personalizado" description="Ejemplo visual de cómo podrían organizarse recomendaciones y avances para un niño o niña." /><div className="plan-card"><div className="plan-steps">{steps.map((step, index) => <div key={step} className={index < 2 ? "current" : ""}><span>{index + 1}</span><strong>{step}</strong></div>)}</div><div className="plan-content"><div><span className="small-pill">Ejemplo · Mateo, 5 años</span><h2>Pequeños pasos, grandes logros</h2><p>Estas recomendaciones son ficticias y muestran el formato del futuro plan.</p></div><ul>{items.map((item) => <li key={item.text}><ColoredIcon name={item.icon} tone={item.tone} size={19} />{item.text}<Check size={16} /></li>)}</ul><button className="primary-button" onClick={() => window.print()}><Download size={17} /> Imprimir o guardar como PDF</button></div></div><FooterQuote>Cada avance merece ser celebrado. ♥</FooterQuote></>;
}

export default function Site({ view }: { view: View }) {
  const [modal, setModal] = useState<Modal>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [favoritesReady, setFavoritesReady] = useState(false);
  const modalCloseRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { try { const stored = JSON.parse(window.localStorage.getItem("tinkuy:favoritos") || "[]"); if (Array.isArray(stored)) setFavorites(stored.filter((item): item is string => typeof item === "string")); } catch {} setFavoritesReady(true); }, []);
  useEffect(() => { if (!modal) return; const previous = document.activeElement as HTMLElement | null; modalCloseRef.current?.focus(); const close = (event: KeyboardEvent) => { if (event.key === "Escape") setModal(null); if (event.key === "Tab") { const buttons = document.querySelectorAll<HTMLButtonElement>(".detail-modal button"); if (!buttons.length) return; const first = buttons[0], last = buttons[buttons.length - 1]; if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); } } }; window.addEventListener("keydown", close); const oldOverflow = document.body.style.overflow; document.body.style.overflow = "hidden"; return () => { window.removeEventListener("keydown", close); document.body.style.overflow = oldOverflow; previous?.focus(); }; }, [modal]);
  const toggleFavorite = (title: string) => { const next = favorites.includes(title) ? favorites.filter((item) => item !== title) : [...favorites, title]; setFavorites(next); try { window.localStorage.setItem("tinkuy:favoritos", JSON.stringify(next)); } catch {} };
  const content = (() => {
    switch (view) {
      case "inicio": return <HomeView />;
      case "conoce-tinkuy": return <AboutView />;
      case "necesidades-educativas": return <NeedsView openModal={setModal} />;
      case "educacion-inclusiva": return <EducationView openModal={setModal} />;
      case "apoyo-terapeutico": return <TherapyView openModal={setModal} />;
      case "recursos": return <ResourcesView openModal={setModal} favorites={favorites} onToggle={toggleFavorite} />;
      case "directorio": return <DirectoryView openModal={setModal} />;
      case "orientacion": return <OrientationView />;
      case "mi-cuenta": return <AccountView />;
      case "plan-personalizado": return <PlanView />;
      case "favoritos": return <FavoritesView openModal={setModal} favorites={favorites} onToggle={toggleFavorite} ready={favoritesReady} />;
    }
  })();
  return <><a className="skip-link" href="#contenido">Saltar al contenido</a><Header view={view} /><main id="contenido" className={view === "inicio" ? "main-shell home-shell" : "main-shell inner-shell"}>{content}</main><footer className="site-footer"><Brand /><p>Hecho para construir más oportunidades de aprendizaje.</p><span>Demo MVP · 2026</span></footer><MobileNav view={view} />{modal && <div className="modal-backdrop" onClick={() => setModal(null)}><div className="detail-modal" role="dialog" aria-modal="true" aria-label={modal.title} onClick={(event) => event.stopPropagation()}><button ref={modalCloseRef} className="modal-close" aria-label="Cerrar" onClick={() => setModal(null)}><X size={20} /></button><Eyebrow>Para seguir aprendiendo</Eyebrow><h2>{modal.title}</h2><p>{modal.description}</p>{modal.bullets && <ul>{modal.bullets.map((bullet) => <li key={bullet}><Check size={18} />{bullet}</li>)}</ul>}<button className="primary-button" onClick={() => setModal(null)}>Entendido <ArrowRight size={16} /></button></div></div>}</>;
}
