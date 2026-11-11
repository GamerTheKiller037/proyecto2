
/**
 * Elimina espacios y guiones del número de tarjeta.
 */
function cleanCardNumber(cardNumber) {
    if (typeof cardNumber !== 'string') {
        return '';
    }

    return cardNumber.replace(/[\s-]/g, '');
}

/**
 * Detecta el emisor de la tarjeta.
 */
export function detectCardIssuer(cardNumber) {
    const number = cleanCardNumber(cardNumber);

    if (/^4/.test(number) && [13, 16, 19].includes(number.length)) {
        return 'Visa';
    }

    if (
        /^(5[1-5]|2(2[2-9]|[3-6]\d|7[01]|720))/.test(number) &&
        number.length === 16
    ) {
        return 'Mastercard';
    }

    if (/^3[47]/.test(number) && number.length === 15) {
        return 'AMEX';
    }

    return 'Desconocida';
}

/**
 * Valida un número mediante el algoritmo de Luhn.
 */
export function luhnCheck(cardNumber) {
    const number = cleanCardNumber(cardNumber);

    if (!/^\d+$/.test(number)) {
        return false;
    }

    let sum = 0;
    let doubleDigit = false;

    for (let i = number.length - 1; i >= 0; i--) {
        let digit = Number(number[i]);

        if (doubleDigit) {
            digit *= 2;

            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        doubleDigit = !doubleDigit;
    }

    return sum % 10 === 0;
}

/**
 * Valida la tarjeta y comprueba su emisor.
 */
export function validateCreditCard(cardNumber) {
    const number = cleanCardNumber(cardNumber);
    const issuer = detectCardIssuer(number);

    if (issuer === 'Desconocida') {
        return false;
    }

    return luhnCheck(number);
}
