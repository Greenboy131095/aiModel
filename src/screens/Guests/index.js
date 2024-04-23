import React,{useState} from 'react'
import { Text,View,Pressable } from 'react-native'
import styles from './styles'
const GuestsScreen = (props) => {
    const [adults,setAdults] = useState(0);
    const [children,setChildren] = useState(0);
    const [infants,setInfants] = useState(0);
  return (
   <View>
   <View style ={{flexDirection:'row', justifyContent:'space-between',
   padding:20,
   borderBottomWidth:1,
   borderColor:'lightgrey'
   }}>
        <View>
            <Text style={{fontWeight:'bold'}}>
                Adult
            </Text>
            <Text styles={{color:'#8d8d8d'}}>
                Age 13 or above 
            </Text>
        </View>
        <View  style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between',width:'30%'}}>
            <Pressable onPress={()=>setAdults(Math.max(0,adults-1) )}
            style={styles.button}
            >
                <Text style={{fontSize:20,color:'#474747'}}>
                    -
                </Text>
            </Pressable>
            <Text>
                {adults}
            </Text>
            <Pressable onPress={()=>setAdults(adults+1)}
            style={styles.button}
            >
                <Text style={{fontSize:20,color:'#474747'}}>
                    +
                </Text>
            </Pressable>
   </View>
    </View>
    <View style ={{flexDirection:'row', justifyContent:'space-between',
   padding:20,
   borderBottomWidth:1,
   borderColor:'lightgrey'
   }}>
        <View>
            <Text style={{fontWeight:'bold'}}>
                Children
            </Text>
            <Text styles={{color:'#8d8d8d'}}>
                Age 2-12
            </Text>
        </View>
        <View  style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between',width:'30%'}}>
            <Pressable onPress={()=>setChildren(Math.max(0,children-1) )}
            style={styles.button}
            >
                <Text style={{fontSize:20,color:'#474747'}}>
                    -
                </Text>
            </Pressable>
            <Text>
                {children}
            </Text>
            <Pressable onPress={()=>setChildren(children+1)}
            style={styles.button}
            >
                <Text style={{fontSize:20,color:'#474747'}}>
                    +
                </Text>
            </Pressable>
   </View>
    </View>
    <View style ={{flexDirection:'row', justifyContent:'space-between',
   padding:20,
   borderBottomWidth:1,
   borderColor:'lightgrey'
   }}>
        <View>
            <Text style={{fontWeight:'bold'}}>
               Infants
            </Text>
            <Text styles={{color:'#8d8d8d'}}>
                Under 2 
            </Text>
        </View>
        <View  style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between',width:'30%'}}>
            <Pressable onPress={()=>setInfants(Math.max(0,infants-1) )}
            style={styles.button}
            >
                <Text style={{fontSize:20,color:'#474747'}}>
                    -
                </Text>
            </Pressable>
            <Text>
                {infants}
            </Text>
            <Pressable onPress={()=>setInfants(infants+1)}
            style={styles.button}
            >
                <Text style={{fontSize:20,color:'#474747'}}>
                    +
                </Text>
            </Pressable>
   </View>
    </View>
</View>
  )
  
}

export default GuestsScreen
