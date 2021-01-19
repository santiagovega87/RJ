import firebase from 'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp(

    {
        apiKey: "AIzaSyB1MGSvk_0v10-f7VwuWHVHkKGujuSsO18",
        authDomain: "ginstore-fd560.firebaseapp.com",
        projectId: "ginstore-fd560",
        storageBucket: "ginstore-fd560.appspot.com",
        messagingSenderId: "108356849068",
        appId: "1:108356849068:web:bc970b7dbb2438d90cbe09"
    }

)

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app)
}