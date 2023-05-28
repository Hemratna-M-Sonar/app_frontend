import { View, Text, SafeAreaView, Platform, StatusBar, StyleSheet, TouchableOpacity, ScrollView, Vibration } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from "react-native-vector-icons/AntDesign"

const Home = ({ navigation }) => {

    const [awake, setAwake] = useState(true);
    const startVibrate = () => {
        console.log(awake);
        console.log("vibrating");
        Vibration.vibrate(2000);
        setAwake(false);
    }
    const stopVibrate = () => {
        console.log(awake);
        console.log("stopping");
        Vibration.cancel();
        setAwake(true);
    }
    return (

        <>
            <View style={{ backgroundColor: "#333333", flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>

                <ScrollView>
                    <SafeAreaView>
                        <Text style={styles.heading}>{awake ? "You're awake !!" : "Wake up....."}</Text>



                        <TouchableOpacity style={styles.addBtn} onPress={awake? startVibrate : stopVibrate}>

                            <Icon name={awake ? "check" : "close"} size={150} color="#fff" />


                        </TouchableOpacity>


                    </SafeAreaView>

                </ScrollView>
            </View>
            
            

        </>
    )
}

export default Home

const styles = StyleSheet.create({
    heading: {
        fontSize: 28,
        textAlign: "center",
        marginTop: 25,
        marginBottom: 20,
        color: "#fff",
        backgroundColor: "#474747",
        paddingVertical: 10,
    },
    
    addBtn: {
        backgroundColor: "#474747",
        width: 250,
        height: 250,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 150,
        alignSelf: "center",
        marginVertical: "30%",
        elevation: 5,
        // borderWidth:4,
        // borderColor:"#000",
    },
    input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#b5b5b5",
        padding: 10,
        paddingLeft: 15,
        borderRadius: 5,
        marginVertical: 15,
        fontSize: 15,
    }
})

