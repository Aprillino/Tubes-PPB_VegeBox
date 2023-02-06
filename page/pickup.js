import { TextInput, Text, StyleSheet, View, Alert, Image, TouchableOpacity, StatusBar } from "react-native";
import React, { Component } from "react";
import { collection, getDocs, query, where } from "@firebase/firestore";
import styles from "./style";
import { db } from "../config";
import { setDoc, doc } from "@firebase/firestore";
import { Ionicons } from "@expo/vector-icons";

// import logo from "../assets/physics.png";
// import iconUser from "../assets/user.png";
// import iconPassword from "../assets/password.png";
// import Feather from "react-native-vector-icons/Feather";
// import CustomButton from "../CustomButton";

export default class Pickup extends Component {
    constructor(props){
        super(props)
        this.state = {
          email:  props.route.params.email,
          jenis:  props.route.params.jenis,
          nama: "",
          alamat: "",
          jenisSayur:"",
          jumlah:"",
          check_textInputChange: false,
          secureTextEntry: true,
          modalVisible: false,
          modalNotVisible: false,
        };
      }

      insertNewUser = () => {
        //menyimpan inputan user
        var nama = this.state.nama;
        var alamat = this.state.alamat;
        var jenisSayur = this.state.jenisSayur;
        var jumlah = this.state.jumlah;
        var id = this.state.email + Math.floor(Math.random() * 999999);

        // kondisi jika variable ada yang berisi null
        if (nama.length === 0 || alamat.length === 0 || jenisSayur.length === 0 || jumlah.length === 0) {
          // Maka akan menampilkan alert
          alert("HARAP ISI DATA DENGAN BENAR !!!");
        } else {
          // Query untuk menambahakan data ke database
          // "users" nama collection
          // user nama id collection
          setDoc(doc(db, "pesanan", id), {
            // isi database dengan variable
            email: this.state.email,
            nama: nama,
            alamat: alamat,
            jenis: this.state.jenis,
            jenisSayur: jenisSayur,
            jumlah: jumlah,
          })
            .then(() => {
              // jika berhasil makan akan navigate ke HomeScreen
              Alert.alert("Berhasil Pesan");
              this.props.navigation.navigate("Menu");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      };

  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar barStyle="light-content" backgroundColor="#000"  />
        <View style={{width:"100%", height:70, paddingHorizontal:20, justifyContent:"center", alignItems:"center", backgroundColor:"#000d2c", flexDirection:"row"}}>
            <TouchableOpacity style={{flex:.7}} onPress={() => this.props.navigation.navigate("ListMenu")}>
                <Ionicons name='chevron-back' size={30} color="yellow" />
            </TouchableOpacity>
            <Text style={{fontSize:20, fontWeight:"700", color:"yellow", flex:1}}>Pesan</Text>
        </View>
        <View style={{flex:1, justifyContent: "center",alignItems: "center",backgroundColor: "#000d2c"}}>
        <View style={{width: "100%",alignItems: "center", backgroundColor:"#000d2c", height:"85%"}}>
          <View style={styles.pickupform}>
            <TextInput
              placeholder="Nama"
              placeholderTextColor="black"
              style={styles.textInput}
              onChangeText={(nama) => this.setState({ nama })}
            />
          </View>
          <View style={styles.pickupform}>
            <TextInput
              placeholder="Alamat"
              placeholderTextColor="black"
              style={styles.textInput}
              onChangeText={(alamat) => this.setState({ alamat })}
            />
          </View>
          <View style={styles.pickupform}>
            <TextInput
              placeholder="Nama Makanan"
              placeholderTextColor="black"
              value={this.state.jenis}
              editable={false}
              style={styles.textInput}
            />
          </View>
          <View style={styles.pickupform}>
            <TextInput
              placeholder={`Jenis ${this.state.jenis}`}
              placeholderTextColor="black"
              style={styles.textInput}
              onChangeText={(jenisSayur) => this.setState({ jenisSayur })}
            />
          </View>
          <View style={styles.pickupform}>
            <TextInput
              placeholder="Jumlah"
              placeholderTextColor="black"
              style={styles.textInput}
              onChangeText={(jumlah) => this.setState({ jumlah })}
            />
          </View>
          <TouchableOpacity
              onPress={() => this.insertNewUser()}
              style={[styles.login, {marginTop:50}]}
            >
            <Text style={styles.textLogin}>Order</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>

    );
  }
}

