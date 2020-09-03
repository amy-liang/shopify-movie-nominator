import * as React from "react";
import styled from "styled-components";
import { Colors } from "../stores/Constants";
import loading from "*.svg";

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: ${Colors.green};
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
`;

export class Footer extends React.Component {
    render() {
        return (
            <FooterContainer>
                <Container>
                    <p>No nominations</p>
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
                </Container>
            </FooterContainer>
        );
    }
}
