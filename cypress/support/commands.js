import 'cypress-wait-until';

Cypress.Commands.add("getRequest", () => {

    cy.getRequest(cypress.config('darts').url).then(response => {

        expect(response).property('status').to.equal(200);
        expect(response.body.id).to.equal('D_sport');

        const myObject = response.body.event.map(elem => JSON.stringify(elem, null, 4));
        myObject.map(elem => {
            expect(elem).to.not.be.eq(null);
            expect(elem.compId).to.be.eq(cypress.config('dartsID'));
            expect(elem.sport).to.be.eq('D_sport');

        })
    })

    Cypress.Commands.add('clickLink', (label) => {
        cy.get('a').contains(label).click()
    });

    Cypress.Commands.add('getText', { prevSubject: 'element' },
        ($element) => {
            cy.wrap($element).scrollIntoView()
            return cy.wrap($element).invoke('text')
        });

    Cypress.Commands.add('getLink', {
        prevSubject: 'optional'
    }, (subject) => {
        if (subject) {
            cy.get(subject).get('a').its('href');
        } else {
            cy.get('a').its('href');
        }
    })

    // Cypress.Commands.add('verify user is in darts Event', () => {

    //     cy.request('')
    //         .then((response) => {

    //             expect(response).property('status').to.equal(200)
    //             expect(response).property('body').to.have.property('length').and.be.oneOf([500, 501])
    //             expect(response).to.include.keys('headers', 'duration')
    //         })
    // })

    // Cypress.Commands.add('verifyDartsUser', () => {

    //     cy.intercept('GET', "https://sports.pokerstarssports.uk/sportsbook/v1/api/getCompetitionEvents?competitionId=17806817&marketTypes=DARTS%3AFT%3AML&includeOutrights=false&channelId=6&locale=en-gb&siteId=32768").as('darts')
    //     // trigger network calls by manipulating web app's user interface, then
    //     cy.wait('@darts').should('have.property', 'response.statusCode', 200)
    //     // we can grab the completed interception object again to run more assertions
    //     // using cy.get(<alias>)

    //     cy.get('@new-user').should(({ request, response }) => {

    //         .then(function (response) {
    //             expect(response.body.id).to.equal('17806817');
    //             return response
    //         })
    // }))
    //         // expect(request.url).to.match(/\/users$/)
    //         // expect(request.method).to.equal('POST')


    //     cy.get('@darts') // yields the same interception object
    //         .its('response.body.id')
    //         expect(response.body.id).to.be.eq('17806817');
    // })
});