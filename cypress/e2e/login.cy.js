// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

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
  })
    it ('User Login with invalid credential - Username invalid', () => {
    cy.visit('https://www.themoviedb.org/')
        cy.get('[class="logo"]').should("be.visible"); 
        cy.get('#media_v4 > div > div > div.title > h2').should("contain", "Selamat datang");
        cy.get('#media_v4 > div > div > div.title > h3').should("contain", "Millions of movies, TV shows and people to discover. Explore now.");
        cy.get('body > div.page_wrap._wrap > header > div.content > div > div.flex > ul > li:nth-child(3) > a').click();
        cy.get('#main > section > div > div > div > h2').should('have.text','Masuk ke Akun anda')
        cy.get('#username').type('daisy');
        cy.get('#password').type('daisy26');
        cy.get('#login_button').click();
        cy.get('#main > section > div > div > div > div > div > a > h2').should("be.visible").and("contain.text","There was a problem");
        cy.get('li').should('contain.text', 'remaining login attempts').invoke('text').should('match', /You have \d+ remaining login attempts\./);
    })

    it ('User Login with invalid credential - Password invalid', () => {
    cy.visit('https://www.themoviedb.org/')
        cy.get('[class="logo"]').should("be.visible"); 
        cy.get('#media_v4 > div > div > div.title > h2').should("contain", "Selamat datang");
        cy.get('#media_v4 > div > div > div.title > h3').should("contain", "Millions of movies, TV shows and people to discover. Explore now.");
        cy.get('body > div.page_wrap._wrap > header > div.content > div > div.flex > ul > li:nth-child(3) > a').click();
        cy.get('#main > section > div > div > div > h2').should('have.text','Masuk ke Akun anda')
        cy.get('#username').type('daisy26');
        cy.get('#password').type('daisY');
        cy.get('#login_button').click();
        cy.get('#main > section > div > div > div > div > div > a > h2').should("be.visible").and("contain.text","There was a problem");
        cy.get('li').should('contain.text', 'remaining login attempts').invoke('text').should('match', /You have \d+ remaining login attempts\./);
    })


    it ('User Login with invalid credential - Username blank', () => {
    cy.visit('https://www.themoviedb.org/')
        cy.get('[class="logo"]').should("be.visible"); 
        cy.get('#media_v4 > div > div > div.title > h2').should("contain", "Selamat datang");
        cy.get('#media_v4 > div > div > div.title > h3').should("contain", "Millions of movies, TV shows and people to discover. Explore now.");
        cy.get('body > div.page_wrap._wrap > header > div.content > div > div.flex > ul > li:nth-child(3) > a').click();
        cy.get('#main > section > div > div > div > h2').should('have.text','Masuk ke Akun anda')
        // cy.get('#username').type('daisy26');
        cy.get('#password').type('daisy26');
        cy.get('#login_button').click();
        cy.get('#main > section > div > div > div > div > div > a > h2').should("be.visible").and("contain.text","There was a problem");
        cy.get('li').should('contain.text', 'remaining login attempts').invoke('text').should('match', /You have \d+ remaining login attempts\./);
    })

    it ('User Login with invalid credential - Password blank', () => {
    cy.visit('https://www.themoviedb.org/')
        cy.get('[class="logo"]').should("be.visible"); 
        cy.get('#media_v4 > div > div > div.title > h2').should("contain", "Selamat datang");
        cy.get('#media_v4 > div > div > div.title > h3').should("contain", "Millions of movies, TV shows and people to discover. Explore now.");
        cy.get('body > div.page_wrap._wrap > header > div.content > div > div.flex > ul > li:nth-child(3) > a').click();
        cy.get('#main > section > div > div > div > h2').should('have.text','Masuk ke Akun anda')
        cy.get('#username').type('daisy26');
        // cy.get('#password').type('daisY');
        cy.get('#login_button').click();
        // cy.get('#main > section > div > div > div > div > div > a > h2').should("be.visible").and("contain.text","There was a problem");
        // cy.get('li').should('contain.text', 'remaining login attempts').invoke('text').should('match', /You have \d+ remaining login attempts\./);
    })

     it ('User Login with invalid credential - Username and password blank', () => {
    cy.visit('https://www.themoviedb.org/')
        cy.get('[class="logo"]').should("be.visible"); 
        cy.get('#media_v4 > div > div > div.title > h2').should("contain", "Selamat datang");
        cy.get('#media_v4 > div > div > div.title > h3').should("contain", "Millions of movies, TV shows and people to discover. Explore now.");
        cy.get('body > div.page_wrap._wrap > header > div.content > div > div.flex > ul > li:nth-child(3) > a').click();
        cy.get('#main > section > div > div > div > h2').should('have.text','Masuk ke Akun anda')
        // cy.get('#username').type('daisy26');
        // cy.get('#password').type('daisy26');
        cy.get('#login_button').click();
        // cy.get('#main > section > div > div > div > div > div > a > h2').should("be.visible").and("contain.text","There was a problem");
        // cy.get('li').should('contain.text', 'remaining login attempts').invoke('text').should('match', /You have \d+ remaining login attempts\./);
    })
})
