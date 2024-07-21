import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
} from "react-native";
import React, { useState } from "react";
import EmptyListState from "./EmptyListState";
import { Video } from "@/models/video.model";
import * as Animatable from "react-native-animatable";
import { icons } from "@/constants";
import { Video as VideoPlayer, ResizeMode } from "expo-av";
const zoomIn = {
  0: {
    scale: 0.87,
  },
  1: {
    scale: 0.94,
  },
};
const zoomOut = {
  0: {
    scale: 0.94,
  },
  1: {
    scale: 0.87,
  },
};

function TrendingItem({
  post,
  activeItem,
}: {
  post: Video;
  activeItem: Video;
}) {
  const [Play, setPlay] = useState(false);
  return (
    <Animatable.View
      duration={300}
      animation={activeItem?.$id === post?.$id ? zoomIn : zoomOut}
    >
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
          className="w-48 h-72 rounded-2xl bg-white/10"
        />
      ) : (
        <TouchableOpacity
          className="relative h-80 w-full justify-center rounded-2xl items-center"
          activeOpacity={0.7}
          onPress={() => {
            setPlay(true);
          }}
        >
          <Image
            className="w-48 h-72 rounded-2xl border-2"
            source={{ uri: post.thumbnail }}
          />
          <Image
            resizeMode="contain"
            className="w-12 border-2 h-12 absolute rounded-xl"
            source={icons.play}
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
}
const Trending = ({ posts }: { posts: Video[] }) => {
  const [ActiveItem, setActiveItem] = useState(posts[1]);
  function handleItemsViewChange({
    changed,
    viewableItems,
  }: {
    viewableItems: ViewToken<Video>[];
    changed: ViewToken<Video>[];
  }) {
    // console.log("hey there this", viewableItems);
    setActiveItem(viewableItems[0].item);
  }
  return (
    <View>
      <FlatList
        data={[...posts]}
        keyExtractor={(item) => item?.$id}
        renderItem={({ item, index }) => {
          // console.log(" my console y", item?.$id, ActiveItem?.$id);
          return <TrendingItem activeItem={ActiveItem} post={item} />;
        }}
        onViewableItemsChanged={(dets) => handleItemsViewChange(dets)}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 80,
          // viewAreaCoveragePercentThreshold: 100,
        }}
        // contentOffset={{x: 170}}
        horizontal
        ListEmptyComponent={() => <Text>No Data Available</Text>}
      />
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({});
