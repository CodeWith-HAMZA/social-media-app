import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import Octicons from "@expo/vector-icons/Octicons";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import SearchInput from "@/components/shared/SearchInput";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";

import Carousel from "@/components/Carousel";
import CustomButton from "@/components/shared/CustomButton";
import { images } from "@/constants";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useGetProductDetails } from "@/hooks/api/queries/useGetProductDetails";
import { toast, truncate } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/feature/slices/cart.slice";
import { RootState } from "@/feature/store";

function ReviewItem() {
  function ReviewImage() {
    return (
      <TouchableOpacity className="mr-2">
        <Image source={images.thumbnail} className="h-20 w-20 rounded-xl" />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="border-t border-gray-200 py-2"
    >
      <View className="flex-row justify-between">
        <View className="flex-row items-center gap-1">
          <Octicons name="star-fill" size={14} color="#FFE600" />
          <Octicons name="star-fill" size={14} color="#FFE600" />
          <Octicons name="star-fill" size={14} color="#FFE600" />
          <Feather name="star" size={14} color="#FFE600" />
          {/* <Feather name="star" size={14} color="#FFE600" /> */}
          <Text className="ml-4 text-[#B5B5B5]">Anonymous</Text>
        </View>
        <Text className="ml-4 text-[#B5B5B5]">3 days ago</Text>
      </View>
      <Text className="mt-2">
        Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Alias. Lorem ipsum dolor sit amet. lorem ipsum sit. Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. lorem.
      </Text>
      <View className="mt-2 flex-row ">
        <ReviewImage />
        <ReviewImage />

        <ReviewImage />
      </View>
    </TouchableOpacity>
  );
}

const ProductDetails = () => {
  const route = useRouter();

  const item = useLocalSearchParams();

  const { data: product } = useGetProductDetails(item?.id || 1);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const Ratings = ({ rating }: { rating: number }) => {
    const filledStars = rating; // Ensure rating is between 0 and 5
    const unfilledStars = 5 - Math.floor(filledStars);

    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
        }}
      >
        {Array.from({ length: filledStars }).map((_, index) => (
          <Octicons
            key={`filled-${index}`}
            name="star-fill"
            size={20}
            color="#FFE600"
          />
        ))}
        {Array.from({ length: unfilledStars }).map((_, index) => (
          <Feather
            key={`unfilled-${index}`}
            name="star"
            size={20}
            color="#FFE600"
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView className="bg-gray-50">
      <StatusBar barStyle="light-content" backgroundColor="#0066FF" />
      <View className="flex-row justify-between items-center gap-2 bg-[#0066FF]  pt-16 px-6">
        {/* <Text>{item.id} + 'eu'</Text> */}
        <SearchInput initialQuery={""} />
        <Ionicons name="filter" className="ml-4" size={22} color="white" />
        <Fontisto name="heart" size={20} color="white" />
      </View>
      <View className="bg-[#0066FF] h-[86px] w-[103%] -top-12 -right-[0%] -z-20 relative rounded-br-[200px]"></View>
      <ScrollView className="w-full relative -top-[10%] -z-40">
        {/* <Image className="w-full h-[50%] relative -z-50 -top-[14%]" source={images.thumbnail} /> */}
        <View className="w-full">
          <Carousel imageUrl={product?.image} />
        </View>
        <View className="relative -top-[6%] ">
          <View className="p-4  bg-white border-2 mx-[1%] border-gray-400/30 rounded-xl">
            <Text className="text-lg text-[18px] leading-5  font-[500] text-[#212121]">
              {truncate(product?.title || "", 100)}
            </Text>
            <Text className="mt-2 mb-1.5 text-[14px] font-[500] text-[#212121]">
              {truncate(product?.description || "", 120)}
            </Text>

            <View className="flex-row justify-between">
              <View className="flex-row justify-center gap-x-3 items-center">
                <Text className="text-[20px] font-[500] text-[#0066FF]">
                  $ {product?.price}
                </Text>
                <Text className="text-[14 px] font-[500] text-[#878787]">
                  Rs 700 -73%
                </Text>
              </View>
              <View className="flex-row justify-center gap-x-1 items-center">
                <Text className="text-[16px] mr-2 font-bold">2k sold</Text>
                <AntDesign name="hearto" size={16} color="black" />

                <Text className="text-[16px] font-bold">1k</Text>
              </View>
            </View>

            <TouchableOpacity className="border-[0.5px] flex-row justify-between rounded-[4px] py-3 mt-3 px-2 border-gray-400">
              <View className="flex-row items-center gap-2">
                <Octicons name="star-fill" size={16} color="#FFE600" />
                <Text>{product?.rating?.rate}</Text>
                <SimpleLineIcons name="arrow-right" size={12} color="black" />
              </View>
              <View>
                <Text>200 Questions and Answers</Text>
              </View>
            </TouchableOpacity>
            <CustomButton title="Ask question" />
            <View className="flex-row justify-between"></View>
          </View>
          <View className="flex-row justify-between mt-3 pb-4 px-4 bg-white ">
            <CustomButton title="Order now" containerStyles="flex-1" />
            {product && !cartItems.find((item) => item.id === product.id) ? (
              <CustomButton
                isDisabled={product ? false : true}
                onPress={() => {
                  if (
                    product &&
                    !cartItems.find((item) => item.id === product.id)
                  ) {
                    dispatch(
                      addToCart({
                        id: product.id,
                        name: product.title,
                        price: product.price,
                        image: product.image,
                        quantity: 1,
                      })
                    );
                    toast("Added to your cart");
                  } else toast("Already in your cart");
                }}
                title="Add to cart"
                containerStyles="flex-1 ml-3 bg-[#FF5C00]"
              />
            ) : (
              <CustomButton
                isDisabled={product ? false : true}
                onPress={() => {
                  if (
                    product &&
                    cartItems.find((item) => item.id === product.id)
                  ) {
                    dispatch(removeFromCart(product?.id));
                    toast("Item Removed From The Cart");
                  }
                }}
                title="Remove Item"
                textStyles="text-gray-700"
                containerStyles="flex-1 ml-3 bg-gray-300/70"
              />
            )}
          </View>
          <View className="mt-4 px-6">
            <Text className="text-[18px]  font-semibold">
              Ratings & Reviews
            </Text>
            <View className="flex-row items-end gap-x-2 my-2">
              <Text className="text-[20px]">{product?.rating?.rate}</Text>
              <View className="flex-row items-center gap-x-1 justify-center">
                <Ratings rating={product?.rating?.rate} />
              </View>
            </View>
            <View className="flex-col justify-center gap-y-4 mt-[1%]">
              <ReviewItem />
              <ReviewItem />
              <ReviewItem />
            </View>
          </View>
          <TouchableOpacity className="border-t border-b mt-2 justify-center flex-row items-center py-3 border-gray-300 ">
            <Text className="text-lg font-bold text-[#0066FF] text-center">
              View all
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={26}
              color="#0066FF"
            />
          </TouchableOpacity>
          <View className="h-16"></View>
        </View>

        {/* <View className="flex-col gap-y-2 justify-center items-center">

            </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
