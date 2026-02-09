import { db } from './database';

// Insert a new todo
export async function addUser(name: string, location: string) {
  await db.execute(
    `INSERT INTO users (name, location) VALUES (?, ?);`,
    [name, location]
  )
}



export async function getUsers() {
  const result = await db.execute('SELECT * FROM users;')

  const rows = result.rows
  if (!rows) return []

  const data = []

  for (let i = 0; i < rows.length; i++) {
    data.push(rows.item(i))
  }

  console.log('USERS FROM DB:', data)
  return data
}



// Insert a new todo
export async function deleteUser(id: number) {
  await db.execute(
    `DELETE FROM users WHERE id = ?;`,
    [id]
  )
}