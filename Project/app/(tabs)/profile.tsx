import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { images } from "@/constants";
import CartItem from "@/components/cards/CartItem";
import { useAuth } from "@/context/AuthProvider";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";
import Modal from "@/components/Modal";
import { toast } from "@/lib/utils";

const ProfileScreen = () => {
  const { user } = useAuth();
  const router = useRouter();
  return (
    <SafeAreaView className="h-[105%] py-8">
      <ScrollView>
        <View className="flex-row px-4 justify-between items-center">
          <View>
            <MaterialIcons
              name="arrow-back"
              size={24}
              onPress={() => router.back()}
              color="black"
            />
          </View>

          <Text className="text-center text-[36px] font-semibold my-8">
            Profile
          </Text>
          <View>
            {/* <Modal/> */}
            <Text
              onPress={async () => {
                const res = await signOut(auth);
                console.log(res, ' logging....out')

                toast("Logging Out");
                router.replace('sign-in')
              }}
              className="text-lg"
            >
              Logout
            </Text>
          </View>
        </View>

        <View className="border-2  border-[#E6E6E6] flex-row items-center p-2 justify-between rounded-lg mx-4">
          <View className="flex-1">
            <Text className="text-lg font-semibold">Hi, {user?.email}</Text>
            <View className="flex-row items-center">
              <Text className="text-gray-400">Email Verification: </Text>
              <View>
                <Text
                  className={`${
                    user?.emailVerified
                      ? "bg-green-400"
                      : "bg-red-500 border border-red-300"
                  } text-xs px-2 text-white py-1 rounded-full `}
                >
                  {user?.emailVerified ? "Verified" : "Not Verified"}
                </Text>
              </View>
            </View>
          </View>
          <View className="">
            <Image source={images.thumbnail} className="w-20 h-20 rounded-lg" />
          </View>
        </View>
        <View className="mt-6 px-4">
          <Text className="font-bold text-lg">Shipping Address</Text>
          <View className="mt-4 border-2 py-1 border-[#E6E6E6] rounded-lg px-2">
            <View className="flex flex-row justify-between">
              <Text className="text-lg">Pakistan</Text>
              <Text className="text-md text-[#0066FF] font-semibold">
                Change
              </Text>
            </View>
            <Text className="w-[70%] mt-2 mb-3 ">
              House no ***street***cetuhuw theue ueutheuthf
            </Text>
          </View>
        </View>
        <View className="mt-4 px-4">
          <Text className="font-bold text-lg">Payment Methods</Text>
          <Image
            source={images.paymentMethods}
            className="w-full h-20 mt-4"
            resizeMode="contain"
          />
        </View>

        <View className="mt-4 px-4">
          <Text className="font-bold text-lg">Order History</Text>
          {/* <CartItem /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
