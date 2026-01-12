import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './CategoryCard.styles';

const CategoryCard = ({item, onSelect}:any) => {
    return(
        <TouchableOpacity activeOpacity={0.8} onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: item.strCategoryThumb}} />
                <Text style={styles.text}>{item.strCategory}</Text>
            </View>
            
        </TouchableOpacity>
    )
}
export default CategoryCard;
