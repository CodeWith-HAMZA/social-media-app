import { ToastAndroid } from "react-native";

export function toast(msg: string) {
  ToastAndroid.show(msg, 0.7);
}

export function truncate(text: string, limit: number = 40) {
  if (text.length > limit) {
    return text.substring(0, limit) + "...";
  } else {
    return text;
  }
}
