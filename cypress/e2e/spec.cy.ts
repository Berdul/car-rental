describe('UI testing', () => {
  it('Full user flow', () => {
    cy.visit('/')
    cy.contains('Stations available')

    cy.get('mat-expansion-panel-header').first().click()
    cy.contains('Model')
    cy.contains('Price')
    cy.contains('Rate')
    cy.contains('Condition')

    cy.get('mat-row').first().click()
    cy.url().should('includes', 'station')
    cy.url().should('includes', 'car')
    cy.contains('Rent it')
    cy.get('[id*="back-home-link"]')
    cy.get('[id*="car-img"]')
    cy.get('[id*="station-adress"]')
    cy.get('[formControlName="startDate"').click().type('2023-10-06T08:30')
    cy.get('[formControlName="endDate"').click().type('2023-10-10T12:30')
    cy.get('[id*="submit-btn"]').click()

    cy.url().should('includes', 'confirmation')
    cy.get('[class*="title"]')
    cy.get('[id*="total"]')
    cy.get('[id*="back-home-btn"]').click()

    cy.url().should('includes', 'home')
  })

  it('User browsing cars', () => {
    cy.visit('/')
    cy.contains('Stations available')
    cy.get('mat-expansion-panel-header').first().click()
    cy.contains('Model')
    cy.contains('Price')
    cy.contains('Rate')
    cy.contains('Condition')
    cy.get('mat-row').first().click()

    cy.url().should('includes', 'station')
    cy.url().should('includes', 'car')
    cy.contains('Rent it')
    cy.get('[id*="back-home-link"]').click()

    cy.url().should('includes', 'home')
    cy.get('mat-expansion-panel-header').eq(1).click()
    cy.contains('Model')
    cy.contains('Price')
    cy.contains('Rate')
    cy.contains('Condition')
    cy.get('mat-row').eq(1).click()
  
    cy.url().should('includes', 'station')
    cy.url().should('includes', 'car')
    cy.contains('Rent it')
    cy.get('[id*="back-home-link"]').click()

    cy.url().should('includes', 'home')

  })
})
