import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getAuth, EmailAuthProvider } from 'firebase/auth';

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyAfpjbnocl8f3IkN0l11cDdlCA1ngG_ebM",
  authDomain: "tareafrbase.firebaseapp.com",
  projectId: "tareafrbase",
  storageBucket: "tareafrbase.firebasestorage.app",
  messagingSenderId: "393775267554",
  appId: "1:393775267554:web:cc5d6979e418771c6be8bb",
  measurementId: "G-KZ1ZXLLEBX"
});

// used for the firestore refs
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// here we can export reusable database references
export const todosRef = collection(db, 'todos');
export { auth, EmailAuthProvider };


