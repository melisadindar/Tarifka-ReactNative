import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './MealCard.styles';

const MealCard = ({item, onSelect}: any) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: item.strMealThumb}} />
                <Text style={styles.title}>{item.strMeal}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MealCard;