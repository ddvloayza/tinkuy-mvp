# TINKUY · MVP

Prototipo navegable de una plataforma de educación inclusiva, basado en las vistas de referencia. Construido con **Next.js 16**, **React 19** y TypeScript. Está preparado como exportación estática para AWS Amplify Hosting.

## Vistas incluidas

- Inicio y presentación de TINKUY
- Necesidades educativas con búsqueda y filtros
- Educación inclusiva
- Apoyo terapéutico con filtros
- Recursos para familias y docentes
- Directorio con búsqueda y filtros
- Orientación y acompañamiento
- Perfil familiar de demostración
- Plan personalizado de demostración, imprimible como PDF desde el navegador

## Desarrollo local

```bash
npm ci
npm run dev
```

Abre `http://localhost:3000`. Para verificar la exportación:

```bash
npm run typecheck
npm run build
```

La carpeta `out/` contiene el sitio estático.

## Despliegue en Amplify

1. Sube este proyecto a un repositorio de GitHub.
2. En Amplify Hosting, crea una aplicación conectada a ese repositorio.
3. Configura el alojamiento como **sitio estático** y confirma que el directorio de salida sea `out`. El archivo `amplify.yml` ya contiene `npm ci`, `npm run build` y `baseDirectory: out`.
4. Conecta la rama `main` y despliega. No agregues una regla SPA que redirija todas las rutas a `/index.html`; Next.js genera un `index.html` por ruta.

Las rutas usan barra final (`/recursos/`, etc.), compatible con las URL limpias de Amplify.

## Alcance y siguiente etapa

No se necesita una base de datos para validar navegación, contenido y demanda inicial. El directorio, el perfil infantil y el plan contienen **datos ilustrativos**; no son registros reales ni recomendaciones individuales. La orientación personalizada está señalada como próxima función.

Si el MVP demuestra uso real, el siguiente paso sería definir autenticación, consentimiento, gestión segura de datos de menores y un directorio verificado. En ese momento sí convendría añadir un backend y una base de datos. No guardamos información de menores en el navegador en esta versión.

## Créditos

Ilustración de portada generada para este prototipo. Los nombres y fichas del directorio son ejemplos de interfaz y deben verificarse antes de publicar como servicios reales.
