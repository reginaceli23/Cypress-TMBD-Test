describe('User changes language without login', () => {
  it ('User Login with valid credential', () => {
    cy.visit('https://www.themoviedb.org/')
        cy.get('[class="logo"]').should("be.visible"); 
        cy.get('#media_v4 > div > div > div.title > h2').should("contain", "Selamat datang");
        cy.get('#media_v4 > div > div > div.title > h3').should("contain", "Millions of movies, TV shows and people to discover. Explore now.");
        cy.get('body > div.page_wrap._wrap > header > div.content > div > div.flex > ul > li.translate > div').click();

cy.get('[id="default_language_popup_label"]') 
  .contains('Bahasa Indonesia (id-ID)')
  .first()
  .parent()      
  .click({ force: true });

  cy.get('[id="fallback_language_popup_label"]')
  .contains('Inggris (en-US)')
  .first()
  .parent()
  .click({ force: true });

  cy.get('[class="no_click button rounded upcase"]').click(); 








  })

})
