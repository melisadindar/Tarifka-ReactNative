import {StyleSheet} from 'react-native';

export default  StyleSheet.create({

    container:{
        flexDirection: 'row',
        marginLeft: 10,
        borderWidth: 2,
        margin: 10,
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        borderColor: '#a0a0a0ff',
        backgroundColor: '#e8e8e8ff',
    },
    image:{
        width: 100,
        height: 100,
        marginLeft: 12,
        resizeMode: 'contain',
        
    },
    text: {
        fontSize: 22,
        marginLeft: 5,
        marginTop: 40,
    }
})
