import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListScreen from './ListScreen';
import CartScreen from './CartScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    
    return (
        <Tab.Navigator>
            <Tab.Screen name='List Screen' component={ListScreen} />
             <Tab.Screen name='Cart Screen' component={CartScreen} />
</Tab.Navigator>
    );
}