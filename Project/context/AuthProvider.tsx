import Onboarding from "@/components/Onboarding";
import { auth } from "@/firebase/config";
import { account } from "@/lib/appwrite";
import { getCurrentUser } from "@/lib/appwrite/services/users";
import { useRouter } from "expo-router";
import { User, onAuthStateChanged } from "firebase/auth";
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

import { Models } from "react-native-appwrite";
interface AuthContextType {
  user: User | null;
  loading: boolean;
  IsLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  loading: true,
  IsLoggedIn: false,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in

    // const getUser = async () => {
    //   // try {
    //   //   const currentUser = true;
    //   //   console.log(currentUser, " user");
    //   //   if (currentUser) {
    //   //     setIsLoggedIn(true);
    //   //     setUser(currentUser as any);
    //   //     router.push("home");
    //   //   } else {
    //   //     setIsLoggedIn(false);
    //   //     setUser(undefined);
    //   //     router.replace("sign-in");
    //   //   }
    //   // } catch (error) {
    //   //   console.log("No user logged in");
    //   // } finally {
    //   //   setLoading(false);
    //   // }
    // };

    // getUser();
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        router.replace('home')
      }else
      router.replace('sign-in')
    });

    return () => unsub();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user, loading, IsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
