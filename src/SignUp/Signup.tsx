import React from "react";
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
import logo from "../logo.svg";
import "../App.css";
import "./Signup.css";

Amplify.configure(awsconfig);

interface User {
   username?: string;
}

const AuthStateApp: React.FunctionComponent = () => {
   const [authState, setAuthState] = React.useState<AuthState>();
   const [user, setUser] = React.useState<User | undefined>();

   React.useEffect(() => {
      onAuthUIStateChange((nextAuthState, authData) => {
         setAuthState(nextAuthState);
         setUser(authData);
      });
   }, []);

   console.log(Auth);

   return authState === AuthState.SignedIn && user ? (
      <div className="App">
         <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <h1>Hello, {user.username}</h1>
            <h2>Welcome to React Typescript</h2>

            <AmplifySignOut />
         </div>
      </div>
   ) : (
      <>
         <AmplifyAuthenticator />
         <div
            className="fb-login-button"
            data-width=""
            data-size="large"
            data-button-type="continue_with"
            data-layout="default"
            data-auto-logout-link="false"
            data-use-continue-as="false"
         ></div>
      </>
   );
};

export default AuthStateApp;

// import React, { useEffect, useState } from "react";
// import Amplify, { Auth, Hub } from "aws-amplify";
// import awsconfig from "../aws-exports";

// Amplify.configure(awsconfig);

// interface User {
//    attributes?: string;
// }

// function App() {
//    const [user, setUser] = useState<User | null>();

//    useEffect(() => {
//       Hub.listen("auth", ({ payload: { event, data } }) => {
//          switch (event) {
//             case "signIn":
//             case "cognitoHostedUI":
//                getUser().then((userData) => setUser(userData));
//                break;
//             case "signOut":
//                setUser(null);
//                break;
//             case "signIn_failure":
//             case "cognitoHostedUI_failure":
//                console.log("Sign in failure", data);
//                break;
//                getUser().then((userData) => setUser(userData));
//             }, []);

//             function getUser() {
//                return Auth.currentAuthenticatedUser()
//                   .then((userData) => userData)
//                   .catch(() => console.log("Not signed in"));
//             }

//             return (
//                <div>
//                   <p>User: {user ? JSON.stringify(user.attributes) : "None"}</p>
//                   {user ? (
//                      <button onClick={() => Auth.signOut()}>Sign Out</button>
//                   ) : (
//                      <button onClick={() => Auth.federatedSignIn()}>
//                         Federated Sign In
//                      </button>
//                   )}
//                </div>
//             );
//          }

//          export default App;
