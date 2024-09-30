import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
function OrdersList() {
  return (
    <View className="w-full h-[76%] mx-[2%]">
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={(item) => (
          <>
            <Text className="absolute right-[7%] top-[4%]">6/6/2024</Text>
            <View className="bg-gray-100/30 w-full rounded-sm  h-28 justify-center flex-row gap-4 my-1 items-center">
              <Image
                resizeMode="cover"
                className="h-20 my-auto w-20 rounded-md"
                source={images.thumbnail}
              />
              <Text className="w-[60%] relative -top-[4%]">
                Classic luxury Watch id available now ue ue u{" "}
              </Text>
            </View>
          </>
        )}
        keyExtractor={(item) => item}
      />
      <View className="h-24"></View>
    </View>
  );
}
function OffersList() {
  return (
    <View className="w-full h-full px-3">
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={(item) => (
          <>
            <View className="bg-gray-100/30 py-3 my-2 w-full flex-1  rounded-sm">
              <View className="px-2 mb-2">
                <Text className="text-[16px] font-semibold">
                  6.6 Sale Fashion Ka Jashan
                </Text>
                <Text className=" text-xs text-[#5A5A5A]">6/6/2024</Text>
              </View>
              <Image
                resizeMode="cover"
                className="h-32 w-full"
                source={images.thumbnail}
              />
            </View>
          </>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
}
function DiscountsList() {
  return (
    <View className="w-full h-[68%] px-3">
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={(item) => (
          <>
            <View className=" bg-gray-100/40 py-3 my-2 w-full flex-1 flex-row px-3 rounded-xl">
              <View className="px-2 mb-2 w-[60%]">
                <Text className="text-[36px] font-semibold">20% off</Text>
                <Text className="text-[24px] font-semibold">Week Deals</Text>
                <Text className="text-[16px] ">
                  Get a new car only valid This Week
                </Text>
                {/* <Text className=" text-xs text-[#5A5A5A]">6/6/2024</Text> */}
              </View>
              <Image
                resizeMode="contain"
                className="w-[40%] h-32 h-32"
                source={images.car}
              />
            </View>
          </>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

type Tabs = "offers" | "orders" | "promos";
const Notifications = () => {
  const [SelectedTab, setSelectedTab] = useState<Tabs>("orders");
  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row justify-center items-center py-8">
        <Text className="font-[500] text-[36px]">Notification</Text>
      </View>
      <View className="flex-row px-6 mb-6 justify-between">
        <TouchableOpacity
          className={`${SelectedTab === "orders" && "opacity-40"}`}
          onPress={() => setSelectedTab("orders")}
        >
          <Image
            className="size-[55px]"
            resizeMode="contain"
            source={images.orders}
          />

          <Text className="text-center font-semibold text-[#0066FF] my-1">
            Orders
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`${SelectedTab === "offers" && "opacity-40"}`}
          onPress={() => setSelectedTab("offers")}
        >
          <Image
            className="size-[55px]"
            resizeMode="contain"
            source={images.offers}
          />
          <Text className="text-center font-semibold text-[#0066FF] my-1">
            Offers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`${SelectedTab === "promos" && "opacity-40"}`}
          onPress={() => setSelectedTab("promos")}
        >
          <Image
            className="size-[55px]"
            resizeMode="contain"
            source={images.promos}
          />
          <Text className="text-center font-semibold text-[#0066FF] my-1">
            Promos
          </Text>
        </TouchableOpacity>
      </View>
      {SelectedTab === "orders" && <OrdersList />}
      {SelectedTab === "offers" && <OffersList />}
      {SelectedTab === "promos" && <DiscountsList />}
     </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
