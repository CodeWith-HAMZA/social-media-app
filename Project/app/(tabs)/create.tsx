import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FilePicker from "@/components/shared/FilePicker";
import FormField from "@/components/shared/forms/FormField";

const Create = () => {
  const [title, setTitle] = React.useState("");

  return (
    <SafeAreaView className="bg-primary min-h-full py-8 px-4">
      <ScrollView>
        <Text className="text-white text-2xl font-bold">Upload Post</Text>

        <FilePicker
          label="Pick An Image For Thumbnail"
          onFileChange={(file) => {
            console.log(file);
          }}
          type={"image"}
        />
        <FilePicker
          label="Pick A Video For Post"
          onFileChange={(file) => {
            console.log(file);
          }}
          type={"image"}
        />

        <View>
          {/* <Text className="text-white text-lg font-semibold">house  hamza is the good boy</Text> */}
          <FormField
            placeholder="Enter Title"
            title="Title"
            value={title}
            handleTextChange={(value) => {
              setTitle(value);
            }}
          />
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({});
