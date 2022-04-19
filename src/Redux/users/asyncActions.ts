import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { setUser } from './userSlice';

const getUser = (userId: string) => async (dispatch: any) => {
  try {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const {
        uid,
        email,
        name,
        firstName,
        lastName,
        role,
        address,
        city,
        country,
        phoneNumber,
        photoURL,
        state,
        zip
      } = docSnap.data();

      dispatch(
        setUser({
          uid,
          email,
          name,
          firstName,
          lastName,
          role,
          address,
          city,
          country,
          phoneNumber,
          photoURL,
          state,
          zip
        })
      );
    }
    dispatch(setUser(null));
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getUser;
