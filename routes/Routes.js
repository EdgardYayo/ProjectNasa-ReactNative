import Home from '../components/Home'
import Detail from '../views/Detail';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const routesScreenDefaultOptions = {
    headerStyle: {
        backgroundColor: '#0B3D91',
    },

    headerTitleStyle: {
        color: "#fff",
    },
}


export default function Routes() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                  name="Home" 
                  component={Home} 
                  options={routesScreenDefaultOptions}/>
                <Stack.Screen 
                  name="Detail" 
                  component={Detail} 
                  options={routesScreenDefaultOptions} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}