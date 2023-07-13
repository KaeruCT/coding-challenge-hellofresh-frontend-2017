import React from 'react';
import LoginForm from '../components/LoginForm.jsx';
import { StyleSheet, css } from 'aphrodite';
import common from '../styles/common';
import { spacing } from '../styles/variables';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'youremail@example.com',
      password: 'SuperSecretStuff'
    };
  }

  doLogIn = (email, password) => {
    const { history } = this.props;

    // assume we do some login validation here
    console.log(email, password);
    history.push('/recipes');
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className={css([common.page, styles.loginPage])}>
        <h1 className={css(common.title)}>Welcome!</h1>
        <p className={css(common.labelText)}>Please sign in below</p>
        <LoginForm email={email} password={password} doLogin={this.doLogIn} />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  loginPage: {
    padding: spacing * 4,
    maxWidth: 600
  }
});
export default LoginPage;
