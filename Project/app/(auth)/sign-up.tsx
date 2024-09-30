import { View, Text, ToastAndroid, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/shared/forms/FormField";
import CustomButton from "@/components/shared/CustomButton";
import CustomSecondaryButton from "@/components/shared/CustomSecondaryButton";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import { router } from "expo-router";
import { toast } from "@/lib/utils";
import { icons } from "@/constants";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    cpassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!form.cpassword) {
      newErrors.cpassword = "Confirm password is required";
    } else if (form.cpassword !== form.password) {
      newErrors.cpassword = "Passwords must match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSignUp = async () => {
    if (!validate()) return; // Validate before proceeding

    try {
      setLoading(true);
      const user = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      setLoading(false);
      toast(`Welcome ${form.email}, You're Successfully Registered`);
      // router.replace("/home");
      ToastAndroid.show("Registered Successfully", ToastAndroid.SHORT);
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
              titleStyles="mt-0"
              title="Email"
              placeholder="Enter your phone or email"
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
              titleStyles="mt-0"
              title="Password"
              placeholder="Enter Password"
              secure
              value={form.password}
            />
            {errors.password && (
              <Text className="text-red-500">{errors.password}</Text>
            )}
          </View>

          <View>
            <FormField
              handleTextChange={(value) =>
                setForm((prev) => ({ ...prev, cpassword: value }))
              }
              onBlur={() => validate()}
              title="Confirm Password"
              placeholder="Confirm Password"
              titleStyles="mt-0"
              secure
              value={form.cpassword}
            />
            {errors.cpassword && (
              <Text className="text-red-500">{errors.cpassword}</Text>
            )}
          </View>

          <CustomButton
            onPress={handleSignUp}
            isDisabled={loading}
            isLoading={loading} 
            // icon={icons.}
            title="Sign Up"
          />
          <CustomSecondaryButton
            containerStyles="mt-7 "
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
            title="Continue With Google"
          />
          <CustomSecondaryButton
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
            title="Continue With Apple"
          />
          <View className="flex-row justify-center gap-1">
            <Text>I already have an account?</Text>
            <Text
              onPress={() => {
                router.push("sign-in");
              }}
              className="text-[#0066FF] font-bold"
            >
              Sign in
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
