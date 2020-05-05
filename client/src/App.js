import React  from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <li>
            <a href="/auth/google">
              Login with google
            </a
            ></li>
        );

      default:
        return (
          <>
            <li>
              payments
            </li>
            <li style={{ margin: '0 10px' }}>
              Credits: 1
            </li>
            <li>
              <a href="/api/logout">
                Logout
              </a
              >
            </li>
          </>
        );
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderContent()}
        praca-zdalna.it - job board
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, actions)(App);
