
import { useContext } from "react"
import { Text } from "react-native"
import SparePartsContext from "../../context/SpareParts/SparePartsContext"
const SparePartScreen = () => {
    const {sparePart} = useContext(SparePartsContext)
    
    return(
        <>
        {sparePart ? (
            <>
            <Text>SPARE PART</Text>
            <Text>{sparePart.name}</Text>
            <Text>{sparePart.stock}</Text>
            <Text>{sparePart.type}</Text>
            
            
            </>
        ):(
            <Text>No hay un SparePart seleccionado</Text>
        )}
        </>
    )
}

export default SparePartScreen