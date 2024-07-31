import Busca from "./screens/busca/busca.jsx"
import Login from "./screens/login/login.jsx"
import Registro from "./screens/registro/registro.jsx"
import Registro2 from "./screens/registro2/registro2.jsx"

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator()

function Routes() {
    return <NavigationContainer>
        <Stack.Navigator>

        <Stack.Screen name="busca" component={Busca}
                options={{
                    title:"Resultados da Busca",
                    headerBackTitle: "voltar",
                    headerTitleAlign: "center" ,
                    headerShadowVisible: "false",
                    headerBackTitle: "voltar"
                }}
            />

            <Stack.Screen name="login" component={Login} options={{headerShown:false}} />

            <Stack.Screen name="registro" component={Registro}
                options={{
                    headerShadowVisible:false,
                    title:"",
                    headerBackTitle: "voltar"
                }}
            />

            <Stack.Screen name="registro2" component={Registro2}
                options={{
                    headerShadowVisible:false,
                    title:"",
                    headerBackTitle: "voltar"
                }}
            />

        
        </Stack.Navigator>
    </NavigationContainer>
}

export default Routes