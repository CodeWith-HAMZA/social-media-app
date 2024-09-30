import {
  View,
  StatusBar,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { images } from "@/constants";
import { useRouter } from "expo-router";
import CartItem from "@/components/cards/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/feature/store";
import { limitDecimalPlaces } from "@/lib/utils";

const CartScreen = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const total = useSelector((state: RootState) => state.cart.total);
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(cartItems)
  return (
    <SafeAreaView>
      {/* <Text className="text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quidem iste non doloremque ex deserunt praesentium corrupti commodi vitae odit, esse minima, atque molestias aut repellendus placeat unde optio itaque eos velit expedita labore in vero! Dolorum sapiente consectetur quia.</Text> */}
      <StatusBar barStyle="light-content" backgroundColor="#0066FF" />

      <ScrollView>
        <View className="bg-[#0066FF] mt-[6%] items-center pt-12 pb-5 w-full flex-row justify-between px-4">
          <MaterialIcons name="arrow-back" size={24} color="white" />
          <Text className="font-bold text-lg text-white"> Cart ({cartItems.length})</Text>
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
        <View className="mt-8 px-4">
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
        <View className="flex-col w-full items-center justify-center border-[#E6E6E6] border-2 p-4 mt-4">
          {cartItems && cartItems.map((_, idx) => <CartItem item={_} key={idx}/>)}
          {cartItems.length == 0 && <View className="h-32 flex-row items-center">
              <Text className="text-center text-lg text-lg font-bold">Oops No Items In The Cart!
              </Text>
            </View>}
           {/* <CartItem />
          <CartItem />
          <CartItem /> */}
        </View>

        <View className="mt-4 border-2 py-2 border-[#E6E6E6] rounded-lg px-6">
          <View className="flex flex-row justify-between">
            <Text className="text-lg font-bold">Checkout Summary</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="pl-7">Items Total</Text>
            <Text className="">${limitDecimalPlaces(total, 4)}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="pl-7">Shipping Fee</Text>
            <Text className="">$0</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="pl-7">Coupon Codes</Text>
            <Text className="">10</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="mt-2 font-semibold">Dilevery Discount</Text>
            <Text className="">10%</Text>
           </View>
        </View>
        <TouchableOpacity
        
          onPress={() => {
            if(cartItems.length > 0)
            alert("You Have Checkout Successfully")
            else
          alert("You don't have enough items in the cart")
          }}
          className="py-2.5 bg-[#0066FF] mx-8 rounded-xl mt-2 "
        >
          <Text className="font-bold text-lg text-white text-center">
            Proceed To Checkout
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;
