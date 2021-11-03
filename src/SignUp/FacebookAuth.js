import React from "react";
import Amplify, { Auth, Hub } from "aws-amplify";
import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);

class FacebookAuth extends React.Component {
   state = { user: null, customState: null };

   componentDidMount() {
      Hub.listen("auth", ({ payload: { event, data } }) => {
         switch (event) {
            case "signIn":
               this.setState({ user: data });
               break;
            case "signOut":
               this.setState({ user: null });
               break;
            case "customOAuthState":
               this.setState({ customState: data });
               break;
            default:
               return;
         }
      });

      Auth.currentAuthenticatedUser()
         .then((user) => this.setState({ user }))
         .catch(() => console.log("Not signed in"));
   }

   render() {
      const { user } = this.state;

      return (
         <div className="App">
            <button
               onClick={() => Auth.federatedSignIn({ provider: "Facebook" })}
            >
               Open Facebook
            </button>
            <button
               onClick={() => Auth.federatedSignIn({ provider: "Google" })}
            >
               Open Google
            </button>
            <button onClick={() => Auth.federatedSignIn()}>
               Open Hosted UI
            </button>
            <button onClick={() => Auth.signOut()}>
               Sign Out {user.getUsername()}
            </button>
         </div>
      );
   }
}

export default FacebookAuth;
