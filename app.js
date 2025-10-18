import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Compute __filename and __dirname once
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ------------------------ ROUTES -----------------------------

app.get('/', (req, res) => {
    res.render('index', { title: 'Mandatory 1' });
});

app.get('/web-server', (req, res) => {
    res.render('web-server', { title: 'How to start a web server' });
});

app.get('/no-chatgpt', (req, res) => {
    res.render('no-chatgpt', { title: 'How to not use ChatGPT' });
});

app.get('/seperate', (req, res) => {
    res.render('seperate', { title: 'Separate backend and frontend' });
});

app.get('/wishlist', (req, res) => {
    res.render('wishlist', { title: 'Wishlist for elective' });
});

// ------------------------ PORT -------------------------------
const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
});
