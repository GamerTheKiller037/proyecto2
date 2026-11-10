/**
 * Valida si un string es una URL bien formada con protocolo HTTP o HTTPS.
 * 
 * @param {string} urlString 
 * @returns {boolean}
 */
export function isValidUrl(urlString) {
  if (typeof urlString !== 'string') {
    return false;
  }

  try {
    const parsedUrl = new URL(urlString.trim());
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Verifica si una URL contiene parámetros de búsqueda (query parameters).
 * 
 * @param {string} urlString 
 * @returns {boolean}
 */
export function hasQueryParams(urlString) {
  if (!isValidUrl(urlString)) {
    return false;
  }

  const parsedUrl = new URL(urlString.trim());
  return parsedUrl.searchParams.size > 0;
}