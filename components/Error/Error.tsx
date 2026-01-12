import LottieView from 'lottie-react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const Error = () => {
    return(
        <View>
            <LottieView autoPlay loop style = {{width: 400, height: 400, marginTop: 80}}
                source = {require('../../assets/error.json')}
            />
        </View>
    )
}

export default Error;