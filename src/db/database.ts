import { open } from 'react-native-nitro-sqlite'

export const db = open({
  name: 'users.db',
})

console.log('✅ Nitro SQLite DB opened:', db)

export function SetUpDataBase() {
    db.execute(`CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        location TEXT NOT NULL
    );
     `)
}

console.log('✅ DB Created Successfully:', db)

