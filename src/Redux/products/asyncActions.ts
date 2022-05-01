import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc
} from 'firebase/firestore';
import { db } from '../../../firebase';
import { IProduct } from '../Interfaces';
import { setProductList } from './productSlice';

export const getAllProducts = () => async (dispatch: any) => {
  try {
    const q = query(collection(db, 'products'));
    const querySnapshot = await getDocs(q);
    const allProducts: IProduct[] = querySnapshot.docs.map((document) => {
      const {
        isOffer,
        isNew,
        isCombo,
        isFeatured,
        name,
        brand,
        description,
        category,
        stock,
        sku,
        minStock,
        price,
        salePrice,
        discountInPercent,
        image,
        gallery,
        variants
      }: any = { ...document.data() };
      return {
        productId: document.id,
        isOffer,
        isNew,
        isCombo,
        isFeatured,
        name,
        stock,
        minStock,
        sku,
        brand,
        category,
        description,
        price,
        salePrice,
        discountInPercent,
        image,
        gallery,
        variants
      };
    });
    dispatch(setProductList(allProducts));
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getOneProduct = async (id: string) => {
  try {
    const docRef = doc(db, 'products', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return 'No such document!';
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateProductByField = async (
  id: string,
  field: string,
  value: any
) => {
  try {
    const prodRef = doc(db, 'products', id);
    await updateDoc(prodRef, {
      [field]: value
    });
    // const updatedProduct = await updateDoc(prodRef, {
    //   [field]: value
    // });
    // console.log(updatedProduct.data());
    return true;
  } catch (error: any) {
    throw new Error(error);
  }
};
