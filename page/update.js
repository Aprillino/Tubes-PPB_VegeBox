  import {Text,View,TouchableOpacity,Image,TextInput,StatusBar, Alert,} from "react-native";
  import React, { Component } from "react";
  import { db } from "../config";
  import { setDoc, doc,updateDoc,getDocs,collection,query,where } from "@firebase/firestore";
  import styles from "./style";
  // import Feather from "react-native-vector-icons/Feather";
  // import logo from "../assets/code.png";
  // import iconPhone from "../assets/telephone.png";
  // import iconAddress from "../assets/pin.png";
  // import iconUser from "../assets/nama.png";
  // import iconEmail from "../assets/email.png";
  // import iconPassword from "../assets/password.png";
  // import CustomButton from "../CustomButton";
  import { Ionicons } from "@expo/vector-icons";
  
  export default class Update extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email:  props.route.params,
        nama: "",
        alamat: "",
        password: "",
        id:"",
        check_textInputChange: false,
        secureTextEntry: true,
        modalVisible: false,
        modalNotVisible: false,
      };
    }
  
    insertNewUser = () => {
      var nama = this.state.nama;
      var alamat = this.state.alamat;
      var email = this.state.email.email;
      var password = this.state.password;
      console.log(nama);
  
      if (
        nama.length === 0 ||
        alamat.length === 0 ||
        email.length === 0 ||
        password.length === 0
      ) {
        alert("HARAP ISI DATA DENGAN BENAR !!!");
      } else {
        updateDoc(doc(db, "user", this.state.id), {
          nama: nama,
          alamat: alamat,
          email: email,
          password: password,
        })
          .then(() => {
            console.log("data submitted");
            Alert.alert("Data Submitted")
            this.props.navigation.navigate("Profile");
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
        password: users[0].password,
        id: users[0].id,
      });
      console.log("Kontaks Key: ", users[0].id);
      console.log("Kontaks : ", this.state.item);
      });
  }
    

    componentDidMount() {this.getData()}

    
  
    render() {
      console.log(this.state.email.email)
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
          <View style={{width:"100%", height:70, paddingHorizontal:20, justifyContent:"center", alignItems:"center", backgroundColor:"#000d2c", flexDirection:"row"}}>
            <TouchableOpacity style={{flex:.7}} onPress={() => this.props.navigation.navigate("Menu")}>
                <Ionicons name='chevron-back' size={30} color="yellow" />
            </TouchableOpacity>
            <Text style={{fontSize:20, fontWeight:"700", color:"yellow", flex:1}}>Profile</Text>
        </View>
          <View style={[styles.content, {marginTop:100}]}>
            <View style={styles.action}>
              <TextInput
                placeholder="Username"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={(nama) => this.setState({ nama })}
                value={this.state.nama}
              />
            </View>
            <View style={styles.action}>
              <TextInput
                placeholder="Address"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={(alamat) => this.setState({ alamat })}
                value={this.state.alamat}
              />
            </View>
            <View style={styles.action}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email.email}
              />
            </View>
            <View style={styles.action}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={(password) => this.setState({ password })}
                secureTextEntry={this.state.secureTextEntry ? true : false}
                value={this.state.password}
              />
            </View>
            <TouchableOpacity
              onPress={() => this.insertNewUser()}
              style={[styles.login, {marginTop:100}]}
            >
              <Text style={styles.textLogin}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
  