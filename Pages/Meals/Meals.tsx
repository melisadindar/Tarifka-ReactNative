import React from 'react';
import { FlatList} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import ErrorView from '../../components/Error/Error';
import MealCard from '../../components/MealCard/MealCard';

const Meals = ({route, navigation} : any) => {
    const category =  encodeURIComponent(route.params.category);
    if(!Config.API_URL){
        throw new Error('API_URL is not defined in environment variables');
    }
    const{error, loading, data} = useFetch( Config.API_URL + '/filter.php?c=' + category);
    console.log('API_URL:', Config.API_URL + '/filter.php?c=' + category);


    const handleMealDetail = (item:any) => {
        navigation.navigate('MealsDetails', {mealId: item.idMeal});
    }

    const renderCategory = ({item}: any) => {
        return(
            <MealCard item = {item} onSelect = {() => handleMealDetail(item)}></MealCard>
        )
    }

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
        <FlatList
            data = {data.meals}
            renderItem = {renderCategory}
            style={{backgroundColor: '#f19752ff'}}
            
        />

    )

}

export default Meals;