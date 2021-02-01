import './App.css';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './Navigation';
import Events from './pages/Events';
import firebase from './firebaseInit';

const OuterContainer = styled.div`
`;

const StyledContainer = styled(Container)`
    background-color: #F0F8FF;
    min-height: 1000px;
`;

export default function App(props) {

    useEffect(() => {
        console.log(firebase);
    }, [])

    return (
        <Router>
            <OuterContainer>
                <Navigation />

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <StyledContainer>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/events">
                            <Events />
                        </Route>
                        
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </StyledContainer>
            </OuterContainer>
        </Router>
    )
}