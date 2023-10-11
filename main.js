import {initializeApp} from "firebase/app";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available -libraries
 // Your web app's Firebase configuration


const firebaseConfig = {

  apiKey: "AIzaSyBppUbCTaEaQSdbIkZgtBkfNAtVffwiscM",

  authDomain: "chat-ai-552f2.firebaseapp.com",

  projectId: "chat-ai-552f2",

  storageBucket: "chat-ai-552f2.appspot.com",

  messagingSenderId: "306313941257",

  appId: "1:306313941257:web:0e25cb8b287575348b43d8"

};
const app = initializeApp(firebaseConfig);

// This is were the magic beggins 

const auth= getAuth(app);