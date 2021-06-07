import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import checkOutImage from './../../assets/checkoutImage.jpg';

const CheckOutScreen = (props) => {
  return (
    <View style={styles.viewStyle}>
        <Image 
             source={checkOutImage}
             style={styles.imageStyle}
             /> 
      <View style={{ textAlign: "center" }}>
        <Text>Order Total-------$680</Text>
        <Text>Shipping----------$80</Text>
        <hr />
        <Text>Total-------------$760</Text>
      </View>

      <Text style={{fontSize: 20, 
         color: "blue", 
         textAlign: "center",
         marginTop:30 }}>Payment Method</Text>

      <View style={{ textAlign: "center" }}>
        <Text>Credit/Debit Card</Text>
        <Text>Cash On Delivery</Text>
        <Text>Paypal</Text>
      </View>

      <Button
        title="place Order"
        onPress={function () {
            props.navigation.navigate("Thanks");
        }}
      />
    </View>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
    imageStyle: {
        width:200,
        height:200,
        borderRadius:100,
        
        
    },
    viewStyle: {
         flexDirection:'column',
         alignItems:'center',
         justifyContent:'center',
         marginTop:'150' 
    }
});
