
import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TicketsScreen from './TicketsScreen'
import CreateTicketScreen from './CreateTicketScreen'
import TicketScreen from './TicketScreen'
import UpdateTicketScreen from './UpdateTicketScreen'

const Tab = createBottomTabNavigator()
const Tickets = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Lista" component={TicketsScreen} />
            <Tab.Screen name="Crear" component={CreateTicketScreen} />
            <Tab.Screen name="Ticket" component={TicketScreen} />
            <Tab.Screen name="Actualizar" component={UpdateTicketScreen} />
        </Tab.Navigator>
    )
}
export default Tickets