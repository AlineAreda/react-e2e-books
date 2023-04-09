
import Header from './componentes/Header';
import styled from 'styled-components';

const AppContainer = styled.div`  
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
    background-color: #3F3F3F; 

  li {
    list-style: none;
  }
`

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App
