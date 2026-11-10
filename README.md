🚀 Suite de Validadores & Utilidades JS - CI/CD con GitHub Actions

📌 Descripción del Proyecto

Este repositorio (proyecto2) contiene una biblioteca modular de funciones puras en JavaScript desarrollada como práctica integradora para la asignatura de Gestión del Proceso de Desarrollo de Software. La suite incluye validadores de formatos estándar (CURP, RFC, Email, Contraseñas, Tarjetas de Crédito, Teléfono, URL, Fechas) y utilidades matemáticas y de texto.

El proyecto implementa un pipeline automatizado de Integración Continua (CI) mediante GitHub Actions que ejecuta análisis estático de código con ESLint, pruebas unitarias y cálculo de umbral de cobertura con Vitest, y realiza el despliegue automático del reporte HTML a GitHub Pages.

🌐 Reporte de Cobertura en Vivo (GitHub Pages)

Puedes consultar el reporte interactivo de cobertura de código generado por el pipeline en la siguiente URL:
🔗 Ver Reporte de Cobertura HTML en GitHub Pages

🛠️ Tecnologías y Requisitos

Lenguaje: JavaScript (ECMAScript Modules - ES6+)

Entorno: Node.js (v20+)

Testing: Vitest (@vitest/coverage-v8)

Linter: ESLint (Flat Config)

CI/CD Orchestrator: GitHub Actions

Hosting: GitHub Pages

🏗️ Arquitectura del Proyecto

proyecto2/
├── .github/
│ └── workflows/
│ └── ci.yml # Pipeline de CI/CD (lint -> test -> deploy)
├── src/ # Módulos de código fuente (Funciones puras)
│ ├── email.js
│ ├── curp.js
│ ├── rfc.js
│ ├── password.js
│ ├── creditCard.js
│ ├── phone.js
│ ├── url.js
│ ├── date.js
│ ├── text.js
│ ├── numbers.js
│ └── converters.js
├── tests/ # Pruebas unitarias espejo (\*.test.js)
│ ├── email.test.js
│ ├── curp.test.js
│ ├── rfc.test.js
│ ├── password.test.js
│ ├── creditCard.test.js
│ ├── phone.test.js
│ ├── url.test.js
│ ├── date.test.js
│ ├── text.test.js
│ ├── numbers.test.js
│ └── converters.test.js
├── eslint.config.js # Reglas estáticas de código (min. 5 reglas)
├── vitest.config.js # Umbral mínimo de cobertura (80%)
├── package.json # Configuración de dependencias y scripts
└── package-lock.json # Árbol de dependencias bloqueado

📖 Instrucciones para Integrantes del Equipo

1. Clonar e Instalar

git clone https://github.com/GamerTheKiller037/proyecto2.git
cd proyecto2
npm install

2. Crear tu Rama de Trabajo

git checkout -b feature/tu-nombre-modulo

3. Desarrollar Módulo y Pruebas

Agrega tu función en src/nombre-modulo.js (Exportación nombrada).

Agrega tus pruebas unitarias en tests/nombre-modulo.test.js.

4. Validar Localmente antes de Subir

npm test # Verifica que tus pruebas pasen
npm run coverage # Revisa el porcentaje de cobertura local (mínimo 80%)
npm run lint # Verifica reglas de formato con ESLint

(Si npm run lint marca errores de formato, ejecuta npx eslint --fix en tu máquina).

5. Enviar Cambios y Crear Pull Request

git add .
git commit -m "feat: implementacion de modulo [nombre] y sus pruebas unitarias"
git push origin feature/tu-nombre-modulo

Posteriormente, ingresa a GitHub y crea un Pull Request (PR) hacia la rama main. El pipeline de CI validará tu código automáticamente.
