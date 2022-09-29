
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  import {getFirestore, collection, addDoc, getDocs} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCzYldLyS_w9y7oXk3EBxaEV6iLbVnas0k",
    authDomain: "vital-music.firebaseapp.com",
    projectId: "vital-music",
    storageBucket: "vital-music.appspot.com",
    messagingSenderId: "898252371893",
    appId: "1:898252371893:web:db1a009026c24331240bfc",
    measurementId: "G-680P3LZE3V"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

  const db = getFirestore();


  // export const savePromo = (titlePromo, promoSelected) => {
  //   addDoc(collection(db, 'listPromo'),  {titlePromo: titlePromo, promoSelected: promoSelected})
  // }

  export const getPromos = () => getDocs (collection(db, 'listPromo'),)