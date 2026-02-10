import { ScheduleItem } from "../StaticData";
import { db } from "./database";


export const createScheduleTable = async(): Promise<void> => {
  db.execute(`
    CREATE TABLE IF NOT EXISTS schedule (
      id TEXT PRIMARY KEY,
      title TEXT,
      startTime TEXT,
      endTime TEXT,
      location TEXT,
      type TEXT,
      date TEXT
    );
  `)
}

export const insertScheduleData = async(data: ScheduleItem[]): Promise<void> => {
  data.forEach(item => {
    db.execute(
      `
      INSERT OR REPLACE INTO schedule
      (id, title, startTime, endTime, location, type, date)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      [
        item.id,
        item.title,
        item.startTime,
        item.endTime,
        item.location,
        item.type,
        item.date,
      ]
    )
  })
}


export const fetchScheduleData = async(): Promise<ScheduleItem[]> => {
const result = await db.execute(
    `SELECT * FROM schedule ORDER BY date, startTime`
  )

  return result.rows?._array  as ScheduleItem[]
}
