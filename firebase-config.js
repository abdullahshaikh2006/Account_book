const firebaseConfig = {
    apiKey: "AIzaSyB16ZrdZ2IY_R8aSZipz-O6SelEblngJLE",
    authDomain: "marketing-calculation.firebaseapp.com",
    databaseURL: "https://marketing-calculation-default-rtdb.firebaseio.com",
    projectId: "marketing-calculation",
    storageBucket: "marketing-calculation.firebasestorage.app",
    messagingSenderId: "371475369216",
    appId: "1:371475369216:web:3aff3d68b707f65c1e77e5"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const database = firebase.database();
