import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
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

const Home = () => {
  const [IsRefreshing, setIsRefreshing] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);
  const [Data, setData] = useState([]);
  const [Error, setError] = useState(false);
  // const {
  //   data: posts,
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

  const {
    data: posts,
    isLoading: loading,
    isFetched,
    error,
    refetch,
  } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });

  // console.log(posts, " this is the posts");
  async function onRefresh() {
    setIsRefreshing(true);
    await refetch();
    toast("Successfully Refreshed!");
    // api-call for latest data
    setIsRefreshing(false);
  }
 
  return (
    <SafeAreaView className="bg-black-100 min-h-full">
      <FlatList
        data={posts}
        renderItem={({ item }) => <VideoCard post={item} />}
        keyExtractor={(item) => item.$id}
        ListHeaderComponent={
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome To Our Prompt Mart
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  Prompt Market
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput initialQuery={""} />
            {IsRefreshing ? (
              <ActivityIndicator
                className="mt-3"
                color={"white"}
                size={"large"}
              />
            ) : null}

            {/* Trending Videos Section */}
            <View className="w-full  flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                Latest Trending Videos
              </Text>

              <Trending posts={posts || []} />
            </View>
          </View>
        }
        ListFooterComponent={<View></View>}
        ListEmptyComponent={() =>
          isFetched && (
            <EmptyListState
              title="No Videos Found"
              subtitle="No Videos Created Yet!"
              busy={IsRefreshing}
            />
          )
        }
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={IsRefreshing} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
