import React, { Component, lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import Container from './Components/Container';
import AppBar from './Components/UserMenu/AppBar';
import { getCurrentUser } from './redux/Auth/auth-operation';
import { connect } from 'react-redux';
import PrivetRoute from './Components/UserMenu/PrivetRoute';
import PublicRoute from './Components/UserMenu/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const PhonebookView = lazy(() => import('./views/PhoneBookView/PhonebookView'));
const LoginView = lazy(() => import('./views/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              component={RegisterView}
              redirectTo="/contacts"
            />
            <PublicRoute
              path="/login"
              restricted
              component={LoginView}
              redirectTo="/contacts"
            />
            <PrivetRoute
              path="/contacts"
              component={PhonebookView}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
