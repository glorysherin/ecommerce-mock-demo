import { db } from "./database";

export function getProducts() {
    const result = db.execute(`SELECT *FROM app;`)
    const rows = result.rows
    if (!rows) return []

    const data = []

    for(let i =0; i < rows.length; i++) {
        data.push(rows.item(i))
    }
}