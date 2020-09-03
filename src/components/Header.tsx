import * as React from "react";
import styled from "styled-components";
import { Colors, Dimensions } from "../stores/Constants";

const HeaderContainer = styled.div`
    width: 100vw;
    height: ${Dimensions.headerHeight}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    padding-left: 32px;
    z-index: 100;
    border-bottom: 0.5px solid ${Colors.navy};
`;

export const Header = () => (
    <HeaderContainer>
        <h1>The Shoppies</h1>
    </HeaderContainer>
);
