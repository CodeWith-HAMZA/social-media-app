import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { icons } from "@/constants";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
function TabIcon({ icon, color, name, focused }) {
  return (
    <View className="items-center justify-center gap-1">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className="text-xs">{name}</Text>
    </View>
  );
}

const TabsLayout = () => {
  return (
    <Tabs
      // tabBar={() => <Text>HEy</Text>}
      // sceneContainerStyle={{paddi}}

      screenListeners={{ focus: () => {} }}
      screenOptions={{
        tabBarShowLabel: false,
        // tabBarActiveTintColor: "#ffa001",

        tabBarInactiveTintColor: "#cdcde0",

        tabBarStyle: {
          backgroundColor: "#fff",

          height: 70,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon({ color, focused, size }) {
            return (
              <View
                className={`rounded-full px-4 py-1 ${
                  focused && "bg-[#0066FF]/10"
                }`}
              >
                <Octicons name="home" size={24} color="#0066FF" />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon({ color, focused, size }) {
            return (
              <View className="">
                    {/* <Text>{3}</Text> */}
                <View
                  className={`rounded-full px-4 py-1 ${
                    focused && "bg-[#0066FF]/10"
                  }`}
                >
                  <AntDesign name="shoppingcart" size={27} color="#0066FF" />
                </View>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon({ color, focused, size }) {
            return (
              <View
                className={`rounded-full px-4 py-1 ${
                  focused && "bg-[#0066FF]/10"
                }`}
              >
                <Feather name="bell" size={27} color="#0066FF" />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon({ color, focused, size }) {
            return (
              <View
                className={`rounded-full px-4 py-1 ${
                  focused && "bg-[#0066FF]/10"
                }`}
              >
                <FontAwesome5
                  name="user-circle"
                  className="bg-gray-300"
                  size={26}
                  color="#0066FF"
                />
              </View>
            );
          },
        }}
      />
      {/* <Tabs.Screen
        name="sh
        u"
        options={{
          title: "Shaddu",
          headerShown: false,
          // tabBarStyle={{display: "none"}}
          // tabBarStyle: { backgroundColor: "red", height: 80 },
          // tabBarItemStyle:{height: 300},

          tabBarIcon({ color, focused, size }) {
            return (
              <TabIcon
                icon={icons.profile}
                color={color}
                name={"Profile"}
                focused={focused}
              />
            );
          },
        }}
      /> */}
    </Tabs>
  );
};

export default TabsLayout;

// import Ionicons from "@expo/vector-icons/Ionicons";
// import { StyleSheet, Image, Platform } from "react-native";

// import { Collapsible } from "@/components/Collapsible";
// import { ExternalLink } from "@/components/ExternalLink";
// import ParallaxScrollView from "@/components/ParallaxScrollView";
// import { ThemedText } from "@/components/ThemedText";
// import { ThemedView } from "@/components/ThemedView";

// export default function TabTwoScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
//       headerImage={
//         <Ionicons size={310} name="code-slash" style={styles.headerImage} />
//       }
//     >
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Explore</ThemedText>
//       </ThemedView>
//       <ThemedText> includes example code to help you get started.</ThemedText>
//       <Collapsible title="File-based routing">
//         <ThemedText>
//           This app has two screens:{" "}
//           <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
//           and{" "}
//           <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
//         </ThemedText>
//         <ThemedText>
//           The layout file in{" "}
//           <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{" "}
//           sets up the tab navigator.
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/router/introduction">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Android, iOS, and web support">
//         <ThemedText>
//           You can open this project on Android, iOS, and the web. To open the
//           web version, press <ThemedText type="defaultSemiBold">w</ThemedText>{" "}
//           in the terminal running this project.
//         </ThemedText>
//       </Collapsible>
//       <Collapsible title="Images">
//         <ThemedText>
//           For static images, you can use the{" "}
//           <ThemedText type="defaultSemiBold">@2x</ThemedText> and{" "}
//           <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to
//           provide files for different screen densities
//         </ThemedText>

//         <ExternalLink href="https://reactnative.dev/docs/images">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Custom fonts">
//         <ThemedText>
//           Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText>{" "}
//           to see how to load{" "}
//           <ThemedText style={{ fontFamily: "SpaceMono" }}>
//             custom fonts such as this one.
//           </ThemedText>
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Light and dark mode components">
//         <ThemedText>
//           This template has light and dark mode support. The{" "}
//           <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook
//           lets you inspect what the user's current color scheme is, and so you
//           can adjust UI colors accordingly.
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Animations">
//         <ThemedText>
//           This template includes an example of an animated component. The{" "}
//           <ThemedText type="defaultSemiBold">
//             components/HelloWave.tsx
//           </ThemedText>{" "}
//           component uses the powerful{" "}
//           <ThemedText type="defaultSemiBold">
//             react-native-reanimated
//           </ThemedText>{" "}
//           library to create a waving hand animation.
//         </ThemedText>
//         {Platform.select({
//           ios: (
//             <ThemedText>
//               The{" "}
//               <ThemedText type="defaultSemiBold">
//                 components/ParallaxScrollView.tsx
//               </ThemedText>{" "}
//               component provides a parallax effect for the header image.
//             </ThemedText>
//           ),
//         })}
//       </Collapsible>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   headerImage: {
//     color: "#808080",
//     bottom: -90,
//     left: -35,
//     position: "absolute",
//   },
//   titleContainer: {
//     flexDirection: "row",
//     gap: 8,
//   },
// });
