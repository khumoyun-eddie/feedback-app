import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs, updateDoc } from "firebase/firestore";

export const randomID = (length = 16) => {
  return Math.random()
    .toString(length)
    .slice(2)
    .substring(2, length + 2);
};

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9HAxtUeBu0_75zM5ZDFJjaiItJn6XvDU",
  authDomain: "feeback-app-9306e.firebaseapp.com",
  projectId: "feeback-app-9306e",
  storageBucket: "feeback-app-9306e.appspot.com",
  messagingSenderId: "462098032337",
  appId: "1:462098032337:web:098eb233356057a6ec87f0",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exist
  // create/set the document with tha data from userAuth
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating user: ", error.message);
    }
  }
  // if user data exists return userDocRef
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, `feedback_${object.id}`);
    batch.set(docRef, object);
  });
  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "feedbacks");
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);
  // console.log(querySnapshot.docs)
  // const categoryMap = querySnapshot.docs.reduce((sum, docSnapshot) => {
  //   const { title, items } = docSnapshot.data();
  //   sum[title.toLowerCase()] = items;
  //   return sum;
  // }, {});
  const categoryMap = querySnapShot.docs.map((docSnapShot) => {
    return docSnapShot.data();
  });
  return categoryMap;
};

export const addFeedbackDocuments = async (newFeedback) => {
  const { id } = newFeedback;
  await setDoc(doc(db, "feedbacks", `feedback_${id}`), newFeedback);
};

export const getSingleFeedbackDocument = async (id) => {
  const collectionRef = collection(db, "feedbacks");

  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);

  const categoryMap = querySnapShot.docs.find((docSnapShot) => docSnapShot.id === `feedback_${id}`).data();

  return categoryMap;
};


export const addCommentAndRepliesDocument = (id, updatedComment)=>{
  try {
    const docRef = doc(db,'feedbacks',`feedback_${id}`)
    
    updateDoc(docRef,{
      comments: updatedComment,
    })
    console.log('comment updated')
  } catch (error) {
    console.log(error.message)
  }
}
