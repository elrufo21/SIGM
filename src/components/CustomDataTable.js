import * as React from "react";
import { View, Text, Pressable, FlatList } from "react-native";
import { DataTable, Provider } from "react-native-paper";
import { Provider as PaperProvider, Dialog, Portal } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const CustomDataTable = ({
  titles,
  list,
  actions,
  page,
  itemsPerPage,
  numberOfItemsPerPageList,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, list.length);
  return (
    <Provider style={{ height: 400, overflow: "auto" }}>
      <DataTable style={{ height: 300, overflow: "auto" }}>
        <DataTable.Header>
          {titles.map(({ value }) => (
            <DataTable.Title key={value}>{value}</DataTable.Title>
          ))}
          <DataTable.Title key="actions">Actions</DataTable.Title>
        </DataTable.Header>
        {list.slice(from, to).map((item) => (
          <DataTable.Row key={item.id}>
            {titles.map(({ key }) => (
              <DataTable.Cell key={key}>{item[key]}</DataTable.Cell>
            ))}
            <DataTable.Cell>
              {actions.map(({ icon, color, size, handleAction }) => (
                <Pressable onPress={() => handleAction(item.id)} key={icon}>
                  <Ionicons name={icon} size={size} color={color} />
                </Pressable>
              ))}
            </DataTable.Cell>
          </DataTable.Row>
        ))}

        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(list.length / itemsPerPage)}
          onPageChange={onPageChange}
          label={`${from + 1}-${to} of ${list.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={"Rows per page"}
        />
      </DataTable>
    </Provider>
  );
};

export default CustomDataTable;
