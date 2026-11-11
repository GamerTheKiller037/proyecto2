function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

export function convertirASlug(texto) {
  if (typeof texto !== "string") {
    throw new Error("El texto debe ser un string");
  }
  return normalizar(texto)
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function esPalindromo(texto) {
  if (typeof texto !== "string" || texto.trim() === "") {
    return false;
  }
  const limpio = normalizar(texto).replace(/[^a-z0-9]/g, "");
  return limpio === limpio.split("").reverse().join("");
}
