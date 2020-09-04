import * as React from "react";
import styled from "styled-components";
import { Colors } from "../stores/Constants";
import { observer } from "mobx-react";

const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 100;
    background-color: rgb(0 0 0 / 50%);
    > * {
        color: ${Colors.white};
    }
`;

const Button = styled.div`
    cursor: pointer;
    border: 1px solid white;
    margin-top: 8px;
    padding: 16px;
`;

interface IProps {
    onClick: () => void;
}

@observer
export class Modal extends React.Component<IProps> {
    render() {
        return (
            <ModalContainer>
                <h2>You did it!</h2>
                <p>Successfully nominated 5 movies</p>
                <Button onClick={this.props.onClick}>Close</Button>
            </ModalContainer>
        );
    }
}
