import firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyAX3cUPcrX7cc8Fpkp5ZPo2DJrsKV1g9tk",
  authDomain: "chamado-c5037.firebaseapp.com",
  projectId: "chamado-c5037",
  storageBucket: "chamado-c5037.appspot.com",
  messagingSenderId: "428851218450",
  appId: "1:428851218450:web:e827ff5109c9753fc8b0cb",
  measurementId: "G-9ZNW38W4N2"
};

if(!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
}

export default firebase
