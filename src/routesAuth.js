import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Principal from "./screens/principal/principal.jsx";
import Cardapio from "./screens/cardapio/cardapio.jsx";
import Busca from "./screens/busca/busca.jsx"
import DetalheProduto from "./screens/detalhe-produto/detalhe-produto.jsx";
import DetalhePedido from "./screens/detalhe-pedido/detalhe-pedido.jsx";
import Chekout from "./screens/checkout/checkout.jsx";

const Stack = createNativeStackNavigator()



function RoutesAuth() {
    return <NavigationContainer>
        <Stack.Navigator>

           <Stack.Screen name="principal" component={Principal}
                    options={{
                        headerShown: false,
                        headerShadowVisible:false,
                        animation: 'fade'
                    }}
          />

           <Stack.Screen name="detalhe-pedido" component={DetalhePedido}
                    options={{
                        headerShadowVisible: false,
                        title: "Detalhes do pedido",
                        headerTitleAlign: "center",
                        animation: 'fade'
                    }}
          />

            <Stack.Screen name="checkout" component={Chekout}
                    options={{
                        headerShadowVisible: false,
                        title: "Meus pedidos",
                        headerTitleAlign: "center",
                        animation: 'fade'
                    }}
          />

           <Stack.Screen name="detalhe produto" component={DetalheProduto}
                    options={{
                        headerShown: false,
                        headerShadowVisible:false,
                        animation: 'fade'
                    }}
                />

            <Stack.Screen name="cardapio" component={Cardapio}
                     options={{
                       headerShown: false,
                       headerShadowVisible:false,
                       animation: 'fade'
                        }}
                     />

            <Stack.Screen name="busca" component={Busca}
                            options={{
                                title:"Resultados da Busca",
                                headerBackTitle: "voltar",
                                headerTitleAlign: "center" ,
                                headerShadowVisible: "false",
                                headerBackTitle: "voltar",
                                animation: 'fade'
                            }}
                        /> 

        </Stack.Navigator>
    </NavigationContainer>
}

export default RoutesAuth