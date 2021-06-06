import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'

 function HomeScreen(props) {
   console.log(props);
    return (
        <View style={styles.viewStyle}>
            <Image
            source={require("./../../assets/Red-Bike.png")}
          // source={{
          //   uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb7l9AAJ3SQJrMxHOvLtsZuke-rs_UZmZnog&usqp=CAU',
          // }}
          style={{ width: 350, height: 350 }}
        />
            <br />  <br />
            <Text style={{fontSize:30, color:'blue', textAlign: 'cen'}}>Order Medicine and Get Delivery in the fastest time in the town</Text>
            <Text style={{color:'grey'}}>Get the Fastest Delivery <br /> Medicine for You</Text>
            
            <Button 
              title='Get Started'
              onPress={function () {
                  props.navigation.navigate("List");
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  viewStyle:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center'
  }
})

export default HomeScreen;