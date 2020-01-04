import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import './Normalize.css';
import AppActions from '../../actions/AppActions';
import StylePrefabs from '../../consts/StylePrefabs';
import Analytics from '../../utils/analytics/Analytics';
import Home from '../home/Home';

class App extends React.Component {
  componentDidMount() {
    this.props.onAppLoad({
      loaded: true
    });
  }

  render() {
    return (
      <>
        {this.props.app.loaded ? (
          <>
            <AppWrapper>
              <Route
                exact
                path="/"
                render={() => {
                  return <Home />;
                }}
              />
            </AppWrapper>
            <Analytics
              url={window.location.pathname + window.location.search}
              gaId={'PLACEHOLDER'}
            />
          </>
        ) : null}
      </>
    );
  }
}

const AppWrapper = styled.div`
  ${StylePrefabs.appWrapper}
`;

const mapStateToProps = (state) => {
  return {
    app: state.app
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAppLoad: (data) => {
      dispatch(AppActions.onAppLoad(data));
    }
  };
};

const connectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default withRouter(connectedApp);
