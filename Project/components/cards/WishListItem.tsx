import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { images } from "@/constants";
import AntDesign from "@expo/vector-icons/AntDesign";

const WishListItem = () => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.9} className="flex-row gap-3">
        <Image source={images.thumbnail} className="h-36 w-36 rounded-xl" />
        <View>
          <Text className="w-40 text-xs leading-4">
            Lorem Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda, esse...
          </Text>
          <Text className="text-[#0066FF] mt-1">$ 500</Text>
          <View className="flex-row justify-between">
            {/* <Text className="mt-1">Quantity</Text> */}

            <View>
              <TouchableOpacity
                activeOpacity={0.6}
                className="bg-[#0066FF] px-3 flex-row justify-center items-center gap-x-1 my-1 rounded-full "
              >
                <Text className="text-white py-1 text-xs">Add To Cart</Text>

                <Text>
                  <AntDesign name="shoppingcart" size={16} color="#fff" />
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity activeOpacity={0.6} className="opacity-30">
            <MaterialCommunityIcons name="delete" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default WishListItem;

const styles = StyleSheet.create({});
