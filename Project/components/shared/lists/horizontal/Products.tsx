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
import EmptyListState from "../../EmptyListState";
import { Video } from "@/models/video.model";
import * as Animatable from "react-native-animatable";
import { icons, images } from "@/constants";
import { Video as VideoPlayer, ResizeMode } from "expo-av";
import { Product } from "@/models/product.model";
import ProductCard from "@/components/cards/ProductCard";
const zoomIn = {
  0: {
    scale: 0.94,
  },
  1: {
    scale: 0.94,
  },
};
const zoomOut = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 0.9,
  },
};

function ProductItem({ post, activeItem }: { post: Video; activeItem: Video }) {
  const [Play, setPlay] = useState(false);
  return (
    <Animatable.View
      duration={300}
      animation={activeItem?.$id === post?.$id ? zoomIn : zoomOut}
    >
      <TouchableOpacity
        className="relative w-full flex-col justify-center rounded-2xl items-start"
        activeOpacity={0.7}
        onPress={() => {
          setPlay(true);
        }}
      >
        <Image
          className="w-32 h-32 rounded-lg border-2"
          source={images.thumbnail}
        />

        <Text className="font-bold text-lg">{post?.title}</Text>
        <Text className="text-xs text-gray-400">Discount: 70%</Text>
        <Text className="text-[#0066FF]">Price: $1243</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
}
const Products = ({ products }: { products: Product[] }) => {

  const [ActiveItem, setActiveItem] = useState(products[1]);
  // const posts = products
  function handleItemsViewChange({
    changed,
    viewableItems,
  }: {
    viewableItems: ViewToken<Product>[];
    changed: ViewToken<Product>[];
  }) {
    // console.log("hey there this", viewableItems);
    setActiveItem(viewableItems[0].item);
  }
  return (
    <View className="">
      <FlatList
        data={[...products]}
        keyExtractor={(item) => item?.id || ''}
        showsHorizontalScrollIndicator={false}
        renderItem={(product) => {
          // console.log(" my console y", item?.$id, ActiveItem?.$id);
          return <ProductCard product={product} />
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

export default Products;

const styles = StyleSheet.create({});
