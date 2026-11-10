
import { describe, it, expect } from "vitest";
import {
  hasMinLength,
  hasUppercase,
  hasLowercase,
  hasNumber,
  hasSpecialChar,
  validatePassword,
} from "../src/password.js";

describe("Password Validator", () => {
  it("1. Acepta una contraseña que cumple todos los requisitos", () => {
    expect(validatePassword("Cesar123!").valid).toBe(true);
  });

  it("2. Rechaza contraseñas con menos de 8 caracteres", () => {
    expect(hasMinLength("C3!abc")).toBe(false);
  });

  it("3. Rechaza contraseñas sin mayúsculas", () => {
    expect(hasUppercase("cesar123!")).toBe(false);
  });

  it("4. Rechaza contraseñas sin minúsculas", () => {
    expect(hasLowercase("CESAR123!")).toBe(false);
  });

  it("5. Rechaza contraseñas sin números", () => {
    expect(hasNumber("CesarAbc!")).toBe(false);
  });

  it("6. Rechaza contraseñas sin símbolos especiales", () => {
    expect(hasSpecialChar("Cesar1234")).toBe(false);
  });

  it("7. Rechaza cadenas vacías", () => {
    expect(validatePassword("").valid).toBe(false);
  });

  it("8. Rechaza valores que no sean cadenas de texto", () => {
    expect(validatePassword(null).valid).toBe(false);
    expect(validatePassword(12345678).valid).toBe(false);
  });

  it("9. Detecta todos los requisitos faltantes", () => {
    const result = validatePassword("cesar");

    expect(result.valid).toBe(false);
    expect(result.errors).toEqual([
      "minLength",
      "uppercase",
      "number",
      "specialChar",
    ]);
  });

  it("10. Comprueba que una contraseña segura cumpla todas las reglas", () => {
    const result = validatePassword("MiClave2026@");

    expect(result.valid).toBe(true);
    expect(result.errors).toEqual([]);
    expect(Object.values(result.checks).every(Boolean)).toBe(true);
  });
});
