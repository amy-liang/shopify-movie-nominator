import * as React from "react";
import { Home } from "./components/Home";
import styled from "styled-components";

const AppContainer = styled.div`
    width: 100vw;
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
