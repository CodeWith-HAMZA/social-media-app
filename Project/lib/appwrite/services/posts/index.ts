import { Models, Query } from "react-native-appwrite";
import { DATABASE_ID, VIDEOS_COLLECTION_ID, databases } from "../..";
import { Alert } from "react-native";
import { User } from "@/models/user.model";

export async function fetchPosts(): Promise<Models.Document[] | null> {
  try {
    let { documents } = await databases.listDocuments(
      DATABASE_ID,
      VIDEOS_COLLECTION_ID,
      [
        // Query.equal("title", "Avatar"),
      ]
    );

    return [...documents];
  } catch (error) {
    Alert.alert("Error While Fetching Posts");
    return null;
  }
}
export async function fetchLatestPosts(): Promise<Models.Document[] | null> {
  try {
    let { documents } = await databases.listDocuments(
      DATABASE_ID,
      VIDEOS_COLLECTION_ID,
      [Query.orderDesc("$createdAt"), Query.limit(6)]
    );

    return [...documents];
  } catch (error) {
    Alert.alert("Error While Fetching Posts");
    return null;
  }
}

// Get video posts that matches search query
export async function searchPosts(query: string = "") {
  console.log("query is here", query + "shaddu hen");
  try {
    const { documents } = await databases.listDocuments(
      DATABASE_ID,
      VIDEOS_COLLECTION_ID,
      [Query.startsWith("prompt", query)]
    );

    // if (!posts) throw new Error("Something went wrong");

    return documents;
  } catch (error) {
    throw new Error(error);
  }
}
export async function getUserPosts(currentUserId: string) {
  try {
    const { documents } = await databases.listDocuments(
      DATABASE_ID,
      VIDEOS_COLLECTION_ID,
      [Query.equal("creator", currentUserId)]
    );

    // if (!posts) throw new Error("Something went wrong");

    return documents;
    documents;
  } catch (error) {
    throw new Error(error);
  }
}
