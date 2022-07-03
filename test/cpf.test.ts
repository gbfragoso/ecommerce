import { validate } from "../src/cpf";

test("Deve retornar falso quando a string for nula", function () {
	const validation = validate(null);
	expect(validation).toBe(false);
});

test("Deve retornar falso quando a string for undefined", function () {
	const validation = validate(undefined);
	expect(validation).toBe(false);
});

test("Deve retornar falso quando o tamanho do CPF for inválido", function () {
	const validation = validate('01234567890011234');
	expect(validation).toBe(false);
});

test("Deve retornar false quando o CPF tiver dígitos iguais", function () {
	const validation = validate('111.111.111-11');
	expect(validation).toBe(false);
});

test("Deve retornar falso quando o CPF for inválido", function () {
	const validation = validate('012.663.055-08');
	expect(validation).toBe(false);
});

test("Deve retornar true quando o CPF for válido", function () {
	const validation = validate('01266305505');
	expect(validation).toBe(true);
});