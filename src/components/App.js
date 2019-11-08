import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchArtistPage from '../components/containers/SearchArtistPage';
import Header from './header/Header';
import Footer from './footer/Footer';
import Discography from './containers/Discography';
import RecordPage from './containers/RecordPage';
import LyricContainer from './containers/LyricContainer';

const App = () => {
  
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={SearchArtistPage} />
        <Route path="/albums/:id/:artist" component={Discography} />
        <Route path="/recordings/:albumId/:artist" component={RecordPage}/>
        <Route path="/lyrics/:artist/:song" component={LyricContainer}/>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
