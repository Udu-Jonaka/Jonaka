import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4000;

// Middleware
app.use(express.urlencoded({ extended: true }));  // replaces body-parser
app.use(express.static(path.join(__dirname, 'public')));


// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// get requests
app.get('/', (req, res) => {
    res.render('index');
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
