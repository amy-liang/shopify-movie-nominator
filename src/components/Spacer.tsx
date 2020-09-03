import * as React from "react";
import styled from 'styled-components';

const Container = styled.div`
    width: ${props => props.width ? props.width : 0}px;
    height: ${props => props.height ? props.height : 0}px;
`

export const Spacer = (props) => (
    <Container width={props.width} height={props.height}>
        {props.children}
    </Container>
);
