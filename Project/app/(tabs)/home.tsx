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
import { useRouter } from "expo-router";
import ProductCard from "@/components/cards/ProductCard";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import Carousel from "@/components/Carousel";
import { useGetProducts } from "@/hooks/api/queries/useGetProducts";
import Header from "@/components/navigation/Header";
import CategoryList from "@/components/shared/lists/CategoriesList";
import Products from "@/components/shared/lists/horizontal/Products";
const Home = () => {
  const [IsRefreshing, setIsRefreshing] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);
  const [Data, setData] = useState([]);
  const [Error, setError] = useState(false);
  const width = Dimensions.get("window").width;

  // const {
  //   data: productDetails;,
  //   error,
  //   executeFn,
  //   loading,
  // } = useFetchData<Video[]>(fetchPosts(), true);
  // const {
  //   data: latestPosts,
  //   error: errorForLatestPost,
  //   executeFn: executeFnForLatestPosts,
  //   loading: loadingForLatestPosts,
  // } = useFetchData<Video[]>(fetchLatestPosts(), true);

  // const {
  //   data: posts,
  //   isLoading: loading,
  //   isFetched,
  //   error,
  //   refetch,
  // } = useQuery({ queryKey: ["products"], queryFn: fetchPosts });

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
      <Header />
      {/* <View className="bg-[#0066FF] h-24 w-[400px] -z-20 -top-10 right-8 relative rounded-br-[180px]"></View> */}
      <View className="flex-col justify-center items-center">
        <View className="relative -top-10">
          <FlatList
            className=""
            data={products}
            renderItem={(product) => <ProductCard product={product} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
            ListHeaderComponent={
              <View className="flex px-3 ">
                <View className="">
                  <Carousel customHeight={140} customWidth={width - 26} />
                </View>
                {/* <Image
                  source={images.thumbnail}
                  className="h-44 w-full rounded-md "
                /> */}
                <View className="flex justify-between w-full my-3 flex-row">
                  <View>
                    <Text className="font-bold text-lg">Categories</Text>
                    <Text className="text-gray-400 text-xs">
                      Based on your interest
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <View className="rounded-full border px-3 py-1 border-[#0066FF]">
                      <Text className="text-[#0066FF]">View all</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <CategoryList
                  categories={[
                    "electronics",
                    "jewelery",
                    "men's clothing",
                    "women's clothing",
                  ]}
                />

                <View className="mt-4">
                  <CategoryList
                    categories={[
                      "electronics",
                      "jewelery",
                      "men's clothing",
                      "women's clothing",
                    ]}
                  />
                </View>

                <View className="flex mt-6 justify-between w-full  flex-row">
                  <View>
                    <Text className="font-bold text-lg">
                      Most Popular Products
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <View className="rounded-full border px-3 py-1 border-[#0066FF]">
                      <Text className="text-[#0066FF]">View all</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                {products && <Products products={products} />}

                <View className="flex mt-6 justify-between w-full flex-row">
                  <View>
                    <Text className="font-bold text-lg">
                      Hamza Just For You
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <View className="rounded-full border px-3 py-1 border-[#0066FF]">
                      <Text className="text-[#0066FF]">View all</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                {/* <Products products={products} /> */}

                {IsRefreshing ? (
                  <ActivityIndicator
                    className="mt-3"
                    color={"white"}
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
