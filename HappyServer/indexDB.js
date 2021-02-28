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
    var snapshot = await db.collection('Items').get();
    
    for (var x=0; x<snapshot.docs.length; x++)
    {
      var doc = snapshot.docs[x];
      result.push
      ({
	'ID': doc.id,
        'Name': doc.data().Name,
        'Price': doc.data().Price
      }); 
    }
    return result;
}

async function getUserInfo() {
    var result = [];
    user = auth.currentUser.email;
    user = user.substring(0,user.length-10);
    var snapshot = await db.collection('Users').get();
    
    for (var x=0; x<snapshot.docs.length; x++) {
      var doc = snapshot.docs[x];
      if (user == doc.data().username) {
      	result.push ({
        	'Name': doc.data().username,
        	'Money': doc.data().money,
		'Cart': doc.data().cart
      	}); 
	//return result;
      }
    }
	return result;
    return null;
}

async function getUserCart() {
	var result = [];
	user = auth.currentUser.email;
    	user = user.substring(0,user.length-10);
    	var snapshot = await db.collection('Users').doc(user).collection('Cart').get();
	result = snapshot.docs[0].data().cart;
	return result;
}

function getCurrentUser()
{
  return auth.currentUser;
}

async function createUser(username, password)
{
    var response = await auth.createUserWithEmailAndPassword(username + '@store.org', password)
      .then(function(result)
      {
        //console.log('Then', result);
        return 'success';
      })
      .catch(function(result)
      {
        //console.log('Catch', result);
        return result.message;
      })
    //console.log(response);
    var snapshot = await db.collection('Users').doc(username).set({
      'username': username,
      'password': password,
      'money': 0
    })
    return response;
}

async function login(username, password)
{
  var response = await auth.signInWithEmailAndPassword(username + '@store.org', password)
      .then(function(result)
      {
        //console.log('Then', result);
        return 'success';
      })
      .catch(function(result)
      {
        //console.log('Catch', result);
        return result.code;
      })
    //console.log(response);
    return response;
}

async function addToCart(item) {
    	user = auth.currentUser.email;
	//user = "test";
	user = user.substring(0,user.length-10);
    	var snapshot = await db.collection('Users').doc(user).collection('Cart').get();
	var cart2 = [{'ID': item, 'QT': 1}];
	if(snapshot.docs.length > 0) {
      		var cart = snapshot.docs[0].data().cart;
      		for(var i = 0; i <cart.length;i++) {
			if (cart[i].ID == item) {
				cart[i].QT++;
				console.log(cart[i].QT);
				if (snapshot.docs.length > 0) {
					var doc = await db.collection('Users').doc(user).collection('Cart').get();
					doc.docs[0].ref.delete();
				}
				await db.collection('Users').doc(user).collection('Cart').add({'cart':cart});
				return null;
			}
		}
		if (cart.length > 0) {
			var doc = await db.collection('Users').doc(user).collection('Cart').get();
			doc.docs[0].ref.delete();
		}
		cart.push({'ID': item, 'QT': 1});
		await db.collection('Users').doc(user).collection('Cart').add({'cart':cart});
		return null;
    	} else {
		await db.collection('Users').doc(user).collection('Cart').add({'cart':cart2});
		return null;
	}
}

