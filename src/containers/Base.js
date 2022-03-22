import React, { Component } from 'react'
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from './App';
import Home from './Home';
// import { Navbar } from './Navbar';
// import './Base.scss';
import SimpleTabs from '../components/Vkladka/vkladka';

export default class Base extends Component {
   render() {
      return (
         <React.Fragment>
            <SimpleTabs/>
         </React.Fragment>
         
         // <BrowserRouter>
         //    <Navbar/>
         //    <div className="container pt-4">
         //       {/* <Alert alert={{ text: 'Test alert' }} /> */}
         //       <Switch>
         //          <Route path="/" exact component={Home} />
         //          <Route path="/sale" component={App} />
         //          {/* <Route path="/profile/:name" component={Profile} /> */}
         //       </Switch>
         //    </div>
         // </BrowserRouter>
      )
   }
}
