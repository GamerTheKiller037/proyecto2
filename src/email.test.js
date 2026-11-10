import { describe, it, expect } from "vitest";
import { esCorreoValido, obtenerDominio } from "../src/email.js";

describe("Validaciones de Email", () => {
  it("debe retornar true para un correo válido", () => {
    expect(esCorreoValido("usuario@ejemplo.com")).toBe(true);
  });

  it("debe retornar false para un correo sin @", () => {
    expect(esCorreoValido("usuarioejemplo.com")).toBe(false);
  });

  it("debe retornar false para texto vacío", () => {
    expect(esCorreoValido("")).toBe(false);
  });

  it("debe retornar false si no es un string", () => {
    expect(esCorreoValido(12345)).toBe(false);
  });

  it("debe extraer el dominio correctamente", () => {
    expect(obtenerDominio("test@gmail.com")).toBe("gmail.com");
  });

  it("debe lanzar error al extraer dominio de correo inválido", () => {
    expect(() => obtenerDominio("invalido")).toThrow("Correo inválido");
  });
});
