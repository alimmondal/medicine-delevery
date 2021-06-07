import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import thanksImage from '../../assets/thanks.png';
const Thanks = (props) => {
   

    return (
        <View>
            
            <View>
            
             <Image 
             source={thanksImage}
             style={styles.imageStyle}
             /> 
             
            {/* <Text>{price}</Text> */}
            <Button 
              title='Thanks for choosing us'
              onPress={function () {
                  props.navigation.navigate("Order");
                }}
            />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color:"goldenrod",
        border: '1px solid blue',
        borderRadius:10,
        padding:10,
        margin:5,
    },
    imageStyle: {
        width:355,
        height:500,
        textAlign:'center'
    },
    viewStyle: {
        border: '1px solid blue',
        borderRadius:10,
        padding:10,
        margin:5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center'
        
    }
})
export default Thanks;
