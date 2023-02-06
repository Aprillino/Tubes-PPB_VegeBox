import React, { Component } from "react";
import {StyleSheet, Text, View, Image,StatusBar} from 'react-native';
import Constants from "expo-constants";

export default class Front extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Login");
    }, 500);
  }
  render() {
    return (
        <View
          style={{
            backgroundColor: '#000d2c',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}  
        >
          <StatusBar barStyle="light-content" backgroundColor="black" />
          <View>
            <Image style={styles.centerImage} source={require("../assets/images/logos24.png")} alt="Judul Logo" />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  centerImage:{
    flex: 1,
    width: 350,
    height: 350,
    resizeMode: 'contain' 
  }
})