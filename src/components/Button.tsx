import * as React from "react";
import styled from "styled-components";
import { Colors } from "../stores/Constants";

const Container = styled.div`
    width: fit-content;
    padding: ${props => (props.small ? "10px 16px" : "22px 36px")};
    border: 1px solid ${props => props.color};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: ${props => props.color};
    :hover {
        background-color: ${props => props.color};
        color: white;
    }
    margin: ${props => (props.margin ? props.margin : "0px")};
`;

const Paragraph = styled.p`
    text-transform: uppercase;
    letter-spacing: 2px;
`;

interface IProps {
    text: string;
    onClick?: () => void;
    color?: string;
    small?: boolean;
    margin?: string;
}

export class Button extends React.Component<IProps> {
    render() {
        const { text, onClick, color, small, margin } = this.props;

        return (
            <Container
                margin={margin}
                small={small}
                onClick={onClick}
                color={color ? color : Colors.green}
            >
                <Paragraph>{text}</Paragraph>
            </Container>
        );
    }
}
