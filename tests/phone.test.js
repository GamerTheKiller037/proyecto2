import { describe, it, expect } from "vitest";
import {
  esTelefonoValido,
  tieneCodigoPais,
  normalizarTelefono,
} from "../src/phone.js";

describe("Validaciones de Teléfono", () => {
  it("debe retornar true para un teléfono de 10 dígitos", () => {
    expect(esTelefonoValido("4491234567")).toBe(true);
  });

  it("debe retornar false si tiene menos de 10 dígitos", () => {
    expect(esTelefonoValido("449123")).toBe(false);
  });

  it("debe retornar false si contiene letras", () => {
    expect(esTelefonoValido("449123abcd")).toBe(false);
  });

  it("debe retornar false si no es un string", () => {
    expect(esTelefonoValido(4491234567)).toBe(false);
  });

  it("debe retornar true si tiene código de país +52", () => {
    expect(tieneCodigoPais("+524491234567")).toBe(true);
  });

  it("debe retornar false si no tiene código de país", () => {
    expect(tieneCodigoPais("4491234567")).toBe(false);
  });

  it("debe agregar +52 a un teléfono de 10 dígitos", () => {
    expect(normalizarTelefono("4491234567")).toBe("+524491234567");
  });

  it("debe limpiar espacios y guiones al normalizar", () => {
    expect(normalizarTelefono("449-123-4567")).toBe("+524491234567");
  });

  it("debe lanzar error al normalizar un teléfono inválido", () => {
    expect(() => normalizarTelefono("123")).toThrow("Teléfono inválido");
  });
});