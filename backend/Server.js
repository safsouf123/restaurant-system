const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bakery_db'
});

db.connect(err => {
  if (err) return console.error(err);
  console.log('Database connected successfully');
});

app.post('/api/auth/signup', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: 'All fields required' });

  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length > 0) return res.status(400).json({ message: 'User already exists' });

    db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ message: 'User created successfully', userId: result.insertId });
    });
  });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'All fields required' });

  db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(400).json({ message: 'Invalid email or password' });

    res.json({ message: 'Login successful' });
  });
});

app.get('/api/orders', (req, res) => {
  db.query('SELECT * FROM orders', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.post('/api/orders', (req, res) => {
  const { user_id, item_name, quantity, price } = req.body;
  db.query('INSERT INTO orders (user_id, item_name, quantity, price) VALUES (?, ?, ?, ?)', [user_id, item_name, quantity, price], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: 'Order created', orderId: result.insertId });
  });
});

app.put('/api/orders/:id', (req, res) => {
  const { id } = req.params;
  const { item_name, quantity, price, status } = req.body;
  db.query('UPDATE orders SET item_name = ?, quantity = ?, price = ?, status = ? WHERE id = ?', [item_name, quantity, price, status, id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Order updated' });
  });
});

app.delete('/api/orders/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM orders WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Order deleted' });
  });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
