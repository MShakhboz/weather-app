import React from "react";
import {View, Text, SectionList} from 'react-native';
import { connect } from "react-redux";


const ForecastComponent = ({ date, temp, weather }) => {
    return (
        <View style = {{backgroundColor: "#fff", padding: 10}}>
          <Text  style = {{fontSize: 20}}>{date}</Text>
          <Text style = {{fontSize: 18}}>{temp} &#x2103;</Text>
          <Text style = {{fontSize: 17}}>{weather}</Text>
        </View>
    )
}

export default ForecastComponent;