import { describe, it, expect } from 'vitest';
import { validateCURP, getSexFromCURP, getBirthDateFromCURP } from '../src/curp.js';

const CURP_MUJER = 'HEGG560427MVZRRL04';
const CURP_HOMBRE = 'BADD110313HCMLNS09';
const CURP_SIGLO_XXI = 'BADD110313HCMLNSA9';

describe('validateCURP', () => {
  it('acepta una CURP válida de mujer', () => {
    expect(validateCURP(CURP_MUJER)).toBe(true);
  });

  it('acepta una CURP válida de hombre', () => {
    expect(validateCURP(CURP_HOMBRE)).toBe(true);
  });

  it('rechaza una cadena vacía', () => {
    expect(validateCURP('')).toBe(false);
  });

  it('rechaza valores que no son texto', () => {
    expect(validateCURP(null)).toBe(false);
    expect(validateCURP(undefined)).toBe(false);
    expect(validateCURP(12345)).toBe(false);
  });

  it('rechaza longitud incorrecta (17 y 19 caracteres)', () => {
    expect(validateCURP('HEGG560427MVZRRL0')).toBe(false);
    expect(validateCURP('HEGG560427MVZRRL044')).toBe(false);
  });

  it('acepta minúsculas y espacios alrededor', () => {
    expect(validateCURP('  hegg560427mvzrrl04 ')).toBe(true);
  });

  it('rechaza caracteres inválidos', () => {
    expect(validateCURP('HEGG56042@MVZRRL04')).toBe(false);
    expect(validateCURP('HEGG560427MVZRRL0!')).toBe(false);
  });

  it('rechaza sexo, estado o mes inválidos', () => {
    expect(validateCURP('HEGG560427ZVZRRL04')).toBe(false); // sexo Z
    expect(validateCURP('HEGG560427MXXRRL04')).toBe(false); // estado XX
    expect(validateCURP('HEGG561327MVZRRL04')).toBe(false); // mes 13
  });

  it('rechaza fechas que no existen (30 de febrero)', () => {
    expect(validateCURP('HEGG560230MVZRRL04')).toBe(false);
  });
});

describe('getSexFromCURP', () => {
  it('extrae el sexo de CURPs válidas', () => {
    expect(getSexFromCURP(CURP_MUJER)).toBe('Mujer');
    expect(getSexFromCURP(CURP_HOMBRE)).toBe('Hombre');
  });

  it('devuelve null si la CURP es inválida', () => {
    expect(getSexFromCURP('ABC')).toBeNull();
  });
});

describe('getBirthDateFromCURP', () => {
  it('extrae la fecha en formato AAAA-MM-DD según el siglo', () => {
    expect(getBirthDateFromCURP(CURP_MUJER)).toBe('1956-04-27');
    expect(getBirthDateFromCURP(CURP_HOMBRE)).toBe('1911-03-13');
    expect(getBirthDateFromCURP(CURP_SIGLO_XXI)).toBe('2011-03-13');
  });

  it('devuelve null si la CURP es inválida', () => {
    expect(getBirthDateFromCURP('')).toBeNull();
  });
});