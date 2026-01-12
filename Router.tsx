import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Meals from './Pages/Meals';
import MealsCat from './Pages/MealsCat';
import MealsDetails from './Pages/MealsDetails';

const Stack = createStackNavigator();

const App: any = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "MealsCat" component={MealsCat} options={{
                    title: 'Categories',
                    headerTintColor: '#f19752ff'
                    ,
                }
            
                } />
                <Stack.Screen name = "Meals" component={Meals} options= {{
                    title: 'Meals',
                    headerTintColor: '#f19752ff'
                }} />
                <Stack.Screen name = "MealsDetails" component={MealsDetails} options = {{
                    title: 'Detail',
                    headerTintColor: '#f19752ff'
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default App;