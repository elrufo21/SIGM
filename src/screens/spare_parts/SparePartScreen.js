
import { useContext } from "react"
import { Text, View } from "react-native"
import SparePartsContext from "../../context/SpareParts/SparePartsContext"
import { Card } from "react-native-paper"
const SparePartScreen = () => {
    const {sparePart} = useContext(SparePartsContext)
    
    return(
        <>
        {sparePart ? (
            <View>
                <Card>
                    <Card.Title title={sparePart.name}
                    subtitle={sparePart.type}/>
                    <Card.Content>
                        <Text>Stock: {sparePart.stock}</Text>
                        <Text>Tipo: {sparePart.type}</Text>
                        <Text>Ubicacion: {sparePart.location}</Text>
                    </Card.Content>
                </Card>
            </View>
           /* <>
            <Text>SPARE PART</Text>
            <Text>{sparePart.name}</Text>
            <Text>{sparePart.stock}</Text>
            <Text>{sparePart.type}</Text>
            
            
            </>*/
        ):(
            <Text>No hay un SparePart seleccionado</Text>
        )}
        </>
    )
}

export default SparePartScreen