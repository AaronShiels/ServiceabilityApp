import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Button, Container, Menu, Segment } from 'semantic-ui-react'

import Home from './Home/home.js';
import Assess from './Assess/assess.js';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Segment inverted textAlign='center' style={{ padding: '1em 0em' }} vertical>
                        <Container>
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item as={NavLink} exact to="/">Home</Menu.Item>
                                <Menu.Item as={NavLink} to="/assess">Assess</Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as='a' inverted>Log in</Button>
                                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                                </Menu.Item>
                            </Menu>
                        </Container>
                    </Segment>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/assess" component={Assess} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;