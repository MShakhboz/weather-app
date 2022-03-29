import * as React from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import BottomSheet from '../BottomSheet';
import styles from './style';
import moment from 'moment'

const WeatherContent = ({weather, realFeel, speed, pressure, humidity, currentTemp, morning, day, evening, night}) => {
    let today = moment().format('LL');
    // let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
 
    return (
        <ScrollView>
            <View style = {styles.containerWeather}>
            <View style = {styles.content}>
                <View style = {{paddingLeft: 10}}>
                    <Text style = {styles.currentTemp}>{currentTemp} <Text>&#x2103;</Text></Text>
                    <Text style = {{fontSize: 20}}>{weather}</Text>
                    <Text>{today}</Text>
                </View>
                <View style = {{padding: 30, width: '80%'}}>
                    <View style = {styles.dayContainer}>
                        <Text>Morning</Text>
                        <Text>{morning} &#x2103;</Text>
                    </View>
                    <View style = {styles.dayContainer}>
                        <Text>Day</Text>
                        <Text>{day} &#x2103;</Text>
                    </View>
                    <View style = {styles.dayContainer}>
                        <Text>Evening</Text>
                        <Text>{evening} &#x2103;</Text>
                    </View>
                    <View style = {styles.dayContainer}>
                        <Text>Night</Text>
                        <Text>{night} &#x2103;</Text>
                    </View>
                </View>
            </View>
            <View style = {styles.footer}>
                <Text style = {styles.detailTitel}>Details</Text>
                <View style = {{flexDirection: "row"}}>
                    <View style = {{ padding: 10, marginRight: 120}}>
                        <Text style = {styles.detailInfo}>SPEED</Text>
                        <Text style = {[styles.detailInfo,  { marginTop: 8 }]}>{speed} km/h</Text>
                    </View>
                    <View style = {{ padding: 10}}>
                        <Text style = {styles.detailInfo}>REAL FEEL</Text>
                        <Text style = {[styles.detailInfo,  { marginTop: 8 }]}>{realFeel} &#x2103;</Text>
                    </View>
                </View>
                <View style = {{flexDirection: "row",}}>
                    <View style = {{padding: 10, marginRight: 120}}>
                        <Text style = {styles.detailInfo}>HUMIDITY</Text>
                        <Text style = {[styles.detailInfo,  { marginTop: 8 }]}>{humidity}%</Text>
                    </View>
                    <View style = {{ paddingTop: 10, marginLeft: 10 }}>
                        <Text style = {styles.detailInfo}>PRESSURE</Text>
                        <Text style = {[styles.detailInfo,  { marginTop: 8}]}>{pressure} hPA</Text>
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
        
    )
}

export default WeatherContent;