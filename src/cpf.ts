const FIRST_VERIFICATION_DIGIT = 10;
const SECOND_VERIFICATION_DIGIT = 11;

export function validate(str: string | null | undefined) {

    if (!str) return false;

    const cpf = removePunctuation(str);
    if (isInvalidLength(cpf)) return false;
    if (isIdenticalDigits(cpf)) return false;
    const verificationDigit1 = calculateDigit(cpf, FIRST_VERIFICATION_DIGIT);
    const verificationDigit2 = calculateDigit(cpf, SECOND_VERIFICATION_DIGIT);
    let checkDigit = extractCheckDigit(cpf);
    const calculatedCheckDigit = `${verificationDigit1}${verificationDigit2}`;
    return checkDigit === calculatedCheckDigit;
}

function removePunctuation(str: string) {
    return str.replace(/\D/g, "");
}

function isInvalidLength(str: string) {
    return str.length !== 11;
}

function isIdenticalDigits(cpf: string) {
    const [firstDigit] = cpf;
    return [...cpf].every(digit => digit === firstDigit);
}

function calculateDigit(cpf: string, factor: number) {
    const total = [...cpf].reduce((total, digit) => {
        if (factor > 1) total += parseInt(digit) * factor--;
        return total;
    }, 0);
    const rest = total % 11;
    return (rest < 2) ? 0 : 11 - rest;
}

function extractCheckDigit(cpf: string) {
    return cpf.slice(-2);
}