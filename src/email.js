export function esCorreoValido(correo) {
  if (!correo || typeof correo !== "string") {
    return false;
  }
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}

export function obtenerDominio(correo) {
  if (!esCorreoValido(correo)) {
    throw new Error("Correo inválido");
  }
  return correo.split("@")[1];
}
