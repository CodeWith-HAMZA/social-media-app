import React, { useState } from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function Shaddu() {
  const [image, setImage] = useState<string | null>("");

  const pickImage = async () => {
    // Ask for permission to access media library
    //
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    // Open image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      console.log(result.assets.at(0)?.base64);
      setImage(result.assets.at(0)?.uri as string);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <View>
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        </View>
      )}
    </View>
  );
}
