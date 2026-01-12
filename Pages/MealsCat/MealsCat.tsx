import React from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';
import ErrorView from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';

import CategoryCard from '../../components/MealsCatCard/CategoryCard';
import useFetch from '../../hooks/useFetch';
2
const MealsCat = ({navigation}:any) => {
        if(!Config.API_URL){
            throw new Error('API_URL is not defined in environment variables');
        }
        const{error, loading, data} = useFetch(Config.API_URL + '/categories.php');
        console.log('API_URL:', Config.API_URL + '/categories.php');

        const handleMealSelect = (item:any) => {
            navigation.navigate('Meals', {category: item.strCategory});
        }
        const renderMeals = ({item}:any) => {
            return(
                <CategoryCard item={item} onSelect={() => handleMealSelect(item)}></CategoryCard>
            )
        }
        if(loading){
            return <Loading />;
        }
        if(error){
            console.log('Fetch error:', error);
            return <ErrorView />;
        }
        return(
            console.log('Fetched data:', data),
            <FlatList 
                data = {data.categories}
                renderItem = {renderMeals}
                style={{backgroundColor: '#f19752ff'}}
            />
        )
}
 
export default MealsCat;