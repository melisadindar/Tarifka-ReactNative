import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container : {
        backgroundColor: 'rgb(221, 221, 221)152, 152)',
        flex: 1,
    },
    image: {
        width: '100%',
        height: 250,
        marginTop : -62,

    },
    title: {
        fontSize: 26,
        color: '#a53030',
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 4,
        fontFamily: 'Arial',
    },
    area: {
        fontSize: 20,
        color: '#a53030',
        marginTop: 0,
        fontWeight: 'bold',
        marginLeft: 4,
        borderBottomWidth: 1,
        borderColor: '#979797',
        paddingBottom: 5,
        fontFamily: 'Arial',
        
    },
    instructions: {
        marginTop: 5,
        marginLeft: 4,
        fontSize: 15,
        fontFamily: 'Arial',
        padding: 5,
    }
});