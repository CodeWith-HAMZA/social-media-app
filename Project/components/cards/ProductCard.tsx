import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { images } from "@/constants";
import { useRouter } from "expo-router";
import { truncate } from "@/lib/utils";
import { Product } from "@/models/product.model";
interface ProductCardProps {
  product: { item: Product };
}
const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();
  const item = product.item;
  // console.log(product)

  return (
    <View className="pl-3 pt-5">
      <TouchableOpacity
        className="flex-col justify-center rounded-2xl items-start"
        activeOpacity={0.7}
        onPress={() => {
          // setPlay(true);
          router.push("/products/" + item?.id);
        }}
      >
        <Image
          className="w-40 h-40 rounded-lg border-2"
          source={{ uri: item?.image }}
        />

        <Text className="font-bold text-md mt-1 w-40">
          {truncate(item?.title, 32)}
        </Text>
        <Text className="text-xs text-gray-400">Discount: 70%</Text>
        <Text className="text-xs text-gray-400">
          Ratings: {item?.rating.rate}
        </Text>
        <Text className="text-[#0066FF]">Price: ${item?.price}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
