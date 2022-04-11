/* eslint-disable no-unused-vars */
import React, { useEffect, useState, createContext, useContext } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile
} from 'firebase/auth';
import { doc, DocumentData, getDoc, updateDoc } from 'firebase/firestore';
import { useToast } from '@chakra-ui/react';
// eslint-disable-next-line import/extensions
import { auth, db } from '../../firebase';

const setToast = {
  duration: 5000,
  isClosable: true,
  containerStyle: {
    marginBottom: '50px'
  }
};
const DEFAULT_VALUE = {};

const AuthContext = createContext(DEFAULT_VALUE);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('There is no Auth provider');
  return context;
};
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<DocumentData | null | undefined>(null);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  // const signup = async ({ email, password, firstName, lastName }) => {
  //   try {
  //     const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

  //     //________Actualizar name en auth firebase_________
  //     updateProfile(userCredentials.user, {
  //       displayName: `${firstName} ${lastName}`,
  //     });

  //     //________Email verification_________

  //     const config = {
  //       url: 'http://localhost:3000/',
  //     };
  //     sendEmailVerification(userCredentials.user, config)
  //       .then((res) => {
  //         toast({
  //           title: 'Account Created.',
  //           description: 'Verify your account. Check your email.',
  //           status: 'success',
  //           ...setToast,
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         toast({
  //           title: 'error al enviar email de verificacion',
  //           description: error.message,
  //           status: 'error',
  //           ...setToast,
  //         });
  //       });

  //     //===========USER DB===========

  //     try {
  //       const docRef = doc(db, 'users', userCredentials.user.uid);
  //       await setDoc(docRef, {
  //         firstName,
  //         lastName,
  //         email,
  //         name: `${firstName} ${lastName}`,
  //         uid: userCredentials.user.uid,
  //         role: 'customer',
  //         photoURL: userCredentials.user.photoURL,
  //         address: 'no registrada',
  //         isVerified: userCredentials.user.emailVerified,
  //         phoneNumber: userCredentials.user.phoneNumber,
  //         creationTime: userCredentials.user.metadata.creationTime,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } catch (error) {
  //     console.log('error', error);
  //     toast({
  //       title: 'Sign In Error.',
  //       description: error.message,
  //       status: 'error',
  //       ...setToast,
  //     });
  //   }
  //   // signOut(auth);
  // };
  const login = ({ email, password }: { email: string; password: string }) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  // const refreshUser = async () => {
  //   const docRef = doc(db, 'users', user.uid);
  //   const docSnap = await getDoc(docRef);
  //   const dbUser = docSnap.data();
  //   setUser(dbUser);
  //   // console.log(dbUser)
  // };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // console.log(user, currentUser);
        const docRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(docRef);
        const dbUser = docSnap.data();
        if (
          dbUser?.isVerified === false &&
          currentUser.emailVerified === true
        ) {
          await updateDoc(docRef, { isVerified: true });
        }

        setUser(dbUser);
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  type authContextTypes = {
    user: any;
    login: any;
    logout: any;
    loading: any;
  };
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const values: authContextTypes = {
    user,
    // signup,
    login,
    logout,
    loading
    // getCredentials,
    // refreshUser,
  };
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
