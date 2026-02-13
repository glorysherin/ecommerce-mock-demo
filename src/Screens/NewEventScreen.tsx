import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { loginAndFetchData } from '../api/scheduleApi'
import EventCardItem from './EventCards'  // adjust path


export default function NewEventScreen() {

  const [scheduleList, setScheduleList] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)

      const response = await loginAndFetchData()
      console.log('FULL API RESPONSE:', response)

      // ⚠️ IMPORTANT: check where schedule items are
      // most likely inside response.data
      const events = response?.data || response

      console.log('EVENTS:', events)

      setScheduleList(events)
    } catch (error) {
      console.log('API ERROR:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={scheduleList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          // <View style={{ marginBottom: 20 }}>
          //   <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          //     {item.Title}
          //   </Text>
          //   <Text>{item.Description}</Text>
          //   <Text>{item.Location}</Text>
          // </View>
           <EventCardItem
      index={item}
      title={item.Title}
      location={item.Location}
      description={item.Description}
      startTime={item.StartTime || '09:00'}
      endTime={item.EndTime || '10:00'}
      imageurl={item.ImageUrl}
      showViewOptions={item.subEvents?.length > 0}
      subEvents={item.subEvents || []}
    />
        )}
      />
    </View>
  )
}
