Given(/^que eu acesso a calculadora$/, () => {
	cy.visit('/');
});

When(/^desejo realizar uma "([^"]*)"$/, (operacaoDesejada) => {
	let operador;

	switch (operacaoDesejada) {
		case 'soma':
			operador = '+'
			break;
		case 'subtração':
			operador = '-'
			break;
		case 'multiplicação':
			operador = 'x'
			break;
		case 'divisão':
			operador = '÷'
			break;
		default:
			break;
	}
	Cypress.env('operador', operador);
});

When(/^informar os valor "([^"]*)" e "([^"]*)"$/, (num1, num2) => {
	cy.get(`div[class="button"], .button.zero`).as('valores');
	cy.get('.operator').as('operadores');

	cy.get('@valores').contains(num1).click();
	cy.get('@operadores')
		.contains(`${Cypress.env('operador')}`)
		.click();
	cy.get('@valores').contains(num2).click();
});

When(/^finalizar a conta$/, () => {
	cy.get('@operadores').contains('=').click()
});

Then(/^devo obter o resultado "([^"]*)"$/, (resultadoEsperado) => {
	cy.get('.display').as('resultado')

    cy.get('@resultado')
        .invoke('text')
        .should('be.equal', resultadoEsperado)
});
