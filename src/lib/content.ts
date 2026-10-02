export const sections = ["conoce-tinkuy", "necesidades-educativas", "educacion-inclusiva", "apoyo-terapeutico", "recursos", "directorio", "orientacion", "mi-cuenta", "plan-personalizado", "favoritos"] as const;
export type Section = (typeof sections)[number];
export type View = "inicio" | Section;

export const conditions = [
  { title: "Trastorno del espectro autista (TEA)", category: "Neurodesarrollo", icon: "puzzle", tone: "blue", description: "Cada persona en el espectro tiene una forma única de comunicarse, sentir y aprender.", detail: "Los apoyos pueden incluir anticipación visual, rutinas claras y espacios sensorialmente amables." },
  { title: "Parálisis cerebral infantil", category: "Discapacidad física", icon: "accessibility", tone: "mint", description: "Afecta el movimiento y la postura; las necesidades de apoyo varían en cada niño o niña.", detail: "Las adaptaciones de acceso y la participación en las actividades escolares son clave." },
  { title: "Síndrome de Down", category: "Discapacidad intelectual", icon: "heart", tone: "peach", description: "Una condición genética que puede acompañarse de diferentes ritmos de aprendizaje.", detail: "La enseñanza con apoyos visuales y metas individualizadas puede favorecer la autonomía." },
  { title: "Discapacidad visual", category: "Discapacidad sensorial", icon: "eye", tone: "lavender", description: "Incluye distintos grados de visión reducida o ausencia de visión.", detail: "Los materiales accesibles, el contraste y la descripción verbal facilitan el aprendizaje." },
  { title: "Trastornos del lenguaje", category: "Comunicación", icon: "message", tone: "yellow", description: "Pueden afectar la comprensión, la expresión o el uso del lenguaje.", detail: "El acompañamiento especializado y el tiempo para comunicarse ayudan a participar." },
  { title: "Trastornos del aprendizaje", category: "Aprendizaje", icon: "book", tone: "blue", description: "Diferencias persistentes en áreas como lectura, escritura o matemáticas.", detail: "Las estrategias multimodales y evaluaciones flexibles permiten mostrar lo aprendido." },
];

export const therapies = [
  { title: "Fisioterapia pediátrica", category: "Fisioterapia", icon: "accessibility", tone: "mint", description: "Acompaña el movimiento, la postura y la participación en actividades cotidianas.", steps: ["Objetivos funcionales acordados con la familia", "Juego y movimiento adaptados a cada etapa", "Seguimiento de avances relevantes"] },
  { title: "Terapia de lenguaje", category: "Terapia de lenguaje", icon: "message", tone: "yellow", description: "Fortalece la comunicación, la comprensión y la expresión.", steps: ["Evaluación de fortalezas comunicativas", "Estrategias para casa y escuela", "Apoyos aumentativos cuando sean útiles"] },
  { title: "Terapia ocupacional", category: "Terapia ocupacional", icon: "hand", tone: "peach", description: "Promueve la autonomía en rutinas, juego y aprendizaje.", steps: ["Participación en actividades diarias", "Adaptaciones del entorno", "Habilidades motoras y sensoriales"] },
  { title: "Psicología infantil", category: "Psicología", icon: "heart", tone: "lavender", description: "Acompaña el bienestar emocional y las relaciones.", steps: ["Escucha del niño y su familia", "Herramientas de regulación emocional", "Trabajo coordinado con la escuela"] },
];

export const resources = [
  { title: "Guías y orientaciones", audience: "Familias", icon: "clipboard", tone: "mint", description: "Ideas prácticas para acompañar en casa, conversar con la escuela y celebrar avances.", items: ["Crear una rutina visual", "Preparar una reunión con la escuela", "Observar fortalezas e intereses"] },
  { title: "Videos y talleres", audience: "Familias", icon: "play", tone: "peach", description: "Sesiones breves para descubrir estrategias de aprendizaje y bienestar.", items: ["Comunicación en familia", "Juego que incluye", "Autonomía paso a paso"] },
  { title: "Material didáctico", audience: "Docentes", icon: "book", tone: "yellow", description: "Actividades adaptables, apoyos visuales y plantillas para el aula.", items: ["Agenda visual", "Opciones para responder", "Lectura en varios formatos"] },
  { title: "Historias que inspiran", audience: "Docentes", icon: "heart", tone: "lavender", description: "Experiencias para abrir conversaciones sobre participación y pertenencia.", items: ["Escuchar a cada estudiante", "Construir acuerdos de aula", "Celebrar distintas maneras de aprender"] },
];

export const services = [
  { title: "Centro Horizonte (demo)", category: "Fisioterapia", location: "Lima", icon: "accessibility", tone: "mint", description: "Fisioterapia y terapia ocupacional." },
  { title: "Espacio Comunica (demo)", category: "Terapia de lenguaje", location: "Lima", icon: "users", tone: "blue", description: "Comunicación y apoyo psicopedagógico." },
  { title: "Colegio Puentes (demo)", category: "Educación", location: "San Martín de Porres", icon: "school", tone: "peach", description: "Inicial y primaria con enfoque inclusivo." },
  { title: "Red Crecer (demo)", category: "Orientación", location: "Lima", icon: "home", tone: "lavender", description: "Acompañamiento y orientación a familias." },
];
