import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Button, Image, View, StyleSheet, Alert } from "react-native";
import axios from 'axios';

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

      // Upload the image to the server
      const formData = new FormData();
      formData.append('image', {
        uri: fileUri,
        name: fileUri.split('/').pop(),
        type: 'image/jpeg', // or appropriate type
      });

      try {
        const response = await axios.post('http://tu-servidor-en-la-nube/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log("Response from server:", response.data);
      } catch (error) {
        console.error("Error uploading the file:", error);
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
