import { TextInput, Text, StyleSheet, View, Alert, Image, TouchableOpacity, StatusBar } from "react-native";
import React, { Component } from "react";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../config";
import styles from "./style";
import logo from "../assets/images/logos89.png";
import { FontAwesome } from "@expo/vector-icons";


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      email: "",
      password: "",
      dbemail: "",
      dbpassword: "",
      dbuser: "",
      check_textInputChange: false,
      secureTextEntry: true,
      modalVisible: false,
      modalNotVisible: false,
    };
  }


  getData(email){
    getDocs(query(collection(db, "user"), where("email", "==", email))).then((docSnap) => {
      let users = [];
      docSnap.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      this.setState({
        item: users,
        itemKey: Object.keys(users),
        email: users[0].email,
      });
      console.log("Kontaks Key: ", users[0].email);
      console.log("Kontaks : ", this.state.item);
      this.props.navigation.navigate("Menu", {email:users[0].email});
      });
  }

  readData = () => {
    var email = this.state.email;
    var Password = this.state.password;
    if (email.length === 0 || Password.length === 0) {
      alert("HARAP ISI FORM !!!");
    } else if (this.state.email === "Guest" && this.state.password === "Guest") {
      Alert.alert("Selamat Siang");
      console.log(this.state.email);
      this.props.navigation.navigate("Menu");
    } else {
      getDocs(query(collection(db, "user"), where("email", "==", email))).then((docSnap) => {
        let users = [];
        docSnap.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });
        this.setState({
          dbpassword: users[0].password,
          dbemail: users[0].email,
          dbuser: users[0].nama,
        });
        this.validasiDB(email);
      });
    }
  };

  validasiDB = (email) => {
    if (this.state.email === this.state.dbemail && this.state.password === this.state.dbpassword) {
      this.getData(this.state.email)  
      Alert.alert("Selamat Datang", this.state.dbuser);
      console.log("Login Berhasil");
      
    } else {
      Alert.alert("Login Gagal");

    }
  };

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
        <Image style={{width:350, height:350}} resizeMode="contain" source={logo} />
        <View style={[styles.content, styles.content2]}>
          <View style={styles.action}>
            <TextInput placeholder="Email" placeholderTextColor="black" style={styles.textInput} onChangeText={(email) => this.setState({ email })} />
          </View>
          <View style={{ width: "80%",
        marginTop: 8,
        marginBottom: 20,
        padding: 10,
        flexDirection:"row",
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        backgroundColor: "#13B9A2",
        alignItems:"center",
        justifyContent:"flex-start"}}>
            <TextInput placeholder="Password" placeholderTextColor="black" style={styles.textInput} onChangeText={(password) => this.setState({ password })} secureTextEntry={this.state.secureTextEntry ? true : false} />
            {/* <TouchableOpacity onPress={this.updateSecureTextEntry.bind(this)}>{this.state.secureTextEntry ? <Feather name="eye-off" color="crimson" size={24} /> : <Feather name="eye" color="crimson" size={24} />}</TouchableOpacity> */}
          </View>
          <TouchableOpacity onPress={() => this.readData()} style={styles.login}>
            <Text style={styles.textLogin} >
                Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate("Regist")} style={styles.regrister}>
            <Text style={styles.textLogin} >
                Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}