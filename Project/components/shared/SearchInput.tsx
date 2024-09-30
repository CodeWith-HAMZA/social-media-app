import { useState } from "react";
import Feather from "@expo/vector-icons/Feather";

import Entypo from "@expo/vector-icons/Entypo";

import { router, usePathname } from "expo-router";
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  Text,
} from "react-native";
import { icons } from "@/constants";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const SearchInput = ({ initialQuery }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View className="flex bg-white flex-row items-center space-x-2 w-[260px] h-11 px-4 rounded-xl ">
      <TextInput
        className="text-base mt-0.5  flex-1 font-pregular"
        value={query}
        placeholder="Search Products"
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />
      <TouchableOpacity activeOpacity={0.9}>
        <View className="flex-row items-center gap-2">
          {query.length !== 0 && (
            <Entypo
            className="text-gray-500"
              name="circle-with-cross"
              size={14}
              color="black"
              onPress={() => {
                if (query.length !== 0) {
                  setQuery("");
                  return;
                }
              }}
            />
          )}
          <Feather
            onPress={() => {
              if (query === "")
                return Alert.alert(
                  "Missing Query",
                  "Please input something to search results across database"
                );

              if (pathname.startsWith("/search")) router.setParams({ query });
              else router.push(`/search/${query}`);
            }}
            name="search"
            size={18}
            color="black"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
