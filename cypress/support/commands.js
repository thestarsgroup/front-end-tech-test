import 'cypress-wait-until';


Cypress.Commands.add("clickLink", (label) => {
    cy.get('a').contains(label).click()
})

Cypress.Commands.add("getText", { prevSubject: 'element' }, (element) => {
    cy.wrap($element).scrollIntoView()
    return cy.wrap($element).invoke('text')
})

Cypress.Commands.add('getLink', { prevSubject: 'optional' }, (subject) => {
    
    if (subject) {
        cy.get(subject).get('a').its('href');
    } else {
        cy.get('a').its('href');
    }
})
  
Cypress.Commands.add("confirm", () => {

    cy.request(Cypress.config('footy').url)
        .then((response) => {

            expect(response).property('status').to.equal(200)

        })
})


