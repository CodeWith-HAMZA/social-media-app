import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { images } from "@/constants";
import { useRouter } from "expo-router";

const Onboarding = () => {
  const router = useRouter();
  return (
    <View className="w-full flex-col  justify-between items-center h-[100%] ">
      <View className="bg-[#0066FF] w-[100%] rounded-br-full h-[70%] -top-[26%]"></View>
      {/* <Link href={"/home"} className="text-white">Go To Profile</Link> */}
      <View className="relative -top-[36%] bg-[#0066FF] w-[100%] h-[80%]  rounded-tl-full">
        <View className="relative top-[30%] flex justify-center items-center">
          <Image
            source={images.mainLogo}
            resizeMode="contain"
            className="-mt-8 w-44 "
          />
          <Text
            onPress={() => {
              router.push("sign-in");
            }}
          >
            On Press
          </Text>
          {/* <CustomButton
        className="relative z-40"
          onPress={(e) => {
            router.push("home");
          }}
          title="Continue"
          isDisabled={false}
        /> */}
        </View>
      </View>
      {/* <Link href={"/home"} className="text-white">Go To Profile</Link> */}

      {/* <Image
        source={images.logo}
        className="w-[150px] h-[100px]"
        resizeMode="contain"
      /> */}
      {/* <Image
        source={images.cards}
        className="max-w-[380px] w-full  h-72"
        resizeMode="contain"
      /> */}
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
