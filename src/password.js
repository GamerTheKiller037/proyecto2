
/**
 * Comprueba si la contraseña tiene al menos 8 caracteres.
 */
export function hasMinLength(password) {
  return typeof password === "string" && password.length >= 8;
}

/**
 * Comprueba si contiene al menos una letra mayúscula.
 */
export function hasUppercase(password) {
  return typeof password === "string" && /[A-Z]/.test(password);
}

/**
 * Comprueba si contiene al menos una letra minúscula.
 */
export function hasLowercase(password) {
  return typeof password === "string" && /[a-z]/.test(password);
}

/**
 * Comprueba si contiene al menos un número.
 */
export function hasNumber(password) {
  return typeof password === "string" && /[0-9]/.test(password);
}

/**
 * Comprueba si contiene al menos un símbolo especial.
 */
export function hasSpecialChar(password) {
  return typeof password === "string" && /[^A-Za-z0-9\s]/.test(password);
}

/**
 * Valida todos los requisitos de seguridad de una contraseña.
 */
export function validatePassword(password) {
  const checks = {
    minLength: hasMinLength(password),
    uppercase: hasUppercase(password),
    lowercase: hasLowercase(password),
    number: hasNumber(password),
    specialChar: hasSpecialChar(password),
  };

  const errors = Object.entries(checks)
    .filter(([, isValid]) => !isValid)
    .map(([requirement]) => requirement);

  return {
    valid: Object.values(checks).every(Boolean),
    checks,
    errors,
  };
}
