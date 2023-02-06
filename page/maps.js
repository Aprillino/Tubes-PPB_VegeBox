import react, { Component } from "react";
import { Text,View, TouchableOpacity } from "react-native";
import MapView,{Marker}from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";

export default class MapsScreen extends Component{
    render(){
    return(
        <View style={{flex:1}}>
        <View style={{width:"100%", height:70, paddingHorizontal:20, justifyContent:"center", alignItems:"center", backgroundColor:"#000d2c", flexDirection:"row"}}>
            <TouchableOpacity style={{flex:.5}} onPress={() => this.props.navigation.navigate("About")}>
                <Ionicons name='chevron-back' size={30} color="yellow" />
            </TouchableOpacity>
            <Text style={{fontSize:20, fontWeight:"700", color:"yellow", flex:1}}>Alamat Kantor</Text>
        </View>
        <MapView
            style={{flex:1}}
            initialRegion={{
              latitude: -7.2797676,
              longitude: 112.7712381,
              latitudeDelta: 0.007,
              longitudeDelta: 0.007,
            }}
          >
            <Marker
              coordinate={{
                latitude: -7.2802359045331295,
                longitude: 112.77171015781818,
              }}
            />
          </MapView>
        </View>

    )
  }
}