import { StatusBar, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../config";

//import logo from "../assets/favicon.png"
//import burger from "../assets/burger.jpg"
//import ayam from "../assets/ayam.jpg"
export class Menu extends Component {
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
      console.log("Kontaks Key: ", users[0].alamat);
      console.log("Kontaks : ", this.state.item);
    });
  }

  render() {
    console.log(this.state.email.email)
    return (
      <View style={{flex: 1, padding:10, flexDirection:"row", flexWrap:"wrap", justifyContent:"center",backgroundColor:"#000D2C",}}>
        <StatusBar backgroundColor="#000" />
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Profile", {email:this.state.email.email})} style={{
            width:"100%",
            flexDirection:"row",
            alignItems:"center"
            }} >
            <MaterialIcons name="account-circle" size={70} color="#FFCE39" />
            <Image  />
          <View style={{textAlign:"center", justifyContent:"flex-start", alignItems:"flex-start", marginLeft:10,}}>
            <Text style={{fontSize:20, fontWeight:"bold", color:"yellow"}}>Halo,</Text>
            <Text style={{fontSize:18, color:"yellow",marginTop: 3}}>{this.state.nama}</Text>
          </View>
        </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('ListMenu', {email: this.state.email.email})} style={{width:"45%", height:250, backgroundColor:"#13B9A2", margin:8, padding:8, justifyContent:"flex-start", borderWidth:2, borderColor:"yellow", borderRadius:10, marginTop:30}}>
                <Image source={require('../assets/images/menu.png')} style={{width:"100%", height: "80%"}} resizeMode="contain" />
                <Text style={{textAlign:"center", fontSize:20, fontWeight:"700"}}>Menu</Text>
          </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate("ListMenu",{email:this.state.email.email})} style={{
            padding:10,
            backgroundColor:"#13B9A2", 
            width:"45%", height:250, 
            margin: 8, 
            justifyContent:"center", 
            alignItems:"center",  
            borderRadius:10, 
            elevation:10,
            marginTop:30
            }} >
          <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={70} color="#000D2C" />
          <View style={{textAlign:"center", justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, fontWeight:"700",color:"#000d2c" }}>Menu</Text>
          </View>
        </TouchableOpacity> */}

          <TouchableOpacity onPress={() => this.props.navigation.navigate('About')} style={{width:"45%", height:250, backgroundColor:"#13B9A2", margin:8, padding:8, justifyContent:"flex-start", borderWidth:2, borderColor:"yellow", borderRadius:10, marginTop:30}}>
                <Image source={require('../assets/images/about2.png')} style={{width:"100%", height: "80%"}} resizeMode="contain" />
                <Text style={{textAlign:"center", fontSize:20, fontWeight:"700"}}>Tentang</Text>
          </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate("About")} style={{padding:10,
            backgroundColor:"#13B9A2", 
            width:"45%", height:250, 
            margin: 8, 
            justifyContent:"center", 
            alignItems:"center",  
            borderRadius:10, 
            elevation:10,
            marginTop:30
            }} >
          <Ionicons name="information-circle-sharp" size={75} color="black" />
          <View style={{textAlign:"center", justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:18, fontWeight:"700", color:"#000d2c"}}>Tentang</Text>
          </View>
        </TouchableOpacity> */}

        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate("Profile",{id:this.state.id.id})} style={{
            backgroundColor:"#f5fffa", 
            width:"45%", height:200, 
            margin: 8, 
            justifyContent:"center", 
            alignItems:"center", 
            borderWidth:4, 
            borderColor:"green", 
            borderRadius:10, 
            elevation:10
            }} >
            <MaterialIcons name="account-circle" size={60} color="black" />
          <View style={{textAlign:"center", flex:.2, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, fontWeight:"700", color:"green"}}>Profile</Text>
          </View>
        </TouchableOpacity> */}

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{width:"45%", height:250, backgroundColor:"#13B9A2", margin:8, padding:8, justifyContent:"flex-start", borderWidth:2, borderColor:"yellow", borderRadius:10}}>
            <Image source={require('../assets/images/logout.png')} style={{width:"100%", height: "80%"}} resizeMode="contain" />
                <Text style={{textAlign:"center", fontSize:20, fontWeight:"700"}}>Keluar</Text>
          </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")} style={{
            backgroundColor:"#13B9A2", 
            width:"45%", 
            height:250, 
            margin: 8, 
            justifyContent:"center", 
            alignItems:"center",  
            borderRadius:10, 
            elevation:10
            }} >
            <Ionicons name="log-out-outline" size={60} color="white" />
          <View style={{textAlign:"center", justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, fontWeight:"700", color:"white"}}>Log Out</Text>
          </View>
        </TouchableOpacity> */}
          

          <TouchableOpacity onPress={() => this.props.navigation.navigate('History', {email: this.state.email.email})} style={{width:"45%", height:250, backgroundColor:"#13B9A2", margin:8, padding:8, justifyContent:"flex-start", borderWidth:2, borderColor:"yellow", borderRadius:10}}>
                <Image source={require('../assets/images/history.png')} style={{width:"100%", height: "80%"}} resizeMode="contain" />
                <Text style={{textAlign:"center", fontSize:20, fontWeight:"700"}}>History</Text>
          </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate("History",{email:this.state.id.email})} style={{
            backgroundColor:"#13B9A2", 
            width:"45%", height:250, 
            margin: 8, 
            justifyContent:"center", 
            alignItems:"center",   
            borderRadius:10, 
            elevation:10
            }} >
              <FontAwesome name="history" size={60} color="white" />
          <View style={{textAlign:"center", justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, fontWeight:"700", color:"white"}}>Riwayat</Text>
          </View>
        </TouchableOpacity> */}

       
        
     
    
      </View>
    )
  }
}

export default Menu