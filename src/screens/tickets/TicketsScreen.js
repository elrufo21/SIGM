import { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import TicketsContext from "../../context/Tickets/TicketsContext";
import CustomDataTable from "../../components/CustomDataTable";
const TicketsScreen = ({ navigation }) => {
  const { getTickets, tickets, getTicket } = useContext(TicketsContext);
  useEffect(() => {
    getTickets();
  }, []);
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([4, 8, 12]);
  const [itemsPerPage, setItemsPerPage] = useState(numberOfItemsPerPageList[0]);

  const handleEditTicket = (id) => {
    console.log(id);
  };
  const handleDeleteTicket = (id) => {
    console.log(id);
  };
  const handleViewTicket = (id) => {
    console.log(id);
    getTicket(id);
    navigation.navigate("Ticket");
  };
  const onItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setPage(0);
  };
  const titles = [
    { key: "id", value: "Ticket" },
    { key: "ticket_status", value: "Estado" },
    { key: "ticket_registration_date", value: "Fecha de creacion" },
  ];
  const actions = [
    {
      icon: "refresh",
      color: "#2196f3",
      size: 24,
      handleAction: handleEditTicket,
    },
    {
      icon: "trash",
      color: "red",
      size: 24,
      handleAction: handleDeleteTicket,
    },
    { icon: "eye", color: "green", size: 24, handleAction: handleViewTicket },
  ];

  return (
    <>
      <CustomDataTable
        titles={titles}
        list={tickets}
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

export default TicketsScreen;
