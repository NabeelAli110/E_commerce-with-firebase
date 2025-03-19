// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// // Firebase Config
// const firebaseConfig = {
//     apiKey: "AIzaSyDQ9O-dtMqk86IJNefVpEQGMjLa3hxbBEo",
//     authDomain: "user-auth-4c674.firebaseapp.com",
//     projectId: "user-auth-4c674",
//     storageBucket: "user-auth-4c674.firebasestorage.app",
//     messagingSenderId: "985781483356",
//     appId: "1:985781483356:web:cd0d24cb220f200c80b399"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // Signup Function
// window.Signup = function () {
//     let email = document.getElementById("signup-email").value;
//     let password = document.getElementById("signup-password").value;
  
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         alert("Signup Successful!");
//         window.location.href = "index.html"; // User ko e-commerce website pr redirect karo
//         console.log("User Signed Up:", userCredential.user);
//       })
//       .catch((error) => {
//         alert(error.message);
//         console.error(error);
//       });
//   };
// // Login Function
// function login() {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   firebase.auth().signInWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       alert("Login Successful!");
//       window.location.href = "index.html"; // User ko e-commerce website pr redirect karo
//     })
//     .catch((error) => {
//       alert(error.message);
//     });
// }




// // Logout Function
// window.Logout = function () {
//   signOut(auth)
//     .then(() => {
//       alert("User Logged Out!");
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-storage.js";

// const storage = getStorage(app);

// // Upload Function
// window.uploadFile = function () {
//   const fileInput = document.getElementById("file-input");
//   const file = fileInput.files[0];
  
//   if (!file) {
//     alert("Please select a file first!");
//     return;
//   }

//   const storageRef = ref(storage, "uploads/" + file.name);

//   uploadBytes(storageRef, file)
//     .then((snapshot) => {
//       alert("File Uploaded Successfully!");
//       return getDownloadURL(snapshot.ref);
//     })
//     .then((downloadURL) => {
//       console.log("File available at", downloadURL);
//     })
//     .catch((error) => {
//       console.error("Upload failed", error);
//     });
// };

// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Initialize Firebase

const firebaseConfig = {
    apiKey: "AIzaSyDQ9O-dtMqk86IJNefVpEQGMjLa3hxbBEo",
    authDomain: "user-auth-4c674.firebaseapp.com",
    projectId: "user-auth-4c674",
    storageBucket: "user-auth-4c674.firebasestorage.app",
    messagingSenderId: "985781483356",
    appId: "1:985781483356:web:cd0d24cb220f200c80b399"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign-up function
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const errorMessage = document.getElementById("signup-error");

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("User Signed up:", userCredential.user);
            alert("Signup successful! You can now log in.");
        })
        .catch((error) => {
            errorMessage.textContent = error.message;
        });
});

// Login Function
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload

  // Get user inputs
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const errorMessage = document.getElementById("login-error");

  // Firebase Authentication for Login
  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          console.log("User Logged In:", userCredential.user);
          alert("Login successful! Redirecting...");
          window.location.href = "main.html"; // Redirect to dashboard
      })
      .catch((error) => {
          errorMessage.textContent = error.message; // Display error to user
      });
});