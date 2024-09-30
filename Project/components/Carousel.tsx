import { images } from "@/constants";
import * as React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import CarouselComponent from "react-native-reanimated-carousel";

function Carousel({ customWidth, customHeight, imageUrl }) {
  const width = Dimensions.get("window").width;
  return (
    <View style={{ flex: 1 }}>
      <CarouselComponent
        loop
        width={customWidth || width}
        height={customHeight || width * 1.2}
        autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              // borderWidth: 1,
              justifyContent: "center",
            }}
          >
            {/* <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text> */}
            <Image
              className="w-full h-full rounded-md"
              source={imageUrl ? { uri: imageUrl } : images.thumbnail}
            />
          </View>
        )}
      />
    </View>
  );
}

export default Carousel;
