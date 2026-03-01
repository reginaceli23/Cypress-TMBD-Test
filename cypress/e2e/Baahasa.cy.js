describe('Login Feature', () => {
  it ('User Login with valid credential', () => {
    cy.visit('https://www.themoviedb.org/')
        cy.get('[class="logo"]').should("be.visible"); 
        cy.get('#media_v4 > div > div > div.title > h2').should("contain", "Selamat datang");
        cy.get('#media_v4 > div > div > div.title > h3').should("contain", "Millions of movies, TV shows and people to discover. Explore now.");
        cy.get('body > div.page_wrap._wrap > header > div.content > div > div.flex > ul > li:nth-child(3) > a').click();
        cy.get('#main > section > div > div > div > h2').should('have.text','Masuk ke Akun anda')
        cy.get('#username').type('daisy26');
        cy.get('#password').type('daisy26');
        cy.get('#login_button').click();
        cy.url().should("include", "https://www.themoviedb.org/u/daisy26");

        cy.get('body > div.page_wrap._wrap > header > div.content > div > div.flex > ul > li.translate > div').click();


        cy.get('[id="default_language_popup_label"]')
  .contains('Bahasa Indonesia (id-ID')
  .first()
  .parent()        // pindah ke parent jika label ada child
  .click({ force: true });

cy.get('[id="fallback_language_popup_label"]')
  .contains('Inggris (en-US)')
  .last()
  .parent()
  .click({ force: true });

  cy.get('[class="refresh"]').click(); 
  })
})