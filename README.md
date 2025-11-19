**Opa Challenge**

Proyecto front-end creado con React, Vite y TypeScript como parte del reto "OPA Challenge".

**Descripción**:

- **Qué es**: Aplicación web modular para ingresar datos, realizar cálculos y guardar/mostrar resultados. Contiene componentes organizados por funcionalidad (`calculator-input`, `calculate-data`, `element-data`, `main-data`).
- **Objetivo**: Proporcionar una interfaz clara para introducir elementos y parámetros, ejecutar cálculos y persistir resultados localmente.

**Stack Tecnológico**:

- **Frontend**: React + TypeScript
- **Bundler/Dev**: Vite
- **Estilos**: Tailwind CSS

**Estructura principal del proyecto**

- `src/` : Código fuente React
  - `OpaApp.tsx`, `main.tsx` : punto de entrada y componente raíz
  - `calculator-input/` : entrada y lógica de cálculo
  - `calculate-data/` : componentes relacionados con el procesamiento y la respuesta
  - `element-data/` : formularios y manejo de elementos
  - `main-data/` : inputs generales (peso, calorías, bienvenida)
  - `shared/` : interfaces y tipos compartidos
- `public/` : activos públicos (fuentes, imágenes, etc.)
- `vite.config.ts`, `tsconfig.json` : configuración del proyecto

**Instalación**

1. Clona el repositorio:

```
git clone https://github.com/Davidfelipe91/opa-challenge.git
cd opa-challenge
```

2. Instala dependencias:

```bash
npm install
```

**Scripts disponibles**

- `npm run dev` : inicia el servidor de desarrollo (Vite).
- `npm run build` : compila TypeScript y genera la build de producción.
- `npm run preview` : sirve la build de producción para una vista previa.
- `npm run lint` : ejecuta ESLint sobre el proyecto.

Ejemplo rápido para desarrollo:

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` (o la URL que Vite muestre) en tu navegador.

**Notas de desarrollo**

- El proyecto usa TypeScript; si agregas nuevas rutas o props, añade/actualiza las interfaces en `src/shared/`.
- Componentes principales están organizados por carpetas; busca `components/` dentro de cada módulo funcional.

**Contribuciones**

- Si quieres mejorar la app, crea un fork y un PR con cambios claros y tests si aplica. Describe el objetivo en el PR.

**Licencia**

- Repositorio sin licencia especificada. Añade un archivo `LICENSE` si quieres aplicar una licencia permisiva.

**Contacto**

- Autor/Propietario: `Davidfelipe91` (repo: `opa-challenge`).

Si quieres, puedo:

- Añadir secciones específicas (ej. despliegue, tests, convenciones de commit).
- Preparar un `LICENSE` y un `CHANGELOG` inicial.
