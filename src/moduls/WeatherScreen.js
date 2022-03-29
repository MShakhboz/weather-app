import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import { useDispatch, useSelector, connect } from 'react-redux';
import actions from '../redux/actions';
import WeatherContent from '../components/WeatherData/WeatherContent';
import Forecast from '../components/ForecastCopmonent';
import moment from 'moment';

const WeatherScreen = ({ getForecastDailyWeather, weatherInfo }) => {
    
    useEffect(() => {
        getForecastDailyWeather();
    }, [])

    console.log("Weather screen", weatherInfo);
    const currentDay = Object.keys(weatherInfo).length ? weatherInfo[0] : null;
    console.log(currentDay)
    const forecast = Object.keys(weatherInfo).length ? weatherInfo.splice(1) : null;
    console.log("forecast", forecast)
    return (
        <ScrollView>
            {
                currentDay ? <WeatherContent 
                pressure = {currentDay.pressure}
                humidity = {currentDay.humidity}
                currentTemp = {currentDay.temp.day}
                speed = {currentDay.speed}
                realFeel = {currentDay.feels_like.day}
                morning = {currentDay.feels_like.morn} 
                day = {currentDay.feels_like.day}
                evening = {currentDay.feels_like.eve} 
                night = {currentDay.feels_like.night}
                weather={currentDay.weather[0].main}
                /> : <View style = {{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#fff'}}>
                    <Text style = {{color: "black"}}>Loading...</Text>
                </View>
            }
            <Text style = {{fontSize: 20, padding: 20}}>6-day forecast</Text>
            {
                forecast ? forecast.map((item, index) => {
                    return (
                        <Forecast
                            key={index} 
                            date = {moment().add(index+1, "days").format('LL')} 
                            temp = {item.temp.day}
                            weather = {item.weather[0].main}
                        />
                    )
                }) : <View style = {{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#fff'}}>
                        <Text style = {{color: "black"}}>Loading...</Text>
                    </View>
            }
            
            
        </ScrollView>
 
        
        
    )
}

const mapStateToProps = (state) => {
    return {
        weatherInfo: state.weatherInfo,
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        getForecastDailyWeather: () => dispatch({type: actions.DAILY_FORECAST.REQUEST})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherScreen);