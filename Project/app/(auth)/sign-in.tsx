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

const SignIn = () => {
  const [form, setForm] = useState<SignInForm>({
    email: "",
    password: "",
  });

  function showToast() {
    ToastAndroid.show("Logged In Successfully", 0.7);
  }

  return (
    <SafeAreaView className="bg-primary h-full flex flex-row justify-center">
      <View className="w-full h-full gap-8 mt-8 px-4 py-6">
        <Image
          source={images.logo}
          resizeMode="contain"
          className="w-[115px]  h-[35px]"
        />
        <Text className="text-white font-bold text-2xl">Log in To Arora</Text>

        <View>
          <FormField
            handleTextChange={(value) => {
              setForm((_) => ({ ..._, ["email"]: value }));
            }}
            title="Email"
            placeholder="Enter Email"
          />
        </View>

        <View>
          <FormField
            handleTextChange={(value) => {
              setForm((_) => ({ ..._, ["password"]: value }));
            }}
            title="Password"
            placeholder="Enter Password"
          />
        </View>

        <View className="">
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
            title="Log In"
          />
        </View>

        <View className="flex-row justify-center gap-x-3">
          <Text className="text-gray-600">Don't Have An Account</Text>
          <Link to={"/sign-up"}>
            <Text className="text-secondary underline">Sign Up</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
