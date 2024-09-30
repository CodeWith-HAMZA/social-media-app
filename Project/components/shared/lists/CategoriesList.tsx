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
import { icons, images } from "@/constants";
import { Video as VideoPlayer, ResizeMode } from "expo-av";
import { Category } from "@/models/product.model";
const zoomIn = {
  0: {
    scale: 0.87,
  },
  1: {
    scale: 0.87,
  },
};
const zoomOut = {
  0: {
    scale: 0.87,
  },
  1: {
    scale: 0.87,
  },
};

function CategoryItem({
  item,
  activeItem,
}: {
  item: Category;
  activeItem: Category;
}) {
  const [Play, setPlay] = useState(false);
  return (
    <Animatable.View
      duration={300}
      animation={activeItem === item ? zoomIn : zoomOut}
    >
      <TouchableOpacity
        className="relative w-full justify-center rounded-2xl items-center"
        activeOpacity={0.7}
        onPress={() => {
          setPlay(true);
        }}
      >
        <Image
          className="w-24 mb-1 h-24 rounded-full border-2"
          source={images.thumbnail}
        />
        {/* <Image
            resizeMode="contain"
            className="w-12 border-2 h-12 absolute rounded-xl"
            source={icons.play}
          /> */}
        <Text>{item}</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
}
const CategoryList = ({ categories }: { categories: Category[] }) => {
  const [ActiveItem, setActiveItem] = useState(categories[1]);
  function handleItemsViewChange({
    changed,
    viewableItems,
  }: {
    viewableItems: ViewToken<Category>[];
    changed: ViewToken<Category>[];
  }) {
    // console.log("hey there this", viewableItems);
    setActiveItem(viewableItems[0].item);
  }
  return (
    <View>
      <FlatList
        data={[...categories]}
        keyExtractor={(item) => item}

        // scrollEnabled={false}
        showsHorizontalScrollIndicator={false} // Hide vertical scrollbar

        renderItem={({ item, index }) => {
          // console.log(" my console y", item?.$id, ActiveItem?.$id);
          return <CategoryItem activeItem={ActiveItem} item={item} />;
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

export default CategoryList;

const styles = StyleSheet.create({});
