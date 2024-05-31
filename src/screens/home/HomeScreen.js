import { View, Dimensions, ScrollView } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Button, Card, Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
import HomeContext from "../../context/home/HomeContext";

const HomeScreen = ({ navigation }) => {
  const { getAnalitics, analitic } = useContext(HomeContext);
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  const [costLastMonth, setCostLastMonth] = useState(0);
  const [costPreviousMonth, setCostPreviousMonth] = useState(0);
  useEffect(() => {
    getAnalitics();
  }, []);

  useEffect(() => {
    if (analitic.monthlyTicketCosts && analitic.monthlyTicketCosts.length > 0) {
      const newLabels = analitic.monthlyTicketCosts.map(
        (ticket) => ticket.date
      );
      const newData = analitic.monthlyTicketCosts.map(
        (ticket) => ticket.quantity
      );

      setCostLastMonth(parseFloat(analitic.totalCostLastMonth));
      setCostPreviousMonth(parseFloat(analitic.totalCostPreviousMonth));
      setLabels(newLabels);
      setData(newData);
      console.log(costLastMonth);
      console.log(costPreviousMonth);
    }

    console.log(labels);
    console.log(data);
  }, [analitic]);

  if (analitic.length <= 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            width: Dimensions.get("window").width - 50,
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Card style={{ flex: 2, marginRight: 10 }}>
            <Card.Title title="Repuestos mas usados" />
            <Card.Content>
              {analitic.mostUsedSpareParts &&
                analitic.mostUsedSpareParts.map((part, index) => (
                  <Text key={index}>
                    {part.name} {part.total_used}
                  </Text>
                ))}
            </Card.Content>
          </Card>

          <Card style={{ flex: 1, marginLeft: 10 }}>
            <Card.Title title="Ganancias" />
            <Card.Content>
              <Text style={{ fontSize: 12, color: "green" }}>
                Actual: S/.{costLastMonth}
              </Text>
              <Text style={{ fontSize: 12, color: "#f44336" }}>
                Anterior: S/.{costPreviousMonth}
              </Text>
              <Text style={{ fontSize: 12, color: "green", marginTop: 5 }}>
                {((costLastMonth - costPreviousMonth) / costPreviousMonth) *
                  100}
                %
              </Text>
            </Card.Content>
          </Card>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: Dimensions.get("window").width - 50,
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Card>
            <Card.Title title="Tickets por mes" />
            {labels.length > 0 && (
              <LineChart
                data={{
                  labels: labels,
                  datasets: [
                    {
                      data: data,
                    },
                  ],
                }}
                width={Dimensions.get("window").width}
                height={220}
                yAxisInterval={1}
                chartConfig={{
                  backgroundColor: "#e26a00",
                  backgroundGradientFrom: "#fb8c00",
                  backgroundGradientTo: "#ffa726",
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726",
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            )}
          </Card>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{ marginTop: 20, width: Dimensions.get("window").width - 50 }}
        >
          <Card>
            <Card.Title title="Ultimos tickets" />
            <Card.Content>
              {analitic.lastTickets.map((ticket) => (
                <Card key={ticket.id}>
                  <Card.Title title={`Ticket: ${ticket.id}`} />
                  <Card.Content>
                    <Text>Fecha de Creación: {ticket.registration_date}</Text>
                    <Text>Estado: {ticket.status}</Text>
                    <Text>Costo: {ticket.cost}</Text>
                  </Card.Content>
                </Card>
              ))}
            </Card.Content>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
