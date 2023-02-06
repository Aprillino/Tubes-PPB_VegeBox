import {
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    StatusBar,
  } from "react-native";
  import React, { Component } from "react";
  import { db } from "../config";
  import { setDoc, doc } from "@firebase/firestore";
  import styles from "./style";
  import logo from "../assets/images/logos123.png";
import { Alert } from "react-native";
  
  export default class RegisScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nama: "",
        alamat: "",
        email: "",
        password: "",
        check_textInputChange: false,
        secureTextEntry: true,
        modalVisible: false,
        modalNotVisible: false,
      };
    }
  
    insertNewUser = () => {
      var nama = this.state.nama;
      var alamat = this.state.alamat;
      var email = this.state.email;
      var password = this.state.password;
      var id = email + Math.floor(Math.random() * 999999);
  
      if (
        nama.length === 0 ||
        alamat.length === 0 ||
        email.length === 0 ||
        password.length === 0
      ) {
        alert("HARAP ISI DATA DENGAN BENAR !!! ");
      } else {
        setDoc(doc(db, "user", id), {
          nama: nama,
          alamat: alamat,
          email: email,
          password: password,
        })
          .then(() => {
            Alert.alert("Data Submitted ")
            this.props.navigation.navigate("Login");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
  
    // function ketika button icon eye diklik
    updateSecureTextEntry() {
      // disini kita merubah setState yaitu ketika nilainya true maka akan menjadi false dan sebaliknya
      this.setState({
        ...this.state,
        secureTextEntry: !this.state.secureTextEntry,
      });
    }
  
    render() {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="black" />
          <Image style={{width:250, height:250, marginVertical: 50}} resizeMode="contain" source={logo} />
          <View style={styles.content}>
          <View style={styles.action}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={(email) => this.setState({ email })}
              />
            </View>
            <View style={styles.action}>
              <TextInput
                placeholder="Nama"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={(nama) => this.setState({ nama })}
              />
            </View>
            <View style={styles.action}>
              <TextInput
                placeholder="Alamat"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={(alamat) => this.setState({ alamat })}
              />
            </View>
            <View style={{ width: "80%",
            marginTop: 8,
            marginBottom: 10,
            padding: 10,
            flexDirection:"row",
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            borderTopLeftRadius: 15,
            backgroundColor: "#13B9A2",
            alignItems:"center",
            marginBottom:70,
            justifyContent:"flex-start"}}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={(password) => this.setState({ password })}
                secureTextEntry={this.state.secureTextEntry ? true : false}
              />
            </View>
            <TouchableOpacity
              onPress={() => this.insertNewUser()}
              style={styles.regrister}
            >
              <Text style={styles.textLogin}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
  