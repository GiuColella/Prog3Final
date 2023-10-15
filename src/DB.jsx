import { createPool } from 'mysql2'; 
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
});