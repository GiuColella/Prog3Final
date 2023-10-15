const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
const db = mysql.createConnection({
  host:"localhost",
  user: "root",
password: "mardar346",
database: "FinalProg3"
})

app.post('/login', (req, res) => {
  const sql ="SELECT * FROM login WHERE username = ? AND password = ?";
  const values = [
    req.body.email,
    req.body.password
  ]
  db.query(sql, [values], (err, data) => {
    if(err) return res.json("Login Failed");
    return res.json(data);
  })
})
app.listen(3000, () => {
  console.log('Escuchando...')
})

/*import { createPool } from 'mysql2'; 
const express = require('express');
const app = express();
const mysql = require('mysql2');

export const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'mardar346',
  port: 3306,
  database: 'FinalProg3'
})
connection.connect();

app.use(express.json());

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  connection.query(
    'INSERT INTO users (username, password) VALUES (?, ?)',
    [username, password],
    (error, results, fields) => {
      if (error) {
        res.status(500).send('Error al registrar al usuario');
      } else {
        res.status(200).send('Usuario registrado con éxito');
      }
    }
  );
});*/