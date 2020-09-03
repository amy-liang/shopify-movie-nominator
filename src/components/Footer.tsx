import * as React from "react";
import styled from "styled-components";
import { Colors } from "../stores/Constants";
import loading from "*.svg";

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100vw;
    background-color: ${Colors.green};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export class Footer extends React.Component {
    render() {
        return (
            <FooterContainer>
                <p>Shopify W'21 Web Developer Challenge by Amy Liang</p>
                <p>
                    Icons made by{" "}
                    <a
                        href="https://www.flaticon.com/authors/photo3idea-studio"
                        title="photo3idea_studio"
                    >
                        photo3idea_studio
                    </a>{" "}
                    from{" "}
                    <a href="https://www.flaticon.com/" title="Flaticon">
                        {" "}
                        www.flaticon.com
                    </a>
                </p>
            </FooterContainer>
        );
    }
}
