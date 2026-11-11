# UNIVERSIDAD TECNOLÓGICA DE AGUASCALIENTES

### **Ingeniería en Desarrollo y Gestión de Software**

**Materia:** Gestión del Proceso de Desarrollo de Software  
**Profesor:** Mtro. David Alejandro González González  
**Parcial 2:** Práctica Pipeline de Integración Continua (CI/CD)  
**Grupo:** 10-C-11 | **Periodo:** Septiembre - Diciembre 2026

---

# Suite de Validadores & Utilidades JS - CI/CD con GitHub Actions

![CI Pipeline](https://github.com/GamerTheKiller037/proyecto2/actions/workflows/ci.yml/badge.svg)

---

## 📌 Descripción del Proyecto

Este repositorio (`proyecto2`) contiene una biblioteca modular de funciones puras desarrolladas en JavaScript (ES6+). La suite incluye validadores de formatos de datos comunes (CURP, RFC, Email, Contraseñas, Tarjetas de Crédito, Teléfono, URL, Fechas) y utilidades de texto y matemáticas.

El proyecto implementa un pipeline automatizado de **Integración Continua (CI)** haciendo uso de **GitHub Actions**, **ESLint** para análisis estático de código, **Vitest** para la ejecución de pruebas unitarias con reporte de cobertura, y el despliegue automático del reporte técnico interactivo a **GitHub Pages**.

---

## 🌐 Enlaces Oficiales de Entrega

- 🔗 **Repositorio Público en GitHub:** [https://github.com/GamerTheKiller037/proyecto2](https://github.com/GamerTheKiller037/proyecto2)
- 📊 **Reporte de Cobertura en Vivo (GitHub Pages):** [https://GamerTheKiller037.github.io/proyecto2/](https://GamerTheKiller037.github.io/proyecto2/)
- 🔀 **Pull Request de Integración (Evidencia):** [https://github.com/GamerTheKiller037/proyecto2/pull/1](https://github.com/GamerTheKiller037/proyecto2/pull/1)

---

## 👥 Equipo de Trabajo (Integrantes)

| Nombre Completo                      | Rol en el Proyecto               | Usuario de GitHub                                          |
| :----------------------------------- | :------------------------------- | :--------------------------------------------------------- |
| **Diego Alberto Rodríguez Vázquez**  | Líder de Proyecto & Módulo Email | [@GamerTheKiller037](https://github.com/GamerTheKiller037) |
| **Fernando de Jesús Luján Lemus**    | Módulo Validador CURP            | [@lujanf483](https://github.com/lujanf483)                 |
| **César Eduardo Saucedo Villalobos** | Módulo Validador Password        | [@Acekey21](https://github.com/Acekey21)                   |
| **Saúl Oswaldo Garcia Hernandez**    | Módulo Validador Fechas          | [@Saul12gar](https://github.com/Saul12gar)                 |
| **Leonel A. Lopez Hernandez**        | Módulo Validador URL             | [@Eltipoleo](https://github.com/Eltipoleo)                 |
| **Carlos Alexis Brito Durón**        | Módulo Validador RFC             | [@Alex-1019](https://github.com/Alex-1019)                 |
| **Emmanue Gonzalez Barronl**         | Módulo Validador Tarjetas        | [@EmmauelG0nzalez](https://github.com/EmmauelG0nzalez)     |
| **Christian Salinas Martinez**       | Módulo Validador Teléfono        | [@Trabucles](https://github.com/Trabucles)                 |
| **Samuel Romario Hernandez Benitez** | Módulo Utilidades Texto          | [@Samuelhdz201](https://github.com/Samuelhdz201)           |
| **Yosef Adael Hernandez Duron**      | Módulo Utilidades Números        | [@YosYosi](https://github.com/YosYosi)                     |
| **Paola Guadalupe Soto Quezada**     | Módulo Convertidores             | [@Paosotoqzd](https://github.com/Paosotoqzd)               |

---

## 🛠️ Tecnologías y Herramientas

- **Lenguaje:** JavaScript (ES6+ ECMAScript Modules)
- **Entorno:** Node.js (v20+)
- **Testing:** Vitest (`@vitest/coverage-v8`)
- **Linter:** ESLint (Flat Config con 5+ reglas personalizadas)
- **CI/CD:** GitHub Actions
- **Hosting:** GitHub Pages

---

## Arquitectura del Proyecto

````text
proyecto2/
├── .github/
│   └── workflows/
│       └── ci.yml             # Pipeline CI/CD (lint -> test -> deploy)
├── src/                       # Módulos de funciones puras
│   ├── email.js
│   ├── curp.js
│   ├── rfc.js
│   ├── password.js
│   ├── creditCard.js
│   ├── phone.js
│   ├── url.js
│   ├── date.js
│   ├── text.js
│   ├── numbers.js
│   └── converters.js
├── tests/                     # Pruebas unitarias (*.test.js)
│   ├── email.test.js
│   ├── curp.test.js
│   ├── rfc.test.js
│   ├── password.test.js
│   ├── creditCard.test.js
│   ├── phone.test.js
│   ├── url.test.js
│   ├── date.test.js
│   ├── text.test.js
│   ├── numbers.test.js
│   └── converters.test.js
├── eslint.config.js           # Reglas estáticas de código
├── vitest.config.js           # Umbral mínimo de cobertura (80%)
├── package.json               # Scripts y dependencias
└── package-lock.json          # Árbol de dependencias bloqueado

```

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
````
