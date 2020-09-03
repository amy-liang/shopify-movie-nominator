import * as React from "react";
import styled from "styled-components";
import loading from "../../resources/loading.svg";

const Container = styled.div`
    width: 100vw;
    height: 200px;
    align-items: center;
    justify-content: center;
`;

const LoadingImage = styled.img`
    width: 100px;
    height: 100px;
`;

export const Loading = props => (
    <Container width={props.width} height={props.height}>
        <LoadingImage src={loading} />
    </Container>
);
