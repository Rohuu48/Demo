import React from "react";

const UserGreeting = () => {
  return <h2>Hi user</h2>;
};
const GuestGreeting = () => {
  return <h2>Hi guest</h2>;
};

class AuthenticationScreen extends React.Component {
  render() {
    return this.props.isLoggedIn ? <UserGreeting /> : null;
  }
}

export default AuthenticationScreen;
