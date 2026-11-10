import { describe, it, expect } from 'vitest';
import { isValidUrl, hasQueryParams } from '../src/url.js';

describe('Módulo de Validación de URL (url.js)', () => {
  describe('isValidUrl', () => {
    it('debe retornar true para URLs válidas con HTTP o HTTPS', () => {
      expect(isValidUrl('https://google.com')).toBe(true);
      expect(isValidUrl('http://localhost:3000')).toBe(true);
      expect(isValidUrl('https://sub.dominio.com/ruta/ejemplo?id=123')).toBe(true);
    });

    it('debe retornar false para protocolos no permitidos (ftp, mailto, file)', () => {
      expect(isValidUrl('ftp://servidor.com')).toBe(false);
      expect(isValidUrl('mailto:correo@ejemplo.com')).toBe(false);
    });

    it('debe retornar false para strings que no tengan formato de URL', () => {
      expect(isValidUrl('no-soy-una-url')).toBe(false);
      expect(isValidUrl('http://')).toBe(false);
    });

    it('debe retornar false si el tipo de dato recibido no es un string', () => {
      expect(isValidUrl(null)).toBe(false);
      expect(isValidUrl(undefined)).toBe(false);
      expect(isValidUrl(12345)).toBe(false);
      expect(isValidUrl({})).toBe(false);
    });
  });

  describe('hasQueryParams', () => {
    it('debe retornar true cuando la URL contiene parámetros de búsqueda', () => {
      expect(hasQueryParams('https://ejemplo.com/buscar?q=vitest&sort=asc')).toBe(true);
      expect(hasQueryParams('https://api.com/v1/users?page=1')).toBe(true);
    });

    it('debe retornar false cuando la URL no contiene parámetros de búsqueda', () => {
      expect(hasQueryParams('https://ejemplo.com/inicio')).toBe(false);
      expect(hasQueryParams('https://ejemplo.com/')).toBe(false);
    });

    it('debe retornar false si se proporciona una URL inválida o valor no string', () => {
      expect(hasQueryParams('url-invalida')).toBe(false);
      expect(hasQueryParams(null)).toBe(false);
    });
  });
});