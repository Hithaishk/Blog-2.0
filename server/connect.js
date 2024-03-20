import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hithaish@123",
  database: "social",
});

// Attempt to connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }

  console.log('Connected to the database as id ' + db.threadId);
});

// Handle connection errors
db.on('error', (err) => {
  console.error('Database error: ' + err.stack);
  // You might want to handle this error depending on your application's needs
});

export default db;
