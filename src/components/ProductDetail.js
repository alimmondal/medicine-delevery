import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'

const ProductDetail = (props) => {
    console.log(props)
   const {title, price, imageSource,} = props.product;

    return (
        <View>
            
            <View style={styles.viewStyle}>
            
             <Image 
             source={imageSource}
             style={styles.imageStyle}
             /> 
             <Text>{title}</Text>
            <Text>{price}</Text>
            <Button 
              title='Order Now'
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
        width:200,
        height:200
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
export default ProductDetail;
