import { ToastAndroid } from "react-native";

export function toast(msg: string) {
  ToastAndroid.show(msg, 0.7);
}
export const limitDecimalPlaces = (value, decimalPlaces) => {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(value * factor) / factor;
};

export function truncate(text: string, limit: number = 40) {
  if (text.length > limit) {
    return text.substring(0, limit) + "...";
  } else {
    return text;
  }
}
