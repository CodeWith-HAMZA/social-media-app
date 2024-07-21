import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@/context/AuthProvider";
import { images } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { getUserPosts } from "@/lib/appwrite/services/posts";
import Trending from "@/components/shared/Trending";
import EmptyListState from "@/components/shared/EmptyListState";
import VideoCard from "@/components/cards/VideoCard";

const Profile = () => {
  const { IsLoggedIn, user } = useAuth();
  const [IsRefreshing, setIsRefreshing] = useState(false);
  const currentUser = user?.documents.at(0);

  const {
    data: posts,
    isFetched,
    isLoading: loading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["userPosts"],
    queryFn: () => getUserPosts(currentUser?.$id as string),
  });
  async function onRefresh() {
    setIsRefreshing(true);
    await refetch();

    // api-call for latest data
    setIsRefreshing(false);
  }

  return (
    <SafeAreaView className="bg-black w-full min-h-full">
      <View className=" flex-row w-full justify-end p-4 ">
        <Text className="text-white text-lg">Logout</Text>
      </View>

      {/* <Trending posts={data} /> */}
      <FlatList
        data={posts}
        renderItem={({ item }) => <VideoCard post={item} />}
        keyExtractor={(item) => item.$id}
        ListHeaderComponent={
          <View className="flex my-6 px-4 space-y-6">
            <View className="items-center">
              <View className="items-center border-red-50">
                <Image
                  source={{ uri: currentUser?.avatar }}
                  className="h-32 rounded-2xl mb-4 w-32"
                  resizeMode="contain"
                />
                <Text className="text-2xl text-white font-bold">
{currentUser?.username}
                </Text>
              </View>
              <View className="flex-row gap-7 mt-5">
                <View className="items-center">
                  <Text className="text-white font-bold text-2xl">{posts?.length}</Text>
                  <Text className="text-gray-400 text-lg">Posts</Text>
                </View>
                <View className="items-center">
                  <Text className="text-white font-bold text-2xl">10.2K</Text>
                  <Text className="text-gray-400 text-lg">Views</Text>
                </View>
              </View>
            </View>
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

export default Profile;

const styles = StyleSheet.create({});
