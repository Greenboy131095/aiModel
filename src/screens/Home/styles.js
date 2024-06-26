import { StyleSheet,Dimensions } from "react-native";

const styles =StyleSheet.create({
    image:{
        width:"100%",
        height:500,
        resizeMode:"cover",
        justifyContent:"center"
    },
    title:{
        fontSize:80,
        fontWeight:"bold",
        color:"white",
        width:"70%",
        marginLeft:25


    },
    button:{
        backgroundColor:'#fff',
        width:200,
        marginLeft:25,
        height:40,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        marginTop:25

    },
    buttonText:{
        fontSize:16,
        fontWeight:"bold",
        color:"black"

    },
    searchButton: {
    backgroundColor: '#fff',
    height: 60,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top:-50
   },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color:"black"
      }
    
});
export default styles;