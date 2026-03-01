describe('Mark as Favorite', () => {
  it ('Add a movie to favorites from the movie listing', () => {
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

cy.contains('Overview').click();

// klik Favorites
cy.contains('Favorites').click();

// pilih Movies
cy.contains('Movies').click({ force: true });
cy.visit('https://www.themoviedb.org/u/daisy26/favorites');




       
    




  })
})