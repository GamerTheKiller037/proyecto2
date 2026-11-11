import { describe, it, expect } from "vitest";
import { convertirASlug, esPalindromo } from "../src/text.js";

describe("Utilidades de Texto", () => {
  it("debe convertir 'Hola Mundo' a 'hola-mundo'", () => {
    expect(convertirASlug("Hola Mundo")).toBe("hola-mundo");
  });

  it("debe quitar acentos, símbolos y espacios extra del slug", () => {
    expect(convertirASlug("  ¡Árbol de Navidad!  ")).toBe("arbol-de-navidad");
  });

  it("debe lanzar error si el slug no recibe un string", () => {
    expect(() => convertirASlug(123)).toThrow("El texto debe ser un string");
  });

  it("debe detectar palíndromos ignorando espacios y acentos", () => {
    expect(esPalindromo("Anita lava la tina")).toBe(true);
  });

  it("debe retornar false para texto no palíndromo o vacío", () => {
    expect(esPalindromo("Hola")).toBe(false);
    expect(esPalindromo("")).toBe(false);
  });
});
