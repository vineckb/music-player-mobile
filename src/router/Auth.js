import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from '../screens/Auth/Login';

const AuthRouter = createStackNavigator({
  Login: {
    screen: LoginPage
  }
}, {
  initialRouteName: 'Login'
});

export default AuthRouter;
