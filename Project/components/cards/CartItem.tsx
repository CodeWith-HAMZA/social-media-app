import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { images } from "@/constants";
import { Product } from "@/models/product.model";
import {
  CartItem as Item,
  removeFromCart,
  updateQuantity,
} from "@/feature/slices/cart.slice";
import { useDispatch } from "react-redux";
import { useRouter } from "expo-router";
interface CartItemProps {
  item: Item;
}
const CartItem = ({ item }: CartItemProps) => {
  const router = useRouter();
  const [qty, setQty] = React.useState(1);
  const dispatch = useDispatch();
  return (
    <View className="mt-4">
      <TouchableOpacity
        onPress={() => router.push(`/products/${item?.id}`)}
        activeOpacity={0.8}
        className="flex-row gap-3"
      >
        {item?.image && (
          <Image
            source={{ uri: item?.image }}
            className="h-36 w-36 rounded-xl"
          />
        )}
        <View>
          <Text className="w-40 text-xs  leading-4">{item.name}</Text>
          <Text className="text-[#0066FF] mt-1">$ {item?.price}</Text>
          <View className="flex-row justify-between">
            <Text className="mt-1">Quantity</Text>

            <View>
              <View className="flex-row">
                <Text
                  className="border px-2 border-[#E6E6E6]"
                  onPress={() => {
                    if (item?.quantity > 1) {
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity - 1,
                        })
                      );
                    }
                  }}
                >
                  -
                </Text>
                <Text className="border px-2 border-[#E6E6E6]">
                  {item?.quantity}
                </Text>
                <Text
                  onPress={() => {
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity + 1,
                      })
                    );
                  }}
                  className="border px-2 border-[#E6E6E6]"
                >
                  +
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.6} className="opacity-30">
            <MaterialCommunityIcons
              onPress={() => dispatch(removeFromCart(item?.id))}
              name="delete"
              size={20}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
