import {
  View,
  Text,
  Image,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { images } from "@/constants";
import { SignInForm } from "@/types/forms";
import FormField from "@/components/shared/forms/FormField";
import CustomButton from "@/components/shared/CustomButton";
import { Link } from "@react-navigation/native";
import { loginUser } from "@/lib/appwrite/services/users";
import { router } from "expo-router";
import CustomSecondaryButton from "@/components/shared/CustomSecondaryButton";

const SignUp = () => {
  const [form, setForm] = useState<SignInForm>({
    email: "",
    password: "",
  });

  function showToast() {
    ToastAndroid.show("Logged In Successfully", 0.7);
  }

  return (
    <SafeAreaView className="h-full flex flex-row justify-center">
      <View className="w-full h-full gap-8 mt-8 px-4 py-6">
        {/* <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px]  h-[35px]"
          /> */}
        <Text className="font-bold mb-16 text-center text-[#263BED] text-3xl">
          Shoppy Logo
        </Text>

        <View className="w-[91%] flex ">
          <View>
            <FormField
              handleTextChange={(value) => {
                setForm((_) => ({ ..._, ["email"]: value }));
              }}
              title="Email"
              placeholder="Enter your phone or email"
            />
          </View>

           <CustomButton
            onPress={async () => {
              console.log(form);
              try {
                await loginUser(form.email, form.password);
                router.replace("/home");
                showToast();
              } catch (error) {
                Alert.alert("Something Went Wrong", error.message);
              }
            }}
            isDisabled={false}
            title="Send OTP"
          />

          {/* <View className="flex-row justify-center gap-1">
            <Text>Already have an Account?</Text>
            <Text
              onPress={() => {
                router.push("sign-in");
              }}
              className="text-[#0066FF] font-bold"
            >
              Sign In
            </Text>
          </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
