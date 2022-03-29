import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../moduls/HomeScreen';
import WeatherScreen from '../moduls/WeatherScreen';

const Stack = createNativeStackNavigator();

export default function RootStackScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Calendar" component={HomeScreen} />
                <Stack.Screen name="Weather" component={WeatherScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
