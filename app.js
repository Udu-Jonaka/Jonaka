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

// If files are in a public folder:
app.get('/sitemap.xml', (req, res) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://jonaka-seven.vercel.app/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://jonaka-seven.vercel.app/#skills</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jonaka-seven.vercel.app/#portfolio</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jonaka-seven.vercel.app/#contact</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

  res.header('Content-Type', 'application/xml');
  res.send(sitemap);
});

// Robots.txt route
app.get('/robots.txt', (req, res) => {
  const robots = `User-agent: *
Allow: /

Sitemap: https://jonaka-seven.vercel.app/sitemap.xml`;
  
  res.type('text/plain');
  res.send(robots);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
