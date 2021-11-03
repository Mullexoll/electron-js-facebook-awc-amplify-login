import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import AuthStateApp from "./SignUp/Signup";

function App() {
   return (
      <BrowserRouter>
         <Route
            exact
            path="/"
            render={() => {
               return (
                  <div className={"App"}>
                     <AuthStateApp />
                  </div>
               );
            }}
         ></Route>
      </BrowserRouter>
   );
}

export default App;
