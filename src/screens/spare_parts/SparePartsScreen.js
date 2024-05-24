import { Text } from "react-native";
import CustomDataTable from "../../components/CustomDataTable";
import { useContext, useEffect, useState } from "react";
import SparePartsContext from "../../context/SpareParts/SparePartsContext";

const SparePartsScreen = ({navigation}) => {
  const { getSpareParts, spareParts,getSparePart  } = useContext(SparePartsContext);
  useEffect(() => {
    getSpareParts();
  }, []);

  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([4, 8, 12]);
  const [itemsPerPage, setItemsPerPage] = useState(numberOfItemsPerPageList[0]);
  const handleEditTool = (id) => {
    getSparePart(id)
    navigation.navigate("Actualizar");
  };
  const handleDeleteTool = (id) => {
    console.log(id);
  };
  const handleViewTool = (id) => {
    getSparePart(id)
  };

  const onItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setPage(0);
  };
  const titles = [
    { key: "name", value: "Repuesto" },
    { key: "type", value: "Tipo" },
    { key: "stock", value: "Cantidad" },
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
    <>
    <Text>Repuestos</Text>
      <CustomDataTable
        titles={titles}
        list={spareParts}
        actions={actions}
        page={page}
        itemsPerPage={itemsPerPage}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        onPageChange={(page) => setPage(page)}
        onItemsPerPageChange={onItemsPerPageChange}
      />
    </>
  );
};

export default SparePartsScreen;
