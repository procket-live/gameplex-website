import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCzRW5wG_L3t2e8WbU63B8x_5Bjftq6e4I",
    authDomain: "gameplex-5a29e.firebaseapp.com",
    databaseURL: "https://gameplex-5a29e.firebaseio.com",
    projectId: "gameplex-5a29e",
    storageBucket: "gameplex-5a29e.appspot.com",
    messagingSenderId: "62408106269",
    appId: "1:62408106269:web:5f6281b0f8b4f5d51cc1f4",
    measurementId: "G-N2115HCLZD"
};


firebase.initializeApp(firebaseConfig);

export async function FetchWebsiteData() {
    const db = firebase.firestore();
    let websiteDataRef = db.collection('website_data').doc('iZNwx8Ej5WH3K46D9jSM');
    let doc = await websiteDataRef.get();

    if (!doc.exists) {
        return {};
    } else {
        return doc.data();
    }
}

export async function GetDownloadURL(path) {
    return await firebase.storage().ref(`/${path}`).getDownloadURL();
}