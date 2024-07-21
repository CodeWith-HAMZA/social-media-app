import {
  View,
  Text,
  Image,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { images } from "@/constants";
import { SignUpForm } from "@/types/forms";
import FormField from "@/components/shared/forms/FormField";
import CustomButton from "@/components/shared/CustomButton";
import { Link } from "@react-navigation/native";
import { registerUser } from "@/lib/appwrite/services/users";
import { toast } from "@/lib/utils";

const SignUp = () => {
  const [form, setForm] = useState<SignUpForm>({
    username: "",
    email: "",
    password: "",
  });

  const [Busy, setBusy] = useState(false);

  async function handleRegister() {
    if (!form.username || !form.email || !form.password) {
      return  Alert.alert("Error", "All Fields Are Required");
    }

    setBusy(true);
    try {
      const res = await registerUser(form.email, form.password, form.username);
    } catch (error) {
      Alert.alert("Something Went Wrong", error.message);
    } finally {
      setBusy(false);
    }

    toast("Successfully Registered Your Account");
  }

  return (
    <SafeAreaView className="bg-primary h-full flex flex-row justify-center ">
      <View className="w-full h-full gap-8 mt-8 px-4 py-6">
        <Image
          source={images.logo}
          resizeMode="contain"
          className="w-[115px]  h-[35px]"
        />
        <Text className="text-white font-bold text-2xl">Sign Up To Arora</Text>

        <View>
          <FormField
            handleTextChange={(value) => {
              setForm((_) => ({ ..._, username: value }));
            }}
            title="Username"
            placeholder="Enter Username"
          />
        </View>
        <View>
          <FormField
            handleTextChange={(value) => {
              setForm((_) => ({ ..._, email: value }));
            }}
            title="Email"
            placeholder="Enter Email"
          />
        </View>

        <View>
          <FormField
            handleTextChange={(value) => {
              setForm((_) => ({ ..._, password: value }));
            }}
            title="Password"
            placeholder="Enter Password"
          />
        </View>

        <View className="border-2">
          <CustomButton
            onPress={handleRegister}
            isDisabled={Busy}
            title="Register"
            containerStyles="mt-0"
          />
        </View>

        <View className="flex-row justify-center gap-x-3">
          <Text className="text-gray-600">Already Have An Account</Text>
          <Link to={"/sign-in"}>
            <Text className="text-secondary underline">Sign In</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
 