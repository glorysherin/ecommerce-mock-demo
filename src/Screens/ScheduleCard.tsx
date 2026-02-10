import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react';
import { SCHEDULE_DATA, ScheduleItem } from '../StaticData';
import {
    createScheduleTable, insertScheduleData, fetchScheduleData,
} from '../db/cards';
import EventCardItem from './EventCards'

export default function ScheduleCard() {
    const [data, setData] = useState<ScheduleItem[]>()
    useEffect(() => {
        const loadData = async () => {
            await createScheduleTable()
            await insertScheduleData(SCHEDULE_DATA)

            const rows = await fetchScheduleData()
            setData(rows)
        }

        loadData()
    }, [])

    return (
        <View style = {style.ScreenStyle}>
            <Text>Schedule Cards</Text>
            <ScrollView>
                {SCHEDULE_DATA.map((data, index) => (
                    <EventCardItem
                    key={data.id}
                        startTime={data.startTime}
                        endTime = {data.endTime} 
                         title={data.title}
                         location ={data.location}
                         index={index}
                         description={data.description}
                         showViewOptions={data.showViewOptions}
                         subEvents={data.subEvents}
                         />
                ))
                }
            </ScrollView>
        </View>
    )

}

const style = StyleSheet.create({
    ScreenStyle: {
       backgroundColor: 'gray',
    }
})