import express from 'express';
const app = express();

//To solve error: __dirname is not defined in ES module scope
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import ejsMate from 'ejs-mate';

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/user', (req, res) => {
  res.render('user');
});

app.get('/show', (req, res) => {
  res.render('show');
});

app.listen(5050, () => {
  console.log('Listening to 5050');
});
