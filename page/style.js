import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#000d2c"
    },
    content:{
        width: "100%",
        alignItems: "center",
        backgroundColor:"#000d2c"
    },  
    action:{
        width: "80%",
        marginTop: 8,
        marginBottom: 2,
        padding: 10,
        flexDirection:"row",
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        backgroundColor: "#13B9A2",
        alignItems:"center",
        justifyContent:"flex-start"

    },
    login:{
        marginTop: 10,
        width: "80%",
        backgroundColor: "#FD3537",
        padding: 12,
        alignItems: "center",
        borderRadius: 50,
  
    },
    regrister:{
      marginTop: 10,
      width: "80%",
      backgroundColor: "#FB8B38",
      padding: 12,
      alignItems: "center",
      borderRadius: 50,
  },
    textLogin: {
        fontSize: 20,
        color: "white",
        fontWeight: "700",  
    },
    header: {
        width: "100%",
        height: 70,
        backgroundColor: "ivory",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10,
        borderBottomWidth: 0,
        borderBottomColor: "coral",
      },
      header2: {
        flexDirection: "row",
        paddingHorizontal: 30,
      },
      menu:{
        padding: 12,
        marginBottom: 100,
      },
      listMenu:{
        padding: 10,
      },
      textMenu:{
        fontSizea: 16,
        fontWeight: "700",
        color : "olive"
      },
      textContent:{
        fontSize: 30,
        fontWeight: "800",
        marginLeft: 10,
        color: "olive",
      },
      textInput:{
        // backgroundColor: "#adff2f",
        // borderTopRightRadius: 15,
        // borderBottomRightRadius: 15,
        // borderBottomLeftRadius: 15,
        // borderTopLeftRadius: 15,
        paddingVertical:5,
        paddingLeft:10,
        width:"80%",
        color: "black",
      },
      icon:{
        // backgroundColor:"red",
        textAlign:"center",
        width:30,
      },

      pickupform:{
        width: "80%",
        marginTop: 10,
        backgroundColor:"#13B9A2",
        padding: 10,
        borderRadius:10,
        borderWidth: 2,
        elevation:5,
    },
});

export default styles;