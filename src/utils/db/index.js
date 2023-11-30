// database.js
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
  name: 'mydatabase.db',
  createFromLocation: '~mydatabase.db',
});

const initDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, phoneNumber TEXT, password TEXT);',
    );
  });
};

const addUser = (name, email, phoneNumber, password) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO users (name, email, phoneNumber, password) VALUES (?, ?, ?, ?);',
      [name, email, phoneNumber, password],
    );
  });
};

const getUser = (email, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM users WHERE email = ?;',
      [email],
      (_, {rows}) => callback(rows.item(0)),
    );
  });
};

export {initDatabase, addUser, getUser};
