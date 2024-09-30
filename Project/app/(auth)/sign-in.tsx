import { View, Text, ToastAndroid, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/shared/forms/FormField";
import CustomButton from "@/components/shared/CustomButton";
import CustomSecondaryButton from "@/components/shared/CustomSecondaryButton";
import { router } from "expo-router";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/firebase/config";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!form.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleLogin = async () => {
    if (!validate()) return; // Validate before proceeding

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, form.email, form.password);
      setLoading(false);
      router.replace("/home");
      ToastAndroid.show("Logged In Successfully", ToastAndroid.SHORT);
    } catch (error) {
      Alert.alert("Something Went Wrong", error.message);
    }
  };

  return (
    <SafeAreaView className="h-full flex flex-row justify-center">
      <View className="w-full h-full gap-8 mt-0 px-4 py-8">
        <Text className="font-bold text-center text-[#263BED] text-3xl">
          Shoppy Logo
        </Text>

        <View className="flex-col gap-y-3">
          <View className="w-full">
            <FormField
              handleTextChange={(value) =>
                setForm((prev) => ({ ...prev, email: value }))
              }
              onBlur={() => validate()}
              title="Email"
              placeholder="Enter your phone or email"
              titleStyles="mt-0"
              value={form.email}
            />
            {errors.email && (
              <Text className="text-red-500">{errors.email}</Text>
            )}
          </View>

          <View>
            <FormField
              handleTextChange={(value) =>
                setForm((prev) => ({ ...prev, password: value }))
              }
              onBlur={() => validate()}
              title="Password"
              placeholder="Enter Password"
              titleStyles="mt-0"
              secure
              value={form.password}
            />
            {errors.password && (
              <Text className="text-red-500">{errors.password}</Text>
            )}
          </View>

          <View>
            <Text className="text-right pr-2 underline text-[#263BED]">
              Forgot Password?
            </Text>
          </View>

          <CustomButton
            onPress={handleLogin}
            isDisabled={loading}
            isLoading={loading}
            title="Log In"
          />

          <CustomSecondaryButton
            onPress={async () => {
              const provider = new GoogleAuthProvider();

              const { user } = await signInWithPopup(auth, provider);
            }}
            containerStyles="mt-7"
            // onPress={handleLogin} // Assuming Google login is handled in the same way
            isDisabled={false}
            title="Continue With Google"
          />

          <CustomSecondaryButton
            onPress={handleLogin} // Assuming Apple login is handled in the same way
            isDisabled={false}
            title="Continue With Apple"
          />

          <View className="flex-row justify-center gap-1">
            <Text>I don't have an Account?</Text>
            <Text
              onPress={() => router.push("sign-up")}
              className="text-[#0066FF] font-bold"
            >
              Sign up
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
