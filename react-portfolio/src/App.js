import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { ThemeContext } from './contexts/ThemeContext';
import { Main, BlogPage, ProjectPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'

function App() {

  const { theme } = useContext(ThemeContext);


  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      {/* <Router>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />

          <Redirect to="/" />
        </Switch>
      </Router> */}
      <HashRouter>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />

          <Redirect to="/" />
        </Switch>
      </HashRouter>
      <BackToTop />
    </div>
  );
}

export default App;
