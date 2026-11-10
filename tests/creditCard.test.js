
import { describe, it, expect } from 'vitest';
import {
    luhnCheck,
    detectCardIssuer,
    validateCreditCard
} from '../src/creditCard.js';

describe('Validador de tarjetas de crédito', () => {

    // PRUEBA 1: Visa válida
    it('debe validar una tarjeta Visa correcta', () => {
        expect(validateCreditCard('4111111111111111')).toBe(true);
    });

    // PRUEBA 2: Mastercard válida
    it('debe validar una tarjeta Mastercard correcta', () => {
        expect(validateCreditCard('5555555555554444')).toBe(true);
    });

    // PRUEBA 3: American Express válida
    it('debe validar una tarjeta AMEX correcta', () => {
        expect(validateCreditCard('378282246310005')).toBe(true);
    });

    // PRUEBA 4: Número con algoritmo Luhn incorrecto
    it('debe rechazar una tarjeta con dígito de control incorrecto', () => {
        expect(luhnCheck('4111111111111112')).toBe(false);
    });

    // PRUEBA 5: Emisor desconocido
    it('debe identificar como desconocido un emisor no soportado', () => {
        expect(detectCardIssuer('1234567890123456')).toBe('Desconocida');
    });

    // PRUEBA 6: Longitud incorrecta
    it('debe rechazar una Visa con longitud incorrecta', () => {
        expect(validateCreditCard('411111111111111')).toBe(false);
    });

    // PRUEBA 7: Número vacío
    it('debe rechazar una tarjeta vacía', () => {
        expect(validateCreditCard('')).toBe(false);
    });

    // PRUEBA 8: Caracteres no numéricos
    it('debe rechazar números que contienen letras', () => {
        expect(luhnCheck('4111ABC111111111')).toBe(false);
    });

    // PRUEBA 9: Espacios y guiones
    it('debe aceptar una tarjeta con espacios y guiones', () => {
        expect(validateCreditCard('4111 1111-1111 1111')).toBe(true);
    });

    // PRUEBA 10: Entrada que no es una cadena
    it('debe rechazar una entrada que no sea texto', () => {
        expect(validateCreditCard(4111111111111111)).toBe(false);
    });

});
