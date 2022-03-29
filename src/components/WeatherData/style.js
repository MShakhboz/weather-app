import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerWeather: {
        flex: 1,
        backgroundColor: "#fff"
    },
    dayContainer: {
        flexDirection: 'row', 
        marginTop: 10, 
        justifyContent: "space-between"
    },
    currentTemp: {
        color: "#39311D", 
        fontSize: 100
    },
    detailTitel: {
        margin: 10, 
        fontSize: 20, 
        color: '#3A3845', 
        fontWeight: 'bold'
    },
    detailInfo: {
        color: '#141E27', 
        fontSize: 17
    },
    content: {
        height: 380,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 5,
        borderRadius: 20,
        backgroundColor: 'rgba(255,0,0,0.2)'
    },
    footer: {
        height: 200,
        // backgroundColor: 'black',
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 20,
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: '#d7eff8'
    }
})

export default styles;