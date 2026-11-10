const ESTADOS = 'AS|BC|BS|CC|CL|CM|CS|CH|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE';

const CURP_REGEX = new RegExp(
  '^[A-Z][AEIOUX][A-Z]{2}' + // 4 letras (apellidos y nombre)
    '\\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\\d|3[01])' + // fecha AAMMDD
    '[HMX]' + // sexo
    `(${ESTADOS})` + // entidad federativa
    '[B-DF-HJ-NP-TV-Z]{3}' + // consonantes internas
    '[A-Z0-9]\\d$', // homoclave + dígito verificador
);

const NOMBRES_SEXO = { H: 'Hombre', M: 'Mujer', X: 'No binario' };

function normalizar(curp) {
  return typeof curp === 'string' ? curp.trim().toUpperCase() : '';
}

function obtenerFecha(curp) {
  const anio2 = Number(curp.slice(4, 6));
  const mes = Number(curp.slice(6, 8));
  const dia = Number(curp.slice(8, 10));
  // Posición 17: dígito => nacidos en 1900s, letra => nacidos en 2000s
  const siglo = /\d/.test(curp[16]) ? 1900 : 2000;
  const anio = siglo + anio2;

  const fecha = new Date(Date.UTC(anio, mes - 1, dia));
  const esReal =
    fecha.getUTCFullYear() === anio &&
    fecha.getUTCMonth() === mes - 1 &&
    fecha.getUTCDate() === dia;

  return esReal ? { anio, mes, dia } : null;
}

export function validateCURP(curp) {
  const valor = normalizar(curp);
  if (valor.length !== 18 || !CURP_REGEX.test(valor)) {
    return false;
  }
  return obtenerFecha(valor) !== null;
}

export function getSexFromCURP(curp) {
  if (!validateCURP(curp)) {
    return null;
  }
  return NOMBRES_SEXO[normalizar(curp)[10]];
}

export function getBirthDateFromCURP(curp) {
  if (!validateCURP(curp)) {
    return null;
  }
  const { anio, mes, dia } = obtenerFecha(normalizar(curp));
  const mm = String(mes).padStart(2, '0');
  const dd = String(dia).padStart(2, '0');
  return `${anio}-${mm}-${dd}`;
}