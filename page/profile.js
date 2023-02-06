import { Text, View, StatusBar, Image, TouchableOpacity,Alert, TextInput } from "react-native";
import React, { Component } from "react";
import { StackActions } from "@react-navigation/native";
import { db } from "../config";
import styles from "./style";
import { doc, deleteDoc, getDocs, query, collection, where } from "@firebase/firestore";
import logo from "../logotubes.png";
import { Ionicons } from "@expo/vector-icons";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.route.params,
      nama:"",
      alamat:"",
    };
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
        alamat: users[0].alamat,
        email: users[0].email,
        password: users[0].password,
        id: users[0].id
      });
      console.log("Kontaks Key: ", users[0].id);
      console.log("Kontaks : ", this.state.item[0].email);
    });
  }

  deleteData = (id) => {
    Alert.alert("Info", "Anda Yakin Menghapus Data User", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          deleteDoc(doc(db, "user", id));
          Alert.alert("Hapus Data Berhasil");
          this.props.navigation.dispatch(StackActions.replace("Login"));
        },
      },
    ]);
  };


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#000d2c", alignItems:"center"}}>
        <View style={{width:"100%", height:70, paddingHorizontal:20, justifyContent:"center", alignItems:"center", backgroundColor:"#000d2c", flexDirection:"row"}}>
            <TouchableOpacity style={{flex:.7}} onPress={() => this.props.navigation.navigate("Menu")}>
                <Ionicons name='chevron-back' size={30} color="yellow" />
            </TouchableOpacity>
            <Text style={{fontSize:20, fontWeight:"700", color:"yellow", flex:1}}>Profile</Text>
        </View>
        <View style={{
          width: "80%",
          marginTop: 30,
          marginBottom: 2,
          padding: 10,
          flexDirection:"row",
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
          borderBottomLeftRadius: 15,
          borderTopLeftRadius: 15,
          backgroundColor: "#13B9A2",
          alignItems:"center",
          justifyContent:"flex-start",
          }}>
              <TextInput
                placeholder="nama"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={(nama) => this.setState({ nama })}
                value={this.state.nama}
                editable={false}
              />
            </View>
            <View style={styles.action}>
              <TextInput
                placeholder="Alamat"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={(alamat) => this.setState({ alamat })}
                value={this.state.alamat}
                editable={false}

              />
            </View>
            <View style={{
              width: "80%",
              marginTop: 8,
              marginBottom: 50,
              padding: 10,
              flexDirection:"row",
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
              borderBottomLeftRadius: 15,
              borderTopLeftRadius: 15,
              backgroundColor: "#13B9A2",
              alignItems:"center",
              justifyContent:"flex-start"
              }}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
                editable={false}
              />
            </View>
            <View style={{  justifyContent:"center", alignItems:"center",padding: 10,
            width:"100%",
            backgroundColor: "#000d2c",
            borderBottomLeftRadius: 15,
            borderTopLeftRadius: 15,
            borderBottomRightRadius: 15,
            borderTopRightRadius: 15,
            marginBottom:100,
            }}>
          <TouchableOpacity onPress={() =>this.props.navigation.navigate("Update", {email: this.state.item[0].email})} style={{backgroundColor:"#FC8F1A", 
            width:"80%", height:60, 
            margin: 8, 
            justifyContent:"center", 
            alignItems:"center",  
            borderRadius:12, 
            elevation:5,
            }}>
            <Text style={{fontSize:20, fontWeight:"bold", color:"#f5fffa"}}>Edit Account</Text>
             </TouchableOpacity>

             <TouchableOpacity onPress={() => this.deleteData(this.state.id)} style={{backgroundColor:"#FD3537", 
            width:"80%", 
            height:60, 
            margin: 8, 
            justifyContent:"center", 
            alignItems:"center",  
            borderRadius:12, 
            elevation:5,
            }}>
            <Text style={{fontSize:20, fontWeight:"bold", color:"#f5fffa"}}>Delete Account</Text>
             </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Profile;
