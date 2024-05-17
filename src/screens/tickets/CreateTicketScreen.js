import {  Text } from "react-native";
import { Button } from "react-native-paper";
import FormComponent from "../../components/FormComponent";
const CreateTicket = () => {

    const fields = [{
        name: "title",
        label: "Title",
        value: "",
        type: "text",
        setValue: (text) => console.log(text),
      },
      {
        name: "description",
        label: "Description",
        value: "",
        type: "text",
        setValue: (text) => console.log(text),
      },
    ];

    const buttonHandleClick=()=>{
        console.log("Crear")
    }
  return (
    <>
      <Text>Crear ticket</Text>
      <FormComponent fields={fields} />
      <Button mode="contained" onPress={buttonHandleClick}>
        Crear
      </Button>
    </>
  );
};

export default CreateTicket;
