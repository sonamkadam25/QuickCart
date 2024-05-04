// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXEvQlncq6VLT_GzjgzNPngL_h_5G9Snc",
  authDomain: "my-ecom-bebb0.firebaseapp.com",
  projectId: "my-ecom-bebb0",
  storageBucket: "my-ecom-bebb0.appspot.com",
  messagingSenderId: "401436350660",
  appId: "1:401436350660:web:8a3f4de73c35b34f735191"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB=getFirestore(app);
const auth=getAuth(app);

export{auth,fireDB}