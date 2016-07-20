import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Colors from 'material-ui/lib/styles/colors';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import KabbageTheme from './shared/KabbageTheme';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const Main = React.createClass({
  getInitialState: function () {
    return { loading: true };
  },

  componentDidMount: function () {
    this.setState({ loading: false });
  },

  childContextTypes : {
    muiTheme: React.PropTypes.object,
  },

  getChildContext: function () {
    return {
      muiTheme: ThemeManager.getMuiTheme(KabbageTheme),
    };
  },

  render: function () {
        return (
          <div>
            <h2>Kabbage Prequalification Form!</h2>
          </div>
        );
  },
})

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin

injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render

render((

  <Router history={browserHistory}>
    <Route path="/" component={Main}></Route>
  </Router>),

  document.getElementById('app'));
