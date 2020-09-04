import * as React from "react";
import styled from "styled-components";
import { Colors, Dimensions } from "../stores/Constants";

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: ${Dimensions.footerHeight};
    background-color: ${Colors.green};
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 8px;
`;

export class Footer extends React.Component {
    render() {
        return (
            <FooterContainer>
                <Container>
                    <p>
                        Shopify W'21 Web Developer Intern Challenge by Amy Liang
                    </p>
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
