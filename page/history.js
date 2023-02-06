import { Text, View, StatusBar, Image, ScrollView, } from "react-native";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../config";
import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email:  props.route.params,
        item: {},
        itemKey: [],

    };
  }
  componentDidMount() {
    this.getAlldata();
  }

  getAlldata() {
    getDocs(query(collection(db, "pesanan"), where("email", "==", this.state.email.email))).then((docSnap) => {
        let users = [];
        docSnap.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });
        this.setState({
          item: users,
          itemKey: Object.keys(users),
        });
        // console.log("Kontaks Key: ", users[0].alamat);
        console.log("Kontaks : ", this.state.item);
      });
    }
  

  render() {
    const {item, itemKey} = this.state
    return (
        <View style={{flex:1,  backgroundColor:"#000d2c"}}>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
          <View style={{width:"100%", height:70, paddingHorizontal:20, justifyContent:"center", alignItems:"center", backgroundColor:"#000d2c", flexDirection:"row"}}>
            <TouchableOpacity style={{flex:.7}} onPress={() => this.props.navigation.navigate("Menu")}>
                <Ionicons name='chevron-back' size={30} color="yellow" />
            </TouchableOpacity>
            <Text style={{fontSize:20, fontWeight:"700", color:"yellow", flex:1}}>Riwayat</Text>
        </View>
           <ScrollView style={{ flex: 1, width: "100%", paddingHorizontal: 12 }}>
             <View style={{ flex: 1, padding: 10 }}>
               {itemKey.map((key) => (
                 <View
                   style={{
                     padding: 15,
                     marginBottom: 20,
                     alignItems: "flex-start",
                     justifyContent: "center",
                     borderWidth: 3,
                     borderRadius: 20,
                     backgroundColor: "#13B9A2",
                     elevation: 10,
                     borderColor: 'yellow',
                   }}
                 >
                   <Text style={{ textAlign: "left", fontWeight: "600", fontSize: 18, flex: 1.8, paddingLeft: 10, color: "black" }}>Nama                  : {item[key].nama}</Text>
                   <Text style={{ textAlign: "left", fontWeight: "600", fontSize: 18, flex: 1.8, paddingLeft: 10, color: "black" }}>Alamat                : {item[key].alamat}</Text>
                   <Text style={{ textAlign: "left", fontWeight: "600", fontSize: 18, flex: 1.8, paddingLeft: 10, color: "black" }}>Jenis Sayur        : {item[key].jenisSayur}</Text>
                   <Text style={{ textAlign: "left", fontWeight: "600", fontSize: 18, flex: 1.8, paddingLeft: 10, color: "black" }}>Jumlah                : {item[key].jumlah} Kg</Text>
                 </View>
               ))}
             </View>
           </ScrollView>
         </View>
    );
  }
}

export default About;
