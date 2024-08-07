import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Principal from "./screens/principal/principal.jsx";
import Cardapio from "./screens/cardapio/cardapio.jsx";
import Busca from "./screens/busca/busca.jsx"

const Stack = createNativeStackNavigator()



function RoutesAuth() {
    return <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen name="principal" component={Principal}
                    options={{
                        headerShown: false,
                        headerShadowVisible:false,
                    }}
                />

            <Stack.Screen name="cardapio" component={Cardapio}
                     options={{
                       headerShown: false,
                       headerShadowVisible:false,
                        }}
                     />

            <Stack.Screen name="busca" component={Busca}
                            options={{
                                title:"Resultados da Busca",
                                headerBackTitle: "voltar",
                                headerTitleAlign: "center" ,
                                headerShadowVisible: "false",
                                headerBackTitle: "voltar"
                            }}
                        /> 

        </Stack.Navigator>
    </NavigationContainer>
}

export default RoutesAuth