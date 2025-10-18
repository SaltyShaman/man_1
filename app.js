import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve everything in public
app.use(express.static(path.join(__dirname, 'public')));

// ------------------------PAGES -----------------------------

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/frontend/index.html'));
});


app.get('/web-server', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/web-server/web-server.html'));
});

app.get('/no-chatgpt', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/no-chatgpt/no-chatgpt.html'));
})

app.get('/seperate', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/seperate/seperate.html'));
})


const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT); 
});