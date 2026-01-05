// Deployment fix: force redeploy on Railway
require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());
//Fixed instead of createConnection i did createPool(January 5 2026)
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT || 3306),

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,

  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});



app.get("/", (req, res) => res.send("ok"));

app.post("/api/auth/signup", (req, res) => {
const { name, email, password, role } = req.body;
if (!name || !email || !password)
return res.status(400).json({ message: "All fields required" });

db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
if (err) return res.status(500).json(err);
if (results.length > 0)
return res.status(400).json({ message: "User already exists" });

const userRole = role || "user";
db.query(
"INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
[name, email, password, userRole],
(err, result) => {
if (err) return res.status(500).json(err);
res.status(201).json({
message: "User created successfully",
userId: result.insertId,
role: userRole,
});
}
);
});
});

app.post("/api/auth/login", (req, res) => {
const { email, password } = req.body;
if (!email || !password)
return res.status(400).json({ message: "All fields required" });

db.query(
"SELECT * FROM users WHERE email = ? AND password = ?",
[email, password],
(err, results) => {
if (err) return res.status(500).json(err);
if (results.length === 0)
return res.status(400).json({ message: "Invalid email or password" });

const user = results[0];
res.json({
message: "Login successful",
userId: user.id,
role: user.role,
name: user.name,
});
}
);
});

function isAdmin(req, res, next) {
const userId = req.query.userId;
if (!userId) return res.status(401).json({ message: "User ID required" });

db.query("SELECT role FROM users WHERE id = ?", [userId], (err, results) => {
if (err) return res.status(500).json(err);
if (results.length === 0 || results[0].role !== "admin")
return res.status(403).json({ message: "Access denied. Admins only." });
next();
});
}

app.get("/api/admin/users", isAdmin, (req, res) => {
db.query("SELECT id, name, email, role FROM users", (err, results) => {
if (err) return res.status(500).json(err);
res.json(results);
});
});

app.get("/api/admin/orders", isAdmin, (req, res) => {
db.query("SELECT * FROM orders ORDER BY id DESC", (err, results) => {
if (err) return res.status(500).json(err);
res.json(results);
});
});

app.delete("/api/admin/orders/:id", isAdmin, (req, res) => {
db.query("DELETE FROM orders WHERE id = ?", [req.params.id], (err) => {
if (err) return res.status(500).json(err);
res.json({ message: "Order deleted" });
});
});

app.put("/api/admin/orders/:id/status", isAdmin, (req, res) => {
const { status } = req.body;
db.query(
"UPDATE orders SET status = ? WHERE id = ?",
[status, req.params.id],
(err) => {
if (err) return res.status(500).json(err);
res.json({ message: "Status updated" });
}
);
});

app.get("/api/admin/messages", isAdmin, (req, res) => {
db.query(
"SELECT * FROM contact_messages ORDER BY created_at DESC",
(err, results) => {
if (err) return res.status(500).json(err);
res.json(results);
}
);
});

app.get("/api/admin/users-with-orders", isAdmin, (req, res) => {
const sql = `
SELECT
u.id AS user_id,
u.name AS user_name,
u.email AS user_email,
u.role AS user_role,
o.id AS order_id,
o.item_name,
o.quantity,
o.price,
o.status
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
ORDER BY u.id DESC, o.id DESC
`;
db.query(sql, (err, results) => {
if (err) return res.status(500).json(err);
res.json(results);
});
});

app.get("/api/menu", (req, res) => {
db.query("SELECT * FROM menu", (err, results) => {
if (err) return res.status(500).json(err);
res.json(results);
});
});

app.get("/api/menu/:id", (req, res) => {
db.query(
"SELECT * FROM menu WHERE id = ?",
[req.params.id],
(err, results) => {
if (err) return res.status(500).json(err);
if (results.length === 0)
return res.status(404).json({ message: "Item not found" });
res.json(results[0]);
}
);
});

app.post("/api/orders", (req, res) => {
const { user_id, item_name, quantity, price } = req.body;
db.query(
"INSERT INTO orders (user_id, item_name, quantity, price) VALUES (?, ?, ?, ?)",
[user_id, item_name, quantity, price],
(err, result) => {
if (err) return res.status(500).json(err);
res
.status(201)
.json({ message: "Order created", orderId: result.insertId });
}
);
});

app.get("/api/orders", (req, res) => {
const userId = req.query.userId;
if (!userId)
return res.status(400).json({ message: "userId is required" });

db.query(
"SELECT * FROM orders WHERE user_id = ? ORDER BY id DESC",
[userId],
(err, results) => {
if (err) return res.status(500).json(err);
res.json(results);
}
);
});

app.post("/api/contact", (req, res) => {
const { name, email, subject, message } = req.body;
if (!name || !email || !message)
return res
.status(400)
.json({ message: "Name, email, and message are required." });

db.query(
"INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)",
[name, email, subject || "", message],
(err, result) => {
if (err) return res.status(500).json(err);
res
.status(201)
.json({ message: "Message sent", id: result.insertId });
}
);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
console.log(`Server running on port ${PORT}`);
});

