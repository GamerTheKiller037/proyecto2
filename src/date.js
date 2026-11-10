export function esBisiesto(anio) {
  if (!Number.isInteger(anio) || anio < 1) {
    return false;
  }

  return anio % 400 === 0 || (anio % 4 === 0 && anio % 100 !== 0);
}

export function esFechaValida(fecha) {
  if (typeof fecha !== "string") {
    return false;
  }

  const coincidencia = /^(\d{4})-(\d{2})-(\d{2})$/.exec(fecha);
  if (!coincidencia) {
    return false;
  }

  const anio = Number(coincidencia[1]);
  const mes = Number(coincidencia[2]);
  const dia = Number(coincidencia[3]);

  if (anio < 1 || mes < 1 || mes > 12 || dia < 1) {
    return false;
  }

  const diasPorMes = [
    31,
    esBisiesto(anio) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  return dia <= diasPorMes[mes - 1];
}

export function calcularEdad(fechaNacimiento, fechaReferencia = new Date()) {
  if (!esFechaValida(fechaNacimiento)) {
    throw new Error("Fecha de nacimiento inválida");
  }

  if (!(fechaReferencia instanceof Date) || Number.isNaN(fechaReferencia.getTime())) {
    throw new Error("Fecha de referencia inválida");
  }

  const [anioNacimiento, mesNacimiento, diaNacimiento] = fechaNacimiento
    .split("-")
    .map(Number);
  const anioReferencia = fechaReferencia.getUTCFullYear();
  const mesReferencia = fechaReferencia.getUTCMonth() + 1;
  const diaReferencia = fechaReferencia.getUTCDate();

  let edad = anioReferencia - anioNacimiento;
  if (
    mesReferencia < mesNacimiento ||
    (mesReferencia === mesNacimiento && diaReferencia < diaNacimiento)
  ) {
    edad -= 1;
  }

  if (edad < 0) {
    throw new Error("La fecha de nacimiento no puede ser futura");
  }

  return edad;
}