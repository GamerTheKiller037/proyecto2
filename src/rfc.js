
const PATRON_FISICA = /^[A-Z\u00D1&]{4}\d{6}[A-Z0-9]{3}$/;
const PATRON_MORAL = /^[A-Z\u00D1&]{3}\d{6}[A-Z0-9]{3}$/;

function fechaRFCValida(rfc) {
  const coincidencia = /\d{6}/.exec(rfc);

  if (!coincidencia) {
    return false;
  }

  const fecha = coincidencia[0];
  const anio = Number(fecha.substring(0, 2));
  const mes = Number(fecha.substring(2, 4));
  const dia = Number(fecha.substring(4, 6));

  if (mes < 1 || mes > 12 || dia < 1) {
    return false;
  }

  const diasMes = new Date(Date.UTC(2000 + anio, mes, 0)).getUTCDate();

  return dia <= diasMes;
}

export function validarRFCFisica(rfc) {
  if (typeof rfc !== "string") {
    return false;
  }

  const valor = rfc.trim().toUpperCase();

  return PATRON_FISICA.test(valor) && fechaRFCValida(valor);
}

export function validarRFCMoral(rfc) {
  if (typeof rfc !== "string") {
    return false;
  }

  const valor = rfc.trim().toUpperCase();

  return PATRON_MORAL.test(valor) && fechaRFCValida(valor);
}

export function validarRFC(rfc) {
  return validarRFCFisica(rfc) || validarRFCMoral(rfc);
}
