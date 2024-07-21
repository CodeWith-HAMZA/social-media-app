// authService.ts
import { ID, Query } from "react-native-appwrite";
import {
  DATABASE_ID,
  USERS_COLLECTION_ID,
  account,
  avatars,
  databases,
} from "../../index";

export const registerUser = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    const newAccount = await account.create(ID.unique(), email, password, name);
    // if (!newAccount) throw Error;

    // await loginUser(email, password);
    const avatarUrl = avatars.getInitials(name);

    const newUser = await databases.createDocument(
      DATABASE_ID,
      USERS_COLLECTION_ID,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username: name,
        avatar: avatarUrl,
      }
    );
    return newUser;
  } catch (error) {
    throw error;
  }
};

//login
export async function loginUser(email: string, password: string) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw error;
  }
}

export async function getCurrentUser() {
  const currentAccount = await account.get();
  if (!currentAccount) {
    throw Error;
    return;
  }

  const currentUser = await databases.listDocuments(
    DATABASE_ID,
    USERS_COLLECTION_ID,
    [Query.equal("accountId", currentAccount.$id)]
  );
  return currentUser;
}
