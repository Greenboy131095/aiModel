import React from 'react'
import { View, Text, ImageBackground, Pressable,Image } from 'react-native'
import styles from './styles'
const Post=(props) =>{
    
const days = 7;
    const post = props.post;
  return (
    <View style={styles.container}>
      
        <Image style={styles.image}
        source={{uri: post.image}}
        >

        </Image>
        <Text style={styles.bedrooms}>
                {post.bed} bed {post.bedroom} bathroom
        </Text>
        <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
        </Text>
        <Text style={styles.prices}>
            <Text style={styles.oldPrice}>${post.oldPrice}</Text>
            <Text style={styles.newPrice}> ${post.newPrice}</Text>
            / night
        </Text>
        <Text style={styles.totalPrice}>
        ${post.newPrice * days} total
        </Text>
    </View>
  )
}
export default Post