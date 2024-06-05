import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Button, Image, View, StyleSheet, Alert } from "react-native";

const HolaMundo = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // Request permission to access media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'We need permissions to access your photos.');
      return;
    }

    // Launch the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const fileUri = result.assets[0].uri;
      setImage(fileUri);

      // Directory path for saving the image
      const projectDir = FileSystem.documentDirectory + 'src/images/';
      const fileName = fileUri.split('/').pop();
      const destinationPath = `${projectDir}${fileName}`;
      
      try {
        // Ensure the directory exists
        const dirInfo = await FileSystem.getInfoAsync(projectDir);
        if (!dirInfo.exists) {
          await FileSystem.makeDirectoryAsync(projectDir, { intermediates: true });
        }

        // Copy the file to the destination path
        await FileSystem.copyAsync({
          from: fileUri,
          to: destinationPath,
        });
        console.log("Archivo guardado en:", destinationPath);
      } catch (error) {
        console.error("Error al copiar el archivo:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default HolaMundo;

