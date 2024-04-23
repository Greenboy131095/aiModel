import React,{useState} from 'react'
import { Text,View,TextInput,FlatList } from 'react-native'
import styles from './styles'
import searchResults from '../../../assets/data/search'
const DestinationSearchScreen = (props) =>{
    const [inputText, setInputText] = useState(""); 
  return (
    <View style={styles.container}>
        <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
        />
        <FlatList   
        data={searchResults}
        renderItem={({item})=>(
            <View style={styles.row}>
            <View style={styles.iconContainer}>
                <Text size={35}>
                    Icon
                </Text>
            </View >
            <Text style ={styles.iconContainer}>{item.description}</Text>
            </View>
  )}/>
    </View>

  )
}

export default DestinationSearchScreen;
