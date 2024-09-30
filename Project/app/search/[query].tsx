// import AntDesign from "@expo/vector-icons/AntDesign";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  RefreshControl,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import SearchInput from "@/components/shared/SearchInput";
import Trending from "@/components/shared/Trending";
import EmptyListState from "@/components/shared/EmptyListState";
import useFetchData from "@/hooks/useFetchData";
import { fetchLatestPosts, fetchPosts } from "@/lib/appwrite/services/posts";
import VideoCard from "@/components/cards/VideoCard";
import { Video } from "@/models/video.model";
import { useQuery } from "@tanstack/react-query";
import { toast } from "@/lib/utils";
import { useLocalSearchParams, useRouter } from "expo-router";
import ProductCard from "@/components/cards/ProductCard";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import Carousel from "@/components/Carousel";
import { useGetProducts } from "@/hooks/api/queries/useGetProducts";
import Header from "@/components/navigation/Header";
import CategoryList from "@/components/shared/lists/CategoriesList";
import Products from "@/components/shared/lists/horizontal/Products";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const Home = () => {
  const [IsRefreshing, setIsRefreshing] = useState(false);

  const item = useLocalSearchParams();
  const [IsLoading, setIsLoading] = useState(false);
  const [Data, setData] = useState([]);
  const [Error, setError] = useState(false);
  const width = Dimensions.get("window").width;

  const {
    data: products,
    isFetched,
    refetch,
    isLoading,
    isError,
  } = useGetProducts();
  console.log(products);

  const router = useRouter();
  // console.log(posts, " this is the posts");
  async function onRefresh() {
    setIsRefreshing(true);
    await refetch();
    toast("Successfully Refreshed!");
    // api-call for latest data
    setIsRefreshing(false);
  }

  return (
    <SafeAreaView className="min-h-full">
      <StatusBar barStyle="light-content" backgroundColor="#0066FF" />
      {/* <Header /> */}
      {/* <View className="pt-8 pb-3 px-5 items-center   gap-2 flex-row">
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="left" size={19} color="black" />
        </TouchableOpacity>
        <Text className="text-lg font-bold">Search Results: "{item?.query}"</Text>
        <Text>{}</Text>
      </View> */}
      <View className="bg-[#0066FF] items-center pt-12 pb-5 w-full flex-row justify-between px-4">
        <TouchableOpacity>
          <MaterialIcons
            onPress={() => router.back()}
            name="arrow-back"
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <Text className="font-bold text-lg text-white"> Search Results</Text>
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
      {/* <View className="bg-[#0066FF] h-24 w-[400px] -z-20 -top-10 right-8 relative rounded-br-[180px]"></View> */}
      <Text className="px-5 text-md text-gray-500 mt-4 mb-2">
        You Searched For "{item?.query}"
      </Text>
      <View className="flex-col justify-center items-center">
        {isLoading && <ActivityIndicator color="black" />}
        <View className="relative">
          <FlatList
            showsVerticalScrollIndicator={false}
            className=""
            data={products}
            renderItem={(product) => <ProductCard product={product} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
            ListHeaderComponent={
              <View className="flex px-3 ">
                {/* <Image
                  source={images.thumbnail}
                  className="h-44 w-full rounded-md "
                /> */}
                {/* <Products products={products} /> */}

                {IsRefreshing ? (
                  <ActivityIndicator
                    className="mt-3"
                    color={"black"}
                    size={"large"}
                  />
                ) : null}
              </View>
            }
            ListFooterComponent={
              <View>
                <View className="h-44"></View>
              </View>
            }
            ListEmptyComponent={() =>
              false && (
                <View>
                  <Text>No data found</Text>
                </View>
                // <EmptyListState
                //   title="No Videos Found"
                //   subtitle="No Videos Created Yet!"
                //   busy={IsRefreshing}
                // />
              )
            }
            refreshControl={
              <RefreshControl onRefresh={onRefresh} refreshing={IsRefreshing} />
            }
          />
          <View className="h-32"></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
