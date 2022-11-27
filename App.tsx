import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { RecoilRoot } from "recoil"
import HomeScreen from "./src/pages/HomeScreen"
import DetailsScreen from "./src/pages/DetailsScreen"

const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <RecoilRoot>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Details" component={DetailsScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </RecoilRoot>
    )
}
