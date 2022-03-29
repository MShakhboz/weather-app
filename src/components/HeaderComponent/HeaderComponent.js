import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';


const HeaderComponent = ({title, handleAction}) => {
    return (
       
        <View style = {styles.headerContainer}>
            <Button title = {title} onPress = {handleAction} />
        </View>
        
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center', 
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
    }
})

export default HeaderComponent;