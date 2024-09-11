import React, { useState } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { toast } from "@/lib/utils";
import { icons, images } from "@/constants";
import CustomButton from "./CustomButton";
import { ResizeMode, Video } from "expo-av";

interface Props {
  label: string;
  onFileChange: (file: ImagePicker.ImagePickerAsset) => void;
  type: "image" | "video";
}
export default function FilePicker(props: Props) {
  const [media, setMedia] = useState<string | null>("");
  let mediaPreview;

  const pickImage = async () => {
    // Ask for permission to access media library
    //
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access files is required!");
      return;
    }

    // Open image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    toast("Successfully Picked Image");

    if (!result.canceled) {
      console.log(result.assets.at(0)?.base64);

      setMedia(result.assets.at(0)?.uri as string);

      props.onFileChange(result.assets.at(0)!);
    }
  };

  if (props.type === "video") {
    mediaPreview = (
      <Video
        source={{
          uri: media!,
        }}
        resizeMode={ResizeMode.STRETCH}
        useNativeControls
        className="w-60 h-60 rounded-2xl bg-white/10"
      />
    );
  } else {
    mediaPreview = (
      <Image
        className="rounded-xl w-screen"
        source={{ uri: media }}
        style={{ height: 200 }}

        // resizeMode="contain"
      />
    );
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Text className="text-white py-4">{props.label}</Text>
      </View>
      <View className="flex items-center">
        <TouchableOpacity
          onPress={props.type === "image" ? pickImage : undefined}
        >
          {media ? (
            mediaPreview
          ) : (
            <Image source={icons.upload} style={{ width: 50, height: 50 }} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
