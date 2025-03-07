import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, getDoc, getFirestore, updateDoc, setDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCc4ovD4ROSjtmay1HD4dV490gUs2XhPTE",
    authDomain: "trustpesa.firebaseapp.com",
    projectId: "trustpesa",
    storageBucket: "trustpesa.firebasestorage.app",
    messagingSenderId: "975008362616",
    appId: "1:975008362616:web:56f5342b2179726c5cfd8d",
    measurementId: "G-02YZGN1VKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

analytics.app.automaticDataCollectionEnabled = true;
export const db = getFirestore(app);
export const auth = getAuth(app);

//function
export const signInUser = (email, password, setSuccess, setError) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        setSuccess("Welcome Back!")
    }).catch(async (error) => {
        const errorMessage = await error.message;
        setError(errorMessage);
    });
    return;
}

export const registerUser = (email, password, data, setSuccess, setError) => {
    createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
        const user = userCredential.user;
        const userDocRef = doc(db, "users", user.email);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
            return setError("The user already exists! Login instead.");
        }
        await setDoc(userDocRef, { email, ...data }).then(async (response) => {
            setSuccess(`Hello ${data.firstName}. Welcome to TrustPesa`)
        }).catch(async (error) => {
            const errorMessage = await error.message;
            setError(errorMessage);
        });
    }).catch(async (error) => {
        const errorMessage = await error.message;
        setError(errorMessage);
    });
    return;
}

export const getUser = async (userId, setUserData) => {
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
        return setUserData(userDoc.data())
    }
    return;
};

export const addLoanApplication = async (userId, data) => {
    try {
        // Get reference to the 'applications' collection for the user
        const userApplicationsRef = collection(db, 'users', userId, 'applications');
        // Add a new document to the 'applications' collection with the data
        const docRef = await addDoc(userApplicationsRef, { ...data });
        setSuccess("Your Loan Application Was Submiited Successfully.")
    } catch (error) {
        const errorMessage = await error.message;
        setError(errorMessage);
    }
    return;
};

export const addContact = async (data, setSuccess, setError) => {
    const contactsDocRef = collection(db, "contacts");
    await addDoc(contactsDocRef, { ...data, responded: false }).then(async (userCredential) => {
        setSuccess("We will get back to you as soon as possible.")
    }).catch(async (error) => {
        const errorMessage = await error.message;
        setError(errorMessage);
    });
};