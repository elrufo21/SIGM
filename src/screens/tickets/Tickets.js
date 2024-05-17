import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TicketsScreen from "./TicketsScreen";
import CreateTicketScreen from "./CreateTicketScreen";
import TicketScreen from "./TicketScreen";
import UpdateTicketScreen from "./UpdateTicketScreen";
import TicketsState from "../../context/Tickets/TicketsState";

const Tab = createBottomTabNavigator();
const Tickets = () => {
  return (
    <TicketsState>
      <Tab.Navigator>
        <Tab.Screen name="Lista" component={TicketsScreen} />
        <Tab.Screen name="Crear" component={CreateTicketScreen} />
        <Tab.Screen name="Ticket" component={TicketScreen} />
        <Tab.Screen name="Actualizar" component={UpdateTicketScreen} />
      </Tab.Navigator>
    </TicketsState>
  );
};
export default Tickets;
