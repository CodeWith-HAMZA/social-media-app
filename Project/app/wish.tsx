import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import WishListItem from "@/components/cards/WishListItem";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import ProductCard from "@/components/cards/ProductCard";
import { useRouter } from "expo-router";

const WishList = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="h-full">
      <StatusBar barStyle="light-content" backgroundColor="#0066FF" />

      {/* <Text className="text-black">WishList</Text> */}

      <View className="bg-[#0066FF] p items-center pt-16 pb-5 w-full  flex-row justify-between px-4">
        <MaterialIcons
          name="arrow-back"
          onPress={() => router.back()}
          size={24}
          color="white"
        />
        <Text className="font-bold text-lg text-white"> Wish List</Text>
        <View className="flex-row gap-3">
          <Ionicons name="filter" className="ml-4" size={22} color="white" />

          <Fontisto
            name="heart"
            // onPress={() => router.push("wish")}
            size={20}
            color="white"
          />
        </View>
      </View>

      <FlatList
        data={[{ $id: 342, $id: 34 }, { $id: 234 }, { $id: 23 }]}
        renderItem={({ item }) => <ProductCard post={item} />}
        keyExtractor={(item) => item.$id}
        numColumns={2}
        ListHeaderComponent={() => (
          <>
            <View className="mt-10 mb-10 px-3">
              <WishListItem />
            </View>
            <View className="w-full border mb-2 border-[#E6E6E6]"></View>
            <Text className="font-bold text-xl px-3">Same Like This</Text>
          </>
        )}
      />
      {/* <Text className="text-black">WishList</Text> */}
    </SafeAreaView>
  );
};

export default WishList;

const styles = StyleSheet.create({});
