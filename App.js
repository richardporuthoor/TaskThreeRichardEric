import * as React from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import colors from './app/config/colors'
import MyButton from './app/assets/components/MyButton'
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    
    <SafeAreaView style={{flex: 1, backgroundColor: colors.secondary}}>
      <View style={styles.vertContainer}>
        <View style = {styles.topBox}/>
        <View style={styles.layeredBox}>
          <View style={styles.iconContainer}>
          <FontAwesome5 name="sad-tear" size={60} color="black" />
          </View>
          <Text style = {styles.text}>Richard & Eric Task 3</Text>
          </View>
          <View style={styles.iconContainer2}>
          <FontAwesome5 name="angry" size={60} color="black" />
          </View>
          <View style={styles.iconContainer3}>
          <FontAwesome5 name="surprise" size={60} color="black" />
          </View>
        <MyButton
          title = "losing"
          onPress={() => console.log('i love coding! :)')}
          backColor = 'orange'
          underColor='blue'
        />
        <MyButton
          title = "my"
          onPress={() => console.log('react native is so fun!!!')}
          backColor = 'green'
          underColor='yellow'
        />
        <MyButton
          title = "mind"
          onPress={() => console.log('AAAARHRHRHRHKJGHJDKLSGHGKJDSHKDJGH')}
          backColor = 'purple'
          underColor='pink'
        />
        <Image
          style={styles.imageStyles}
          source={require('./app/assets/images/image.jpg')}
        />
       
      </View>
    </SafeAreaView>


  );
}


const styles = StyleSheet.create({
  
  iconContainer: {
    name: 'mood rn',
    color: 'black',
    position: 'absolute',
    top: 175,
    right: 49,
  },
  iconContainer2: {
    name: 'also mood',
    color: 'black',
    position: 'absolute',
    top: 350,
    right: 65,
  },
  iconContainer3: {
    name: 'mood af',
    color: 'black',
    position: 'absolute',
    top: 500,
    right: 65,
  },
  vertContainer: {
    flexDirection: 'column',
  },
  horContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colors.secondary,
    paddingBottom: 20,
    paddingTop: 20,
  },
  layeredBox: {
    position: 'absolute',
    top: 20,
    width: '90%',
    marginLeft: 20,
    marginTop: 5,    
    height: 70,
    backgroundColor: colors.secondary,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topBox: {
    width: '100%',
    backgroundColor: colors.sapphire,
    height: 140,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
  },
   text: {
    fontSize: 32,
    color: 'purple',
    fontWeight: 'bold',
  },
  imageStyles: {
    width:200, 
    height:300, 
    margin: 10,
    borderWidth: 2,
  },
});


