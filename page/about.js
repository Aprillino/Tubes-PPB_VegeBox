import { Text, View, StatusBar, Image } from "react-native";
import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1,  backgroundColor:"#000d2c", alignItems:"center"}}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <View style={{width:"100%", height:70, paddingHorizontal:20, justifyContent:"center", alignItems:"center", backgroundColor:"#000d2c", flexDirection:"row"}}>
            <TouchableOpacity style={{flex:.6}} onPress={() => this.props.navigation.navigate("Menu")}>
                <Ionicons name='chevron-back' size={30} color="yellow" />
            </TouchableOpacity>
            <Text style={{fontSize:20, fontWeight:"700", color:"yellow", flex:1}}>Tentang Kami</Text>
        </View>
        <Image source={require('../assets/images/logos24.png')} style={{width:400, height: 400, marginBottom:200}} resizeMode="contain" />
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Maps")} style={{backgroundColor:"#FD3537", alignItems:"center", width:"80%", paddingVertical:20, borderRadius:30}}>
          <Text style={{fontSize:18, fontWeight:"800", color:"#ffffff"}}>Alamat Kami</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default About;
