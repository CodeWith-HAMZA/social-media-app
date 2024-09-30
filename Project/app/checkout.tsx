import {
  Image,
  SafeAreaView,
  SafeAreaViewComponent,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { images } from "@/constants";
import FormField from "@/components/shared/forms/FormField";
import CustomButton from "@/components/shared/CustomButton";
type PaymentMethods = "debit-credit-card" | "paypal" | "apple-pay" | "others";
function RadioButton() {
  return (
    <>
      <View className="bg-[#0066FF] mt-1 p-[2%] rounded-full">
        <View className="bg-white  rounded-full h-3 w-3"></View>
      </View>
    </>
  );
}
const CheckoutPayment = () => {
  const [SelectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethods>("debit-credit-card");

  return (
    <SafeAreaView>
      {/* <Text className="text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quidem iste non doloremque ex deserunt praesentium corrupti commodi vitae odit, esse minima, atque molestias aut repellendus placeat unde optio itaque eos velit expedita labore in vero! Dolorum sapiente consectetur quia.</Text> */}
      <StatusBar barStyle="light-content" backgroundColor="#0066FF" />

      <ScrollView>
        <View className="bg-[#0066FF] mt-[5%] items-center pt-12 pb-5 w-full flex-row justify-between px-4">
          <MaterialIcons name="arrow-back" size={24} color="white" />
          <Text className="font-bold text-lg text-white"> Checkout (1)</Text>
          <View className="flex-row gap-3">
            <Ionicons name="filter" className="ml-4" size={22} color="white" />

            <Fontisto
              name="heart"
              onPress={() => router.push("wish")}
              size={20}
              color="white"
            />
          </View>
        </View>
        <View>
          <Text className="text-[28px] font-[500] mx-4 mb-2 mt-4">Payment</Text>
          <View className="flex flex-col gap-y-[1px] mx-4">
            <TouchableOpacity
              onPress={() => {
                setSelectedPaymentMethod("debit-credit-card");
              }}
              className="flex-row justify-between items-center gap-3"
            >
              <View className="flex-row items-center">
                <View className="bg-gray-100/60 p-3 mr-3 rounded-lg">
                  <Image
                    source={images.masterCardLogo}
                    className="w-6 h-6"
                    resizeMode="contain"
                  />
                </View>
                <Text className="text-[16px]">Credit/Debit Card</Text>
              </View>
              {SelectedPaymentMethod === "debit-credit-card" && <RadioButton />}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelectedPaymentMethod("paypal");
              }}
              className="flex-row justify-between items-center gap-3"
            >
              <View className="flex-row items-center">
                <View className="bg-gray-100/60 p-3 mr-3 rounded-lg">
                  <Image
                    source={images.masterCardLogo}
                    className="w-6 h-6"
                    resizeMode="contain"
                  />
                </View>
                <Text className="text-[16px]">Paypal</Text>
              </View>
              {SelectedPaymentMethod === "paypal" && <RadioButton />}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelectedPaymentMethod("apple-pay");
              }}
              className="flex-row justify-between items-center gap-3"
            >
              <View className="flex-row items-center">
                <View className="bg-gray-100/60 p-3 mr-3 rounded-lg">
                  <Image
                    source={images.masterCardLogo}
                    className="w-6 h-6"
                    resizeMode="contain"
                  />
                </View>
                <Text className="text-[16px]">Apple pay</Text>
              </View>
              {SelectedPaymentMethod === "apple-pay" && <RadioButton />}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelectedPaymentMethod("others");
              }}
              className="flex-row justify-between items-center gap-3"
            >
              <View className="flex-row items-center">
                <View className="bg-gray-100/60 p-3 mr-3 rounded-lg">
                  <Image
                    source={images.masterCardLogo}
                    className="w-6 h-6"
                    resizeMode="contain"
                  />
                </View>
                <Text className="text-[16px]">Other Payments Method</Text>
              </View>
              {SelectedPaymentMethod === "others" && <RadioButton />}
            </TouchableOpacity>
          </View>

          <FormField
            title="Enter Card Name"
            placeholder="Enter your card name"
            otherStyles="mx-3 "
            titleStyles="text-gray-500"
          />
          <View className="mt-1 px-4">
            <Text className="font-bold text-lg">Shipping Address</Text>
            <View className="mt-3 border-2 py-1 border-[#E6E6E6] rounded-lg px-2">
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
          <View className="flex-row justify-between px-4 mt-3">
            <Text className="font-bold text-[20px]">Total</Text>
            <Text className="font-bold text-[20px]">$ 600</Text>
          </View>
          {/* <View className="px-4">
            <CustomButton title="Proceed to Check out" />
          </View> */}
          <TouchableOpacity
            onPress={() => router.push("checkout")}
            className="py-2.5 bg-[#0066FF] mx-4 rounded-xl mt-2 "
          >
            <Text className="font-bold text-lg text-white text-center">
              Proceed To Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckoutPayment;

const styles = StyleSheet.create({});
