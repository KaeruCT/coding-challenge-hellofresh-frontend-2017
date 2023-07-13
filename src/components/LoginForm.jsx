import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import common from '../styles/common';
import {
  borderRadius,
  boxShadow,
  colors,
  fontSizes,
  inputBorder,
  spacing
} from '../styles/variables';

class LoginForm extends React.Component {
  static propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    doLogin: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    const { email, password } = this.props;

    this.state = {
      email,
      password
    };
  }

  doLogIn = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.doLogin(email, password);
  };

  render() {
    const { email, password } = this.state;
    return (
      <form
        className={css([common.card, styles.loginForm])}
        onSubmit={this.doLogIn}>
        <label className={css(styles.label)}>
          <span className={css(common.labelText)}>Email</span>
          <input
            placeholder="youremail@example.com"
            className={css(common.input)}
            type="email"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            required
          />
        </label>
        <label className={css(styles.label)}>
          <span className={css(common.labelText)}>Password</span>
          <input
            className={css(common.input)}
            type="password"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            required
          />
        </label>
        <div className={css(styles.submitContainer)}>
          <input
            className={css([common.button, styles.button])}
            type="submit"
            value="Log in"
          />
        </div>
      </form>
    );
  }
}

const styles = StyleSheet.create({
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between'
  },
  label: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: spacing
  },
  submitContainer: {
    backgroundColor: colors.backgroundDark,
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    flex: 1,
    display: 'flex',
    padding: spacing
  },
  button: {
    flex: 1
  }
});

export default LoginForm;
