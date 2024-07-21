import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Video as VideoPlayer, ResizeMode } from "expo-av";

import React, { useState } from "react";
import { Video } from "@/models/video.model";
import { truncate } from "@/lib/utils";
import { icons } from "@/constants";
interface Props {
  post: Video;
}
const VideoCard = ({ post }: Props) => {
  const [Play, setPlay] = useState(false);
  return (
    <View className="flex-col p-4 mb-4">
      {/* <Text className="text-white">{JSON.stringify(post?.creator)}</Text> */}
      <View className="flex-row mb-4 items-center justify-between gap-2  ">
        <View className="flex-row gap-2">
          <Image
            source={{ uri: post.creator.avatar }}
            className="h-11 rounded-md w-11"
            resizeMode="contain"
          />

          <View className="">
            <Text className="text-white text-base font-bold">
              {truncate(post.prompt, 34)}
            </Text>
            <Text className="text-gray-300 ">{post.creator.email}</Text>
          </View>
        </View>
        <View>
          <Image source={icons.menu} className="h-4 w-4" resizeMode="contain" />
        </View>
      </View>
      {Play ? (
        <VideoPlayer
          source={{
            uri: post.video || "",
          }}
          resizeMode={ResizeMode.STRETCH}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status?.didJustFinish) {
              setPlay(false);
            }
          }}
          className="w-full h-60 rounded-2xl bg-white/10"
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-xl mt-3 relative flex justify-center items-center"
        >
          <Image
            source={{ uri: post.thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />

          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({});
