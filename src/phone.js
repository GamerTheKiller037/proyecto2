export function esTelefonoValido(telefono) {
  if (!telefono || typeof telefono !== "string") {
    return false;
  }
  const regex = /^\d{10}$/;
  return regex.test(telefono);
}

export function tieneCodigoPais(telefono) {
  if (!telefono || typeof telefono !== "string") {
    return false;
  }
  const regex = /^\+52\d{10}$/;
  return regex.test(telefono);
}

export function normalizarTelefono(telefono) {
  if (!telefono || typeof telefono !== "string") {
    throw new Error("Teléfono inválido");
  }
  const limpio = telefono.replace(/[\s\-()]/g, "");
  if (esTelefonoValido(limpio)) {
    return `+52${limpio}`;
  }
  if (tieneCodigoPais(limpio)) {
    return limpio;
  }
  throw new Error("Teléfono inválido");
}