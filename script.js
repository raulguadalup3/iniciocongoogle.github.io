/* === Imports === */
import { initializeApp } from "firebase/app";
/* === Firebase Setup === */
const firebaseConfig = {
  apiKey: "AIzaSyCGze4NDEYJ_D7ZQjjRgdYdpuzk6FcIJLA",
  authDomain: "mapachers-f04c0.firebaseapp.com",
  projectId: "mapachers-f04c0",
  storageBucket: "mapachers-f04c0.appspot.com",
  messagingSenderId: "139317885920",
  appId: "1:139317885920:web:0ffd05e7fb9f30b482c985",
  measurementId: "G-YG8EBRR6D9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
/* === UI === */

/* == UI - Elements == */

const viewLoggedOut = document.getElementById("logged-out-view")
const viewLoggedIn = document.getElementById("logged-in-view")

const signInWithGoogleButtonEl = document.getElementById("sign-in-with-google-btn")

const emailInputEl = document.getElementById("email-input")
const passwordInputEl = document.getElementById("password-input")

const signInButtonEl = document.getElementById("sign-in-btn")
const createAccountButtonEl = document.getElementById("create-account-btn")

/* == UI - Event Listeners == */

signInWithGoogleButtonEl.addEventListener("click", authSignInWithGoogle)

signInButtonEl.addEventListener("click", authSignInWithEmail)
createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail)

/* === Main Code === */

showLoggedView()

/* === Functions === */

/* = Functions - Firebase - Authentication = */

function authSignInWithGoogle() {
    console.log("Sign in with Google")
}

function authSignInWithEmail() {
    console.log("Sign in with email and password")
}

function authCreateAccountWithEmail() {
    console.log("Sign up with email and password")
}

/* == Functions - UI Functions == */

function showLoggedOutView() {
    hideElement(viewLoggedIn)
    showElement(viewLoggedOut)
}

function showLoggedInView() {
    hideElement(viewLoggedOut)
    showElement(viewLoggedIn)
}

function showElement(element) {
    element.style.display = "flex"
}

function hideElement(element) {
    element.style.display = "none"
}
