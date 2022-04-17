
import { initializeApp } from "firebase/app";
import firebaseConfig from "../FirebaseConfig/FirebseConfig";


const fireBaseInitialize=()=>{
    initializeApp(firebaseConfig);
  
}



export default fireBaseInitialize;