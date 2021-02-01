/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const firebaseConfig = {
  apiKey: "AIzaSyD_7AD5cB_DvOHzeXkISRz7XGzyPh8guqo",
  authDomain: "store-16edf.firebaseapp.com",
  projectId: "store-16edf",
  storageBucket: "store-16edf.appspot.com",
  messagingSenderId: "1001615999318",
  appId: "1:1001615999318:web:4df30ce42d7c896dbe56f7",
  measurementId: "G-ZY2NC8GCLQ"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

async function getItems() {
    var result = [];
    //user = user.substring(0,user.length-13);
    var snapshot = await db.collection('Items').get();
    
    for (var x=0; x<snapshot.docs.length; x++)
    {
      var doc = snapshot.docs[x];
      result.push
      ({
        'Name': doc.data().Name,
        'Price': doc.data().Price
      }); 
    }
    return result;
}


