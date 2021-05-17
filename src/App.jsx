import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router';
import "./index.css";
import Home from './Home';
import Contact from './Contact';
import Navbar from './Navbar';
import Projects from './Projects';
import Footer from './Footer';
const App =() => {
    return (
        <>
        <Navbar/>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/contact' component={Contact}/>
        <Redirect to ='/'/>
        </Switch>
        <Footer/>
        </>
    );
};

export default App;
