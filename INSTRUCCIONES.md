🔗 Repositorio: https://github.com/GamerTheKiller037/proyecto2

⚠️ REGLAS DE TRABAJO (MUY IMPORTANTES):

Nadie sube código directo a main. Todos deben trabajar en una rama propia.

En cada tarea les asigné 2 archivos: uno en src/ y su prueba en tests/.

Antes de subir sus cambios, deben ejecutar localmente: npm test y npm run lint.

Si todo pasa en verde, suben su rama y abren un Pull Request (PR) hacia main.

📩 Para [FERNANDO] (Validación de CURP)

📌 Módulos a crear:

- Archivo fuente: src/curp.js
- Archivo de pruebas: tests/curp.test.js

📌 Instrucciones paso a paso:

1. Actualiza tu repo local: git pull origin main
2. Crea tu rama: git checkout -b feature/curp
3. En src/curp.js crea funciones exportadas para validar formato de CURP mexicana, extraer sexo y fecha de nacimiento.
4. En tests/curp.test.js escribe 10 a 12 pruebas unitarias (casos válidos, cadenas vacías, longitud incorrecta, minúsculas, caracteres inválidos).
5. Prueba en tu terminal: npm test y npm run lint. Si lint da error usa: npx eslint --fix
6. Sube tus cambios:
   git add .
   git commit -m "feat: validador de CURP y pruebas unitarias"
   git push origin feature/curp
7. Ve a GitHub y abre un Pull Request hacia main. Avisame cuando esté listo para darte Merge.

📩 Para [ALEXIS] (Validación de RFC)

📌 Módulos a crear:

- Archivo fuente: src/rfc.js
- Archivo de pruebas: tests/rfc.test.js

📌 Instrucciones paso a paso:

1. Actualiza tu repo local: git pull origin main
2. Crea tu rama: git checkout -b feature/rfc
3. En src/rfc.js crea funciones para validar estructura de RFC de persona física (13 caracteres) y moral (12 caracteres).
4. En tests/rfc.test.js escribe 10 a 12 pruebas unitarias (RFCs válidos, homoclave, caracteres no alfanuméricos, nulos).
5. Revisa localmente: npm test y npm run lint (corrige con npx eslint --fix si pide formato).
6. Sube tus cambios:
   git add .
   git commit -m "feat: validador de RFC y pruebas"
   git push origin feature/rfc
7. Abre el Pull Request en GitHub hacia main y avísame.

📩 Para [CESAR] (Validación de Contraseñas)

📌 Módulos a crear:

- Archivo fuente: src/password.js
- Archivo de pruebas: tests/password.test.js

📌 Instrucciones paso a paso:

1. Actualiza tu repo: git pull origin main
2. Crea tu rama: git checkout -b feature/password
3. En src/password.js crea funciones que verifiquen longitud mínima (8 caracteres), presencia de mayúsculas, minúsculas, números y símbolos especiales.
4. En tests/password.test.js escribe 10 pruebas unitarias con diferentes combinaciones de contraseñas seguras e inseguras.
5. Ejecuta: npm test y npm run lint (si hay errores de linter corre: npx eslint --fix).
6. Sube los cambios:
   git add .
   git commit -m "feat: validador de passwords y pruebas"
   git push origin feature/password
7. Abre tu Pull Request en GitHub hacia main.

📩 Para [EMMANUEL] (Validación de Tarjetas de Crédito)

📌 Módulos a crear:

- Archivo fuente: src/creditCard.js
- Archivo de pruebas: tests/creditCard.test.js

📌 Instrucciones paso a paso:

1. Actualiza tu repo: git pull origin main
2. Crea tu rama: git checkout -b feature/credit-card
3. En src/creditCard.js implementa una función con el Algoritmo de Luhn para validar números de tarjeta y detectar emisor (Visa, Mastercard, AMEX).
4. En tests/creditCard.test.js escribe 10 pruebas unitarias (números válidos, inválidos, longitudes incorrectas, vacíos).
5. Ejecuta: npm test y npm run lint.
6. Sube tus cambios:
   git add .
   git commit -m "feat: validador de tarjetas de credito"
   git push origin feature/credit-card
7. Abre el PR en GitHub hacia main y avísame.

📩 Para [CHRISTIAN] (Validación de Teléfonos)

📌 Módulos: src/phone.js y tests/phone.test.js
📌 Rama: git checkout -b feature/phone

Instrucciones: Crea funciones que validen formato a 10 dígitos y código de país (+52). Agrega al menos 6 pruebas unitarias en tests/phone.test.js. Verifica con npm test y npm run lint antes de subir tu rama y abrir PR.

📩 Para [LEO] (Validación de URL)

📌 Módulos: src/url.js y tests/url.test.js
📌 Rama: git checkout -b feature/url

Instrucciones: Crea funciones para validar URLs (HTTP, HTTPS, dominio válido y parámetros de búsqueda). Escribe al menos 6 pruebas en tests/url.test.js. Ejecuta npm test y npm run lint antes de hacer push y abrir tu PR.

📩 Para [SAUL] (Validación de Fechas)

📌 Módulos: src/date.js y tests/date.test.js
📌 Rama: git checkout -b feature/date

Instrucciones: Crea funciones para validar si una cadena es fecha válida, si un año es bisiesto y calcular la edad. Escribe al menos 6 pruebas unitarias. Valida con npm test y npm run lint antes de abrir tu PR.

📩 Para [SAMUEL] (Utilidades de Texto)

📌 Módulos: src/text.js y tests/text.test.js
📌 Rama: git checkout -b feature/text

Instrucciones:
Crea 2 funciones: una para convertir texto a slug (ej. "Hola Mundo" -> "hola-mundo") y otra para detectar palíndromos. Agrega 5 pruebas sencillas en tests/text.test.js. Ejecuta npm test y npm run lint, haz push y abre tu PR.

📩 Para [YOSEF] (Utilidades de Números)

📌 Módulos: src/numbers.js y tests/numbers.test.js
📌 Rama: git checkout -b feature/numbers

Instrucciones:
Crea 2 funciones: una para saber si un número es par/impar y otra para comprobar si está dentro de un rango min/max. Agrega 5 pruebas sencillas en tests/numbers.test.js. Valida con npm test y npm run lint, haz push y abre tu PR.

📩 Para [PAOLA] (Convertidor de Unidades)

📌 Módulos: src/converters.js y tests/converters.test.js
📌 Rama: git checkout -b feature/converters

Instrucciones:
Crea 2 funciones: conversión de grados Celsius a Fahrenheit y de Kilómetros a Millas. Agrega 5 pruebas unitarias en tests/converters.test.js. Valida con npm test y npm run lint, haz push y abre tu PR.
