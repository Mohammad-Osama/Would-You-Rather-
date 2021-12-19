import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react';

export default class Error extends Component {
    render() {
        return (
            <Container textAlign="center">
              <Header size = "huge">404 Error !</Header>
              <span> Unvalid action ! </span>
            </Container>
        )
    }
}
