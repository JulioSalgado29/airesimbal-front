import React from 'react';
import { Container } from "semantic-ui-react";
import MercadoPago from '../MercadoPago';

export default function BasicLayout(props) {
    const { children } = props;

    return (
        <Container fuild="true" className="basic-layout">
            <Container className="content">
                {children}
            </Container>
            <MercadoPago />
        </Container>
    )
}
