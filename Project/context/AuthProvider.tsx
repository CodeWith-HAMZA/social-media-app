import { account } from "@/lib/appwrite";
import { getCurrentUser } from "@/lib/appwrite/services/users";
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

import { Models } from "react-native-appwrite";
interface AuthContextType {
  user: Models.DocumentList<Models.Document> | undefined;
  loading: boolean;
  IsLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  loading: true,
  IsLoggedIn: false,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<
    Models.DocumentList<Models.Document> | undefined
  >(undefined);
  const [loading, setLoading] = useState(true);
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const getUser = async () => {
      try {
        const currentUser = await getCurrentUser();

        console.log(currentUser, " user");
        if (currentUser) {
          setIsLoggedIn(true);
          setUser(currentUser as any);
        } else {
          setIsLoggedIn(false);
          setUser(undefined);
        }
      } catch (error) {
        console.log("No user logged in");
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, IsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
