export {default} from './Loading';import LottieView from 'lottie-react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const Error = () => {
    return(
        <View>
            <LottieView
                source = {require('../../assets/error.json')}
            />
        </View>
    )
}

export default Error;