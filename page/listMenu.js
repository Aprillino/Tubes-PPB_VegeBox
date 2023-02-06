import { StatusBar, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../config";
import logo from "../logotubes.png";  
import styles from './style';
export class ListMenu extends Component {
  constructor(props){
    super(props)
    this.state = ({
      email:  props.route.params,
    })
  }

  componentDidMount(){
    this.getData();
  }

  getData(){
    getDocs(query(collection(db, "user"), where("email", "==", this.state.email.email))).then((docSnap) => {
      let users = [];
      docSnap.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      this.setState({
        item: users,
        itemKey: Object.keys(users),
        nama: users[0].nama,
      });
    //   console.log("Kontaks Key: ", users[0].alamat);
    //   console.log("Kontaks : ", this.state.item);
    });
  }

  render() {
    console.log(this.state.email.email)
    return (
      <View style={{flex:1}}>
        <View style={{width:"100%", height:70, paddingHorizontal:20, justifyContent:"center", alignItems:"center", backgroundColor:"#000d2c", flexDirection:"row"}}>
            <TouchableOpacity style={{flex:.5}} onPress={() => this.props.navigation.navigate("Menu")}>
                <Ionicons name='chevron-back' size={30} color="yellow" />
            </TouchableOpacity>
            <Text style={{fontSize:20, fontWeight:"700", color:"yellow", flex:1}}>Silahkan Pilih</Text>
        </View>
        <View style={{flex:1, backgroundColor:"#000d2c", paddingHorizontal:20, paddingVertical:10, flexDirection:"row", flexWrap:"wrap"}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Pickup', {email: this.state.email.email, jenis:'sayur'})} style={{width:160, height:200, backgroundColor:"#13B9A2", margin:8, padding:8, justifyContent:"space-between", borderWidth:2, borderColor:"yellow", borderRadius:10}}>
                <Image source={require('../assets/images/sayur.png')} style={{width:"100%", height: "80%"}} resizeMode="contain" />
                <Text style={{textAlign:"center", fontSize:20, fontWeight:"700"}}>Sayur</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Pickup', {email: this.state.email.email, jenis:'buah'})} style={{width:160, height:200, backgroundColor:"#13B9A2", margin:8, padding:8, justifyContent:"space-between", borderWidth:2, borderColor:"yellow", borderRadius:10}}>
                <Image source={require('../assets/images/buah.png')} style={{width:"100%", height: "80%"}} resizeMode="contain" />
                <Text style={{textAlign:"center", fontSize:20, fontWeight:"700"}}>Buah</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Pickup', {email: this.state.email.email, jenis:'telur'})} style={{width:160, height:200, backgroundColor:"#13B9A2", margin:8, padding:8, justifyContent:"space-between", borderWidth:2, borderColor:"yellow", borderRadius:10}}>
                <Image source={require('../assets/images/telur.png')} style={{width:"100%", height: "80%"}} resizeMode="contain" />
                <Text style={{textAlign:"center", fontSize:20, fontWeight:"700"}}>Telur</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Pickup', {email: this.state.email.email, jenis:'ayam'})} style={{width:160, height:200, backgroundColor:"#13B9A2", margin:8, padding:8, justifyContent:"space-between", borderWidth:2, borderColor:"yellow", borderRadius:10}}>
                <Image source={require('../assets/images/ayam.png')} style={{width:"100%", height: "80%"}} resizeMode="contain" />
                <Text style={{textAlign:"center", fontSize:20, fontWeight:"700"}}>Ayam</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Pickup', {email: this.state.email.email, jenis:'daging'})} style={{width:160, height:200, backgroundColor:"#13B9A2", margin:8, padding:8, justifyContent:"space-between", borderWidth:2, borderColor:"yellow", borderRadius:10}}>
                <Image source={require('../assets/images/daging.png')} style={{width:"100%", height: "80%"}} resizeMode="contain" />
                <Text style={{textAlign:"center", fontSize:20, fontWeight:"700"}}>Daging</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Pickup', {email: this.state.email.email, jenis:'ikan'})} style={{width:160, height:200, backgroundColor:"#13B9A2", margin:8, padding:8, justifyContent:"space-between", borderWidth:2, borderColor:"yellow", borderRadius:10}}>
                <Image source={require('../assets/images/ikan.png')} style={{width:"100%", height: "80%"}} resizeMode="contain" />
                <Text style={{textAlign:"center", fontSize:20, fontWeight:"700"}}>Ikan</Text>
            </TouchableOpacity>
        </View>
            {/* <View style={{flex:1, marginTop: 20, padding: 20, backgroundColor: '#13B9A2',}}>
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
                        <TouchableOpacity style={{alignItems:'center'}} onPress={()=>{this.pilihKategori("Sayur")}}>
                          <Image source={require('../assets/images/ayam.png')} style={{width: 50, height: 50}} />
                          <Text>Sayur</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
                        <TouchableOpacity style={{alignItems:'center'}} onPress={()=>{this.pilihKategori("Buah")}}>
                          <Image source={require('../assets/images/ayam.png')} style={{width: 50, height: 50}} />
                          <Text>Buah</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
                        <TouchableOpacity style={{alignItems:'center'}} onPress={()=>{this.pilihKategori("Telur")}}>
                          <Image source={require('../assets/images/ayam.png')} style={{width: 50, height: 50}} />
                          <Text>Telur</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1, flexDirection:'row', marginTop: 15}}>
                    <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
                        <TouchableOpacity style={{alignItems:'center'}} onPress={()=>{this.pilihKategori("Ayam")}}>
                          <Image source={require('../assets/images/ayam.png')} style={{width: 50, height: 50}} />
                          <Text>Ayam</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
                        <TouchableOpacity style={{alignItems:'center'}} onPress={()=>{this.pilihKategori("Daging")}}>
                          <Image source={require('../assets/images/ayam.png')} style={{width: 50, height: 50}} />
                          <Text>Daging</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
                        <TouchableOpacity style={{alignItems:'center'}} onPress={()=>{this.pilihKategori("Ikan")}}>
                          <Image source={require('../assets/images/ayam.png')} style={{width: 50, height: 50}} />
                          <Text>Ikan</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> */}
      </View>
    )
  }
}

export default ListMenu;