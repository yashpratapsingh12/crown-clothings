import{initializeApp} from 'firebase/app';

import{getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'

import{getFirestore,doc,getDoc,setDoc,collection,WriteBatch, writeBatch,query,getDocs} from 'firebase/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyDlejZTJFtmJKpE6ENiNegvmzSovhJJhkw",
    authDomain: "cwrn-clothing-db-1fe28.firebaseapp.com",
    projectId: "cwrn-clothing-db-1fe28",
    storageBucket: "cwrn-clothing-db-1fe28.appspot.com",
    messagingSenderId: "942373824665",
    appId: "1:942373824665:web:328c9a6b11f3550c7f3008"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);


  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth =getAuth();

  export const signInWithGogglePopup = ()=> signInWithPopup(auth,provider);

  export const db = getFirestore();

  export const addCollection =async (collectionkey,objectTOadd)=>{
     
    const collectionRef= collection(db,collectionkey);
     
    const batch = writeBatch(db);

    objectTOadd.forEach((object)=>{
      const docref = doc(collectionRef,object.title.toLowerCase());
      batch.set(docref,object);


    })
    await batch.commit();
    
 
  }

  export const getcoll= async()=>{
    const colref= collection(db,'categories');

    const q = query(colref);


    const querysnap= await getDocs(q);

    

  

    

    const categorymap= querysnap.docs.reduce((acc,docsnap)=>{
      const{title,items}= docsnap.data();

      acc[title.toLowerCase()]= items;

      return acc;

    },{})
    
    return categorymap;
  }



  export const createUserDocumentFromAuth= async(userAuth,additionalInformation={})=>{

    if(!userAuth)return ;


    const userDocRef =doc(db,"users",userAuth.uid);

  

  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const {displayName,email}= userAuth
    const createdat= new Date();
    
    try{
        await setDoc(userDocRef,{
            displayName,
            email,
            createdat,
            ...additionalInformation
        });

    }catch (error) {
        console.log("error is creating" );

    }
}


return userDocRef;



}

export const createAuthUserWithEmailAndPassword= async(email,password)=>{
    if(!email || !password)return;

   return await createUserWithEmailAndPassword(auth,email,password)
}


export const signInAuthUserWithEmailAndPassword= async(email,password)=>{
    if(!email || !password)return;

   return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutWithUser= async()=> await signOut(auth);

export const onAuthStateChangeduser= (callback)=> onAuthStateChanged(auth,callback);



