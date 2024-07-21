export const projectId = "667193db002c3752c189"; // project id, rn_arora_first_app
export const endpoint = "https://cloud.appwrite.io/v1";
export const appName = "rn_arora_first_app";
const platform = "com.hamzee.arora";
export const DATABASE_ID = "667198aa002f36fad599";
export const USERS_COLLECTION_ID = "667199c2001e172e50fa";
export const VIDEOS_COLLECTION_ID = "667199cd002a2c6af3a8";

const STORAGE_ID = "66719c520012876419d3"; // files
import { Client, Databases, Account, ID, Avatars, Storage } from "react-native-appwrite";

const client = new Client();
client
  .setEndpoint(endpoint)
  .setProject(projectId) // Replace with your project ID
  .setPlatform(platform);

export const account = new Account(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);
export const storage = new Storage(client);



