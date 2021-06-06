import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
// import ProductDetail from '../components/ProductDetail';

const ListScreen = (props) => {
    const topCompany = [
        { id:'1', name: "Incepta"  },
        { id:'2', name: "Square"  },
        { id:'3', name: "Aventis"  },
        { id:'4', name: "Orion"  },
        { id:'5', name: "Drug International"  },
        { id:'6', name: "Health Care"  },
        { id:'7', name: "Beximco"  },
        { id:'8', name: "SKF"  },
        { id:'9', name: "Renata"  },
    ]


     const products = [
        {id:'1', title: "Multivitamin", price:'$200', imageSource : require("../../assets/bottle1.jpg") },
        {id:'2', title: "Multivitamin", price:'$200' , imageSource : require("../../assets/bulti.jpg")},
        {id:'3', title: "Multivitamin", price:'$200', imageSource : require("../../assets/capsul.jpg")},
         {id:'4', title: "Vitamin", price:'$200', imageSource : require("../../assets/bottle1.jpg")}
     ]

    


    return (
        <View>
            <Text style={{fontSize:30, textAlign:'center', color:'goldenrod'}}>Top Company</Text>
            <FlatList
                // showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={topCompany}
                renderItem={function ({item}){
                    return <Text style={styles.textStyle}>{item.name}</Text>
                }}
            />

               

            <View>  
            <Text style={{fontSize:30, textAlign:'center', color:'goldenrod'}}>Popular Product</Text>
            {
                products.map(product => <View style={styles.viewStyle}>
                    <Image
                        source={product.imageSource}
                        style={{width:200, height:200}}
                    />
                    <Text>{product.title}</Text>
                    <Text>{product.price}</Text>
                    <Button 
                    title='Order Now'
                    onPress={function () {
                        props.navigation.navigate("Order");
                        }}
                    />
                </View>)
            }
            
            
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

export default ListScreen;