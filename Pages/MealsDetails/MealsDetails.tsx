import React from 'react';
import {Text, Image, ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import ErrorView from '../../components/Error/Error';
import styles from './MealsDetails.styles';

const MealsDetails = ({route} : any) => {
    const mealId = encodeURIComponent(route.params.mealId);
    if(!Config.API_URL){
        throw new Error('API_URL is not defined in environment variables');
    }
    const {error, loading, data} = useFetch(Config.API_URL + '/lookup.php?i=' + mealId);
    console.log('API_URL:', Config.API_URL + '/lookup.php?i=' + mealId);

    console.log('DATA:', data);
    console.log('MEALS ARRAY:', data?.meals);
    if(loading){
        return <Loading />;
    }
    if(error){
        console.log('Fetch error:', error);
        return <ErrorView />;
    }
    return(
        <ScrollView style= {{backgroundColor: 'rgb(221, 221, 221)152, 152)'}}>
            <SafeAreaView style={styles.container}>
                <Image style={styles.image} source={{uri: data.meals[0].strMealThumb}} />
                <Text style={styles.title}>{data.meals[0].strMeal}</Text>
                <Text style={styles.area}>{data.meals[0].strArea}</Text>
                <Text style={styles.instructions}>{data.meals[0].strInstructions}</Text>
            </SafeAreaView>
        </ScrollView>

    )
    
}

export default MealsDetails;