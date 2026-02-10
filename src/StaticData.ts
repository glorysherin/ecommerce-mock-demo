import { addUser } from "./db/users";

export const ITEMS = [
    { id: 1, title: "Title 1" },
    { id: 2, title: "Title 2" },
    { id: 3, title: "Title 3" },
    { id: 4, title: "Title 4" },
    { id: 5, title: "Title 5" },
    { id: 6, title: "Title 6" },
    { id: 7, title: "Title 7" },
    { id: 8, title: "Title 8" },
    { id: 9, title: "Title 9" },
    { id: 10, title: "Title 10" },
    { id: 11, title: "Title 11" },
    { id: 12, title: "Title 12" },
    { id: 13, title: "Title 13" },
];

export const IMAGE_URL = "data:image/jpeg;base64,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"



export const seedUsers = async () => {
    const users = Array.from({ length: 50 }, (_, i) => ({
        name: `user ${i + 1}`,
        location: `location ${i + 1}`,

    }))

    for (const user of users) {
        await addUser(user.name, user.location)
    }
}

export const COLORS = [
  '#5C7C3A', // green
  '#3B4A5A', // blue-gray
  '#9C6B4E', // brown
  '#7A8F3A', // olive
  '#6B7280', // neutral
]

export type ScheduleItem = {
  id: string
  title: string
  startTime: string
  endTime: string
  location: string
  description?: string
  type: 'multi-activity' | 'activity' | 'session' | 'meal'
  showViewOptions?: boolean
  image?: string
  date: string
  subEvents?: SubScheduleItem[]
}


export type SubScheduleItem = {
  id: string
  title: string
  location: string
}


// Camp Eagle Schedule Card Static data

export const SCHEDULE_DATA: ScheduleItem[] = [
  // ================= Jan 17 =================
  {
    id: '1',
    title: 'Multi-Activity Time',
    startTime: '08:00 AM',
    endTime: '09:00 AM',
    location: 'Multiple Locations',
    description: 'Choose your adventure!',
    type: 'multi-activity',
    showViewOptions: true,
    date: '2026-01-17',
     subEvents: [
      {
        id: '1-1',
        title: 'Mountain Scooters',
        location: 'Family Camp Garage',
      },
      {
        id: '1-2',
        title: 'Flylines',
        location: 'Holcomb Auditorium',
      },
      {
        id: '1-3',
        title: 'Snowtube Hill',
        location: 'Snow Tube Hill',
      },
    ],
  },
  {
    id: '2',
    title: 'Mountain Scooters',
    startTime: '08:00 AM',
    endTime: '09:00 AM',
    location: 'Family Camp Garage',
    type: 'activity',
    image: 'https://picsum.photos/300/200?1',
    date: '2026-01-17',
  },
  {
    id: '3',
    title: 'Flylines',
    startTime: '08:00 AM',
    endTime: '09:00 AM',
    location: 'Holcomb Auditorium Back Field',
    type: 'activity',
    image: 'https://picsum.photos/300/200?2',
    date: '2026-01-17',
  },
  {
    id: '4',
    title: 'Snowtube Hill',
    startTime: '08:00 AM',
    endTime: '09:00 AM',
    location: 'Snow Tube Hill',
    type: 'activity',
    image: 'https://picsum.photos/300/200?3',
    date: '2026-01-17',
  },
  {
    id: '5',
    title: 'Worship & Teaching',
    startTime: '09:30 AM',
    endTime: '12:00 PM',
    location: 'NM Hall',
    type: 'session',
    date: '2026-01-17',
  },
  {
    id: '6',
    title: 'Lunch',
    startTime: '12:30 PM',
    endTime: '01:30 PM',
    location: 'Family Camp Dining Area',
    type: 'meal',
    date: '2026-01-17',
  },
  {
    id: '7',
    title: 'Multi-Activity Time',
    startTime: '02:00 PM',
    endTime: '03:30 PM',
    location: 'Multiple Locations',
    description: 'Afternoon open recreation',
    type: 'multi-activity',
    showViewOptions: true,
    date: '2026-01-17',
  },
  {
    id: '8',
    title: 'Archery',
    startTime: '02:00 PM',
    endTime: '03:30 PM',
    location: 'East Field',
    type: 'activity',
    image: 'https://picsum.photos/300/200?4',
    date: '2026-01-17',
  },
  {
    id: '9',
    title: 'Canoeing',
    startTime: '02:00 PM',
    endTime: '03:30 PM',
    location: 'Lake Shore',
    type: 'activity',
    image: 'https://picsum.photos/300/200?5',
    date: '2026-01-17',
  },
  {
    id: '10',
    title: 'Craft Workshop',
    startTime: '02:00 PM',
    endTime: '03:30 PM',
    location: 'Craft Center',
    type: 'activity',
    image: 'https://picsum.photos/300/200?6',
    date: '2026-01-17',
  },

  // ================= Jan 18 =================
  {
    id: '11',
    title: 'Morning Walk',
    startTime: '07:00 AM',
    endTime: '08:00 AM',
    location: 'Nature Trail',
    type: 'activity',
    date: '2026-01-18',
  },
  {
    id: '12',
    title: 'Breakfast',
    startTime: '08:00 AM',
    endTime: '09:00 AM',
    location: 'Dining Area',
    type: 'meal',
    date: '2026-01-18',
  },
  {
    id: '13',
    title: 'Multi-Activity Time',
    startTime: '09:30 AM',
    endTime: '11:00 AM',
    location: 'Multiple Locations',
    description: 'Morning adventure options',
    type: 'multi-activity',
    showViewOptions: true,
    date: '2026-01-18',
  },
  {
    id: '14',
    title: 'Zipline',
    startTime: '09:30 AM',
    endTime: '11:00 AM',
    location: 'Zipline Zone',
    type: 'activity',
    image: 'https://picsum.photos/300/200?7',
    date: '2026-01-18',
  },
  {
    id: '15',
    title: 'Rock Climbing',
    startTime: '09:30 AM',
    endTime: '11:00 AM',
    location: 'Climbing Wall',
    type: 'activity',
    image: 'https://picsum.photos/300/200?8',
    date: '2026-01-18',
  },
  {
    id: '16',
    title: 'Bible Study',
    startTime: '11:15 AM',
    endTime: '12:30 PM',
    location: 'Room A',
    type: 'session',
    date: '2026-01-18',
  },
  {
    id: '17',
    title: 'Lunch',
    startTime: '12:30 PM',
    endTime: '01:30 PM',
    location: 'Dining Area',
    type: 'meal',
    date: '2026-01-18',
  },
  {
    id: '18',
    title: 'Free Time',
    startTime: '02:00 PM',
    endTime: '03:30 PM',
    location: 'Camp Grounds',
    type: 'activity',
    date: '2026-01-18',
  },
  {
    id: '19',
    title: 'Dinner',
    startTime: '06:30 PM',
    endTime: '07:30 PM',
    location: 'Dining Area',
    type: 'meal',
    date: '2026-01-18',
  },
  {
    id: '20',
    title: 'Campfire Worship',
    startTime: '08:00 PM',
    endTime: '09:30 PM',
    location: 'Campfire Circle',
    type: 'session',
    date: '2026-01-18',
  },

  // ================= Jan 19 =================
  {
    id: '21',
    title: 'Sunrise Prayer',
    startTime: '06:30 AM',
    endTime: '07:00 AM',
    location: 'Hilltop',
    type: 'session',
    date: '2026-01-19',
  },
  {
    id: '22',
    title: 'Breakfast',
    startTime: '08:00 AM',
    endTime: '09:00 AM',
    location: 'Dining Area',
    type: 'meal',
    date: '2026-01-19',
  },
  {
    id: '23',
    title: 'Leadership Talk',
    startTime: '09:30 AM',
    endTime: '11:00 AM',
    location: 'Main Hall',
    type: 'session',
    date: '2026-01-19',
  },
  {
    id: '24',
    title: 'Multi-Activity Time',
    startTime: '11:15 AM',
    endTime: '12:30 PM',
    location: 'Multiple Locations',
    description: 'Late morning options',
    type: 'multi-activity',
    showViewOptions: true,
    date: '2026-01-19',
  },
  {
    id: '25',
    title: 'Team Games',
    startTime: '11:15 AM',
    endTime: '12:30 PM',
    location: 'Sports Ground',
    type: 'activity',
    image: 'https://picsum.photos/300/200?9',
    date: '2026-01-19',
  },
{
  id: '26',
  title: 'Hiking Trail',
  startTime: '03:00 PM',
  endTime: '04:30 PM',
  location: 'North Trail',
  type: 'activity',
  image: 'https://picsum.photos/300/200?26',
  date: '2026-01-19',
},
{
  id: '27',
  title: 'Photography Walk',
  startTime: '03:00 PM',
  endTime: '04:30 PM',
  location: 'Lake View',
  type: 'activity',
  image: 'https://picsum.photos/300/200?27',
  date: '2026-01-19',
},
{
  id: '28',
  title: 'Fishing',
  startTime: '03:00 PM',
  endTime: '04:30 PM',
  location: 'River Bank',
  type: 'activity',
  image: 'https://picsum.photos/300/200?28',
  date: '2026-01-19',
},
{
  id: '29',
  title: 'Evening Snacks',
  startTime: '05:00 PM',
  endTime: '05:30 PM',
  location: 'Dining Area',
  type: 'meal',
  date: '2026-01-19',
},
{
  id: '30',
  title: 'Multi-Activity Time',
  startTime: '05:30 PM',
  endTime: '06:30 PM',
  location: 'Multiple Locations',
  description: 'Evening adventure options',
  type: 'multi-activity',
  showViewOptions: true,
  date: '2026-01-19',
},
{
  id: '31',
  title: 'Basketball',
  startTime: '05:30 PM',
  endTime: '06:30 PM',
  location: 'Sports Court',
  type: 'activity',
  image: 'https://picsum.photos/300/200?31',
  date: '2026-01-19',
},
{
  id: '32',
  title: 'Badminton',
  startTime: '05:30 PM',
  endTime: '06:30 PM',
  location: 'Indoor Hall',
  type: 'activity',
  image: 'https://picsum.photos/300/200?32',
  date: '2026-01-19',
},
{
  id: '33',
  title: 'Table Tennis',
  startTime: '05:30 PM',
  endTime: '06:30 PM',
  location: 'Recreation Room',
  type: 'activity',
  image: 'https://picsum.photos/300/200?33',
  date: '2026-01-19',
},
{
  id: '34',
  title: 'Dinner',
  startTime: '06:45 PM',
  endTime: '07:45 PM',
  location: 'Dining Area',
  type: 'meal',
  date: '2026-01-19',
},
{
  id: '35',
  title: 'Evening Worship',
  startTime: '08:00 PM',
  endTime: '09:00 PM',
  location: 'Main Hall',
  type: 'session',
  date: '2026-01-19',
},

// ================= Jan 20 =================
{
  id: '36',
  title: 'Morning Yoga',
  startTime: '06:30 AM',
  endTime: '07:30 AM',
  location: 'Open Lawn',
  type: 'activity',
  date: '2026-01-20',
},
{
  id: '37',
  title: 'Breakfast',
  startTime: '08:00 AM',
  endTime: '09:00 AM',
  location: 'Dining Area',
  type: 'meal',
  date: '2026-01-20',
},
{
  id: '38',
  title: 'Devotional Session',
  startTime: '09:30 AM',
  endTime: '10:30 AM',
  location: 'Prayer Hall',
  type: 'session',
  date: '2026-01-20',
},
{
  id: '39',
  title: 'Multi-Activity Time',
  startTime: '10:45 AM',
  endTime: '12:00 PM',
  location: 'Multiple Locations',
  description: 'Final adventure slot',
  type: 'multi-activity',
  showViewOptions: true,
  date: '2026-01-20',
},
{
  id: '40',
  title: 'Obstacle Course',
  startTime: '10:45 AM',
  endTime: '12:00 PM',
  location: 'Challenge Zone',
  type: 'activity',
  image: 'https://picsum.photos/300/200?40',
  date: '2026-01-20',
},
{
  id: '41',
  title: 'Water Games',
  startTime: '10:45 AM',
  endTime: '12:00 PM',
  location: 'Pool Area',
  type: 'activity',
  image: 'https://picsum.photos/300/200?41',
  date: '2026-01-20',
},
{
  id: '42',
  title: 'Group Discussion',
  startTime: '12:15 PM',
  endTime: '01:15 PM',
  location: 'Conference Room',
  type: 'session',
  date: '2026-01-20',
},
{
  id: '43',
  title: 'Lunch',
  startTime: '01:30 PM',
  endTime: '02:30 PM',
  location: 'Dining Area',
  type: 'meal',
  date: '2026-01-20',
},
{
  id: '44',
  title: 'Farewell Talk',
  startTime: '03:00 PM',
  endTime: '04:00 PM',
  location: 'Main Hall',
  type: 'session',
  date: '2026-01-20',
},
{
  id: '45',
  title: 'Feedback & Sharing',
  startTime: '04:15 PM',
  endTime: '05:15 PM',
  location: 'Main Hall',
  type: 'session',
  date: '2026-01-20',
},
{
  id: '46',
  title: 'Closing Prayer',
  startTime: '05:30 PM',
  endTime: '06:00 PM',
  location: 'Prayer Hall',
  type: 'session',
  date: '2026-01-20',
},
{
  id: '47',
  title: 'Evening Tea',
  startTime: '06:00 PM',
  endTime: '06:30 PM',
  location: 'Dining Area',
  type: 'meal',
  date: '2026-01-20',
},
{
  id: '48',
  title: 'Packing Time',
  startTime: '06:30 PM',
  endTime: '07:30 PM',
  location: 'Dormitories',
  type: 'activity',
  date: '2026-01-20',
},
{
  id: '49',
  title: 'Departure Briefing',
  startTime: '07:45 PM',
  endTime: '08:15 PM',
  location: 'Reception Area',
  type: 'session',
  date: '2026-01-20',
},
{
  id: '50',
  title: 'Camp Departure',
  startTime: '08:30 PM',
  endTime: '—',
  location: 'Main Gate',
  type: 'activity',
  date: '2026-01-20',
},
]