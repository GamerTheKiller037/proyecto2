
import { describe, it, expect } from "vitest";
import {
  validarRFC,
  validarRFCFisica,
  validarRFCMoral,
} from "../src/rfc.js";

describe("Validación de RFC de persona física", () => {
  it("debe aceptar un RFC válido de persona física", () => {
    expect(validarRFCFisica("GODE561231GR8")).toBe(true);
  });

  it("debe rechazar un RFC con longitud incorrecta", () => {
    expect(validarRFCFisica("GODE561231GR")).toBe(false);
  });

  it("debe aceptar letras minúsculas", () => {
    expect(validarRFCFisica("gode561231gr8")).toBe(true);
  });

  it("debe rechazar caracteres especiales inválidos", () => {
    expect(validarRFCFisica("GODE561231G@8")).toBe(false);
  });
});

describe("Validación de RFC de persona moral", () => {
  it("debe aceptar un RFC válido de persona moral", () => {
    expect(validarRFCMoral("ABC010203AB9")).toBe(true);
  });

  it("debe rechazar un RFC con longitud incorrecta", () => {
    expect(validarRFCMoral("ABC010203AB")).toBe(false);
  });

  it("debe rechazar una fecha inexistente", () => {
    expect(validarRFCMoral("ABC010230AB9")).toBe(false);
  });

  it("debe rechazar números en la parte inicial", () => {
    expect(validarRFCMoral("12C010203AB9")).toBe(false);
  });
});

describe("Validación general de RFC", () => {
  it("debe aceptar un RFC de persona física", () => {
    expect(validarRFC("GODE561231GR8")).toBe(true);
  });

  it("debe aceptar un RFC de persona moral", () => {
    expect(validarRFC("ABC010203AB9")).toBe(true);
  });

  it("debe rechazar cadenas vacías y valores nulos", () => {
    expect(validarRFC("")).toBe(false);
    expect(validarRFC(null)).toBe(false);
  });

  it("debe rechazar valores que no sean cadenas", () => {
    expect(validarRFC(1234567890123)).toBe(false);
  });
});
