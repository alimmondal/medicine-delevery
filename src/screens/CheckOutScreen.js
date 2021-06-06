import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const CheckOutScreen = () => {
  return (
    <View>
      <View style={{ textAlign: "center" }}>
        <Text>Order Total-------$680</Text>
        <Text>Shipping----------$80</Text>
        <hr />
        <Text>Total-------------$760</Text>
      </View>

      <Text style={{ fontSize: 20, color: "blue", textAlign: "center", marginTop:30 }}>Payment Method</Text>

      <View style={{ textAlign: "center" }}>
        <Text>Credit/Debit Card</Text>
        <Text>Cash On Delivery</Text>
        <Text>Paypal</Text>
      </View>

      <Button
        title="place Order"
        onPress={function () {
          //   props.navigation.navigate("");
        }}
      />
    </View>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
