import React from 'react';
import { Calendar } from 'react-native-calendars';
import { StyleSheet, View, ScrollView } from 'react-native';
import moment from 'moment';


const HomeScreen = ({ navigation }) => {
  
  const onDayPressHandle = (day) => {
    const now = moment().format("YYYY-MM-DD");
    console.log(now);
    if (day.dateString == now) {
      navigation.navigate("Weather");
    }
  }
  
  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const yesterday = new Date(today - 24*60*60*60);
  console.log(date)
  // const nextDay = moment().format("YYYY-MM-DD");

  return (
    <ScrollView>
      <View style={styles.container}>
        <Calendar
          // minDate = {yesterday}
          maxDate = {today}
          markedDates={ {[today]: { color: '#50cebb', textColor: 'white'}} }
          onDayPress = {onDayPressHandle}
        />
      </View>
    </ScrollView>
    
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default HomeScreen;
