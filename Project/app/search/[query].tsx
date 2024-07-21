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
import {
  fetchLatestPosts,
  fetchPosts,
  searchPosts,
} from "@/lib/appwrite/services/posts";
import VideoCard from "@/components/cards/VideoCard";
import { Video } from "@/models/video.model";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";

const Home = () => {
  const [IsRefreshing, setIsRefreshing] = useState(false);

  const { query } = useLocalSearchParams();
  const {
    data: posts,
    isLoading: loading,
    isFetched,

    error,
    refetch,
  } = useQuery({
    queryKey: ["postsquery", query],
    queryFn: ({ queryKey }) => searchPosts(queryKey[1]),
    enabled: !!query as boolean,
  });

  console.log(posts, " this is the posts");
  async function onRefresh() {
    setIsRefreshing(true);
    await refetch();

    // api-call for latest data
    setIsRefreshing(false);
  }

  console.log("rendered ");
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
                  Search Results
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  "{query}"
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
            {IsRefreshing || loading ? (
              <ActivityIndicator
                className="mt-3"
                color={"white"}
                size={"large"}
              />
            ) : null}
          </View>
        }
        ListFooterComponent={<View></View>}
        ListEmptyComponent={() => {
          if (isFetched && !loading)
            return (
              <EmptyListState
                title="No Videos Found"
                subtitle="No Videos Created Yet!"
                busy={IsRefreshing}
              />
            );
        }}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={IsRefreshing} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
