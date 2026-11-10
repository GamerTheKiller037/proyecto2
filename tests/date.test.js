
import { describe, it, expect } from "vitest";
import { calcularEdad, esBisiesto, esFechaValida } from "../src/date.js";

describe("Validaciones de fechas", () => {
  it("debe aceptar una fecha válida en formato YYYY-MM-DD", () => {
    expect(esFechaValida("2024-03-15")).toBe(true);
  });

  it("debe rechazar una fecha inexistente", () => {
    expect(esFechaValida("2024-02-30")).toBe(false);
  });

  it("debe aceptar el 29 de febrero en un año bisiesto", () => {
    expect(esFechaValida("2024-02-29")).toBe(true);
  });

  it("debe rechazar valores que no sean cadenas de fecha", () => {
    expect(esFechaValida(20240101)).toBe(false);
    expect(esFechaValida("01/01/2024")).toBe(false);
  });
});

describe("Años bisiestos", () => {
  it("debe identificar como bisiesto un año divisible entre 4", () => {
    expect(esBisiesto(2024)).toBe(true);
  });

  it("debe identificar como no bisiesto un siglo no divisible entre 400", () => {
    expect(esBisiesto(1900)).toBe(false);
  });

  it("debe identificar como bisiesto un siglo divisible entre 400", () => {
    expect(esBisiesto(2000)).toBe(true);
  });
});

describe("Cálculo de edad", () => {
  it("debe calcular la edad si ya pasó el cumpleaños", () => {
    expect(calcularEdad("2000-05-10", new Date("2024-05-11T00:00:00Z"))).toBe(24);
  });

  it("debe restar un año si todavía no pasó el cumpleaños", () => {
    expect(calcularEdad("2000-05-10", new Date("2024-05-09T00:00:00Z"))).toBe(23);
  });

  it("debe lanzar un error para una fecha de nacimiento inválida", () => {
    expect(() =>
      calcularEdad("2000-02-30", new Date("2024-05-11T00:00:00Z")),
    ).toThrow("Fecha de nacimiento inválida");
  });

  it("debe lanzar un error si la fecha de nacimiento es futura", () => {
    expect(() =>
      calcularEdad("2025-01-01", new Date("2024-05-11T00:00:00Z")),
    ).toThrow("La fecha de nacimiento no puede ser futura");
  });
});