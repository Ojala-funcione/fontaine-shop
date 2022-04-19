import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../../firebase';
import { ICategory } from '../Interfaces';
import { setCategoryList } from './categorySlice';

const getAllCategories = () => async (dispatch: any) => {
  try {
    const q = query(collection(db, 'categories'));
    const querySnapshot = await getDocs(q);
    const allCategories: ICategory[] = querySnapshot.docs.map((document) => {
      const { name, parent, subcategories }: any = { ...document.data() };
      return {
        id: document.id,
        name,
        parent,
        subcategories
      };
    });
    dispatch(setCategoryList(allCategories));
  } catch (error: any) {
    throw new Error(error);
  }
};
export default getAllCategories;
