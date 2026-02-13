import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListScreen from './ListScreen';
import CartScreen from './CartScreen';
import CounterScreen from './CounterScreen';
import UserScreen from './UserScreen';
import ScheduleCard from './ScheduleCard';
import NewEventScreen from './NewEventScreen';

import PhotosStack from "./PhotosStack";


const Tab = createBottomTabNavigator();

export default function BottomTabs() {

    return (
        <Tab.Navigator>
            <Tab.Screen name='List Screen' component={ListScreen} />
            <Tab.Screen name='Cart Screen' component={CartScreen} />
            <Tab.Screen name="Counter Screen " component={CounterScreen} />
            <Tab.Screen name="Events" component={ScheduleCard} />
            <Tab.Screen name="App Schedule Events" component={NewEventScreen} />
            <Tab.Screen name="Users Screen " component={UserScreen} />
 <Tab.Screen name="Photos" component={PhotosStack} />



        </Tab.Navigator>
    );
}