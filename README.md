# TMDB Cypress Automation Project

## Project Overview
Project ini merupakan automation testing menggunakan **Cypress** untuk menguji fitur utama pada website The Movie Database (TMDb).  
Automation dibuat untuk memastikan fungsi aplikasi berjalan sesuai requirement dan memberikan pengalaman pengguna yang konsisten.


Website:
https://www.themoviedb.org

The automation simulates user actions such as:
- Changing language to Indonesian
- Navigating through profile menu: Overview → Favorites → Movies

---

## Objective
- Memvalidasi fitur utama pada website TMDb
- Memastikan fungsi favorite movie dan navigasi berjalan dengan baik
- Mengubah bahasa antara English dan Bahasa Indonesia
- Memastikan icon favorite movie dapat berfungsi ketika sudah login
- Memastikan user mengakses halaman favorite movie

## Test Coverage
Fitur yang diuji dalam automation ini:
- Change Language (English / Bahasa Indonesia)
- Movie Listing
- Add Movie to Favorite
- Favorite Movies Page
- Sorting Favorite Movies


## Tools & Technology
- Cypress
- JavaScript
- Node.js
- GitHub
---

## Project Structure
project-root/
├── cypress/
│ ├── e2e/
│ │ └── tmdb.cy.js
│ ├── fixtures/
│ └── support/
│
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md


---