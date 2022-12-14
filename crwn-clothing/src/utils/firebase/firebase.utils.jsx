import {initializeApp} from 'firebase/app'
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_KPedFbM0Sek7cRrJmOEVKPtVv60kJHo",
    authDomain: "crwn-clothing-db-ab687.firebaseapp.com",
    projectId: "crwn-clothing-db-ab687",
    storageBucket: "crwn-clothing-db-ab687.appspot.com",
    messagingSenderId: "970888576491",
    appId: "1:970888576491:web:52cc0fa82d0a6fe5636dae"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  ////////////////////////////////////////////////////////////////////////////////////////////////
  const goodleProvider = new GoogleAuthProvider();
  goodleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, goodleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName, 
                email, 
                createdAt,
                ...additionalInformation
            });
        }
        catch(error){
            console.log('error creating the user',error.message);
        }
    }

    return userDocRef;
    };


    export const createAuthUserWithEmailAndPassword = async (email, password) =>{
        if(!email || !password){
            return;
        }
        return await createUserWithEmailAndPassword(auth, email, password); 
    }

    export const signInAuthUserWithEmailAndPassword = async (email, password) =>{
        if(!email || !password){
            return;
        }
        return await signInWithEmailAndPassword(auth, email, password); 
    }