import { useContext } from "react";
import { Text, View } from "react-native";
import ToolsContext from "../../context/tools/ToolsContext";
import { Card } from "react-native-paper";

const ToolScreen = () => {
  const { tool } = useContext(ToolsContext);
  if (!tool) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  

  return (
    <View>
      <Card>
        <Card.Title title={tool.name} subtitle={tool.type} />
        <Card.Content>
          <Text>Tipo: {tool.type}</Text>
          <Text>Ubicacion: {tool.location}</Text>
          <Text>Precio:{tool.price}</Text>
          <Text>{tool.description}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default ToolScreen;
