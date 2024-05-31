import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import ToolsContext from "../../context/tools/ToolsContext";
import CustomDataTable from "../../components/CustomDataTable";

const ToolsScreen = ({ navigation }) => {
  const { getTools, tools, getTool } = useContext(ToolsContext);
  useEffect(() => {
    getTools();
  }, []);

  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([4, 8, 12]);
  const [itemsPerPage, setItemsPerPage] = useState(numberOfItemsPerPageList[0]);
  const handleEditTool = (id) => {
    getTool(id);
    navigation.navigate("Actualizar");
  };
  const handleDeleteTool = (id) => {
    console.log(id);
  };
  const handleViewTool = (id) => {
    getTool(id);
    navigation.navigate("Herramienta");
  };

  const onItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setPage(0);
  };
  const titles = [
    { key: "name", value: "Herramienta" },
    { key: "status", value: "Estado" },
  ];
  const actions = [
    {
      icon: "refresh",
      color: "#2196f3",
      size: 24,
      handleAction: handleEditTool,
    },
    {
      icon: "trash",
      color: "red",
      size: 24,
      handleAction: handleDeleteTool,
    },
    { icon: "eye", color: "green", size: 24, handleAction: handleViewTool },
  ];
  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  return (
    <CustomDataTable
      titles={titles}
      list={tools}
      actions={actions}
      page={page}
      itemsPerPage={itemsPerPage}
      numberOfItemsPerPageList={numberOfItemsPerPageList}
      onPageChange={(page) => setPage(page)}
      onItemsPerPageChange={onItemsPerPageChange}
    />
  );
};

export default ToolsScreen;
