import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";

const CustomSimpleDataTable = ({ tableData }) => {
  const [tableHead] = useState(["ID", "Head2", "Head3", "Actions"]);

  const alertIndex = (index) => {
    Alert.alert(`Row with ID: ${index}`);
  };

  const renderElement = (data, rowData) => (
    <TouchableOpacity onPress={() => alertIndex(rowData[0])}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>Quitar</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderColor: "transparent" }}>

        {tableData.map((rowData, index) => (
          <TableWrapper key={index} style={styles.row}>
            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                data={
                  cellIndex === 3 ? renderElement(cellData, rowData) : cellData
                }
                textStyle={styles.text}
                style={cellIndex === 0 ? styles.idColumn : null}
              />
            ))}
          </TableWrapper>
        ))}
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#808B97" },
  text: { margin: 6 },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
  btn: { width: 58, height: 18, backgroundColor: "#78B7BB", borderRadius: 2 },
  btnText: { textAlign: "center", color: "#fff" },
  idColumn: { width: 30, textAlign: "center" }, // Ajusta el tamaño de la columna ID
});

export default CustomSimpleDataTable;
