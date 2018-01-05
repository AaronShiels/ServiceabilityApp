import React, { Component } from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';

class Assess extends Component {
    render() {
        return (
            <Segment vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h1'>
                                Assess
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}

export default Assess;