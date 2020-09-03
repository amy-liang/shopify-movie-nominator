import * as React from "react";
import { Home } from "./components/Home";
import styled from "styled-components";
import { Colors } from "./stores/Constants";

const AppContainer = styled.div`
    background-color: ${Colors.white};
    height: 100vh;
    padding: 0;
    margin: 0;
    font-family: Montserrat;
`;

class App extends React.Component {
    render() {
        return (
            <AppContainer>
                <Home />
            </AppContainer>
        );
    }
}

export default App;
