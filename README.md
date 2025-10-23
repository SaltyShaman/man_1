# Mandatory 1 – Node.js SSR Project

## Project Overview
This project demonstrates a simple **Server-Side Rendered (SSR) Node.js application** using **Express** and **EJS**.  
It includes a main layout with shared header and footer, page-specific content, CSS, and JavaScript.

## Folder Structure

man_1/
├── app.js # Main server file
├── pageConfig.js # Page metadata (title, CSS, scripts) 
├── public/ # Static assets (CSS, JS, images)
├── views/
│ ├── layouts/
│ │ └── main.ejs # Main layout with header/footer
│ ├── partials/
│ │ ├── header.ejs
│ │ └── footer.ejs
│ └── *.ejs # Page templates (index, web-server, etc.)
└── README.md # Project documentation


## After-deadline Goals
1. Keep `app.js` as clear as possible  
2. Move routing outside of `app.js`  
3. Reusable parts (header/footer) sent to all pages  
4. Improve server-side rendering and fix existing pages  
5. Phase out `__dirname` usage

## Pages
- **Index** – Welcome page  
- **Web Server** – How to start a web server  
- **No ChatGPT** – Guide to not using ChatGPT  
- **Separate** – Separate backend and frontend  
- **Wishlist** – Wishlist for elective  

> Links to each page are in the header.  

## Tech Stack

Node.js 24

Express ^5.1.0

EJS ^3.1.10

express-ejs-layouts ^2.5.1

Note: This project is using ES modules ("type": "module" in package.json)

## How to Run

```bash
npm install


nodemon app.js

Open browser at:
http://localhost:8080/

