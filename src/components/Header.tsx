import * as React from "react";
import styled from "styled-components";
import { Colors, Dimensions } from "../stores/Constants";

const HeaderContainer = styled.div`
    width: 100vw;
    height: ${Dimensions.headerHeight}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 100;
    transition: all 0.5s ease-in-out;
    border-bottom: 0.5px solid ${Colors.navy};
`;

export const Header = () => (
    <HeaderContainer>
        <h1>The Shoppies</h1>
    </HeaderContainer>
);
