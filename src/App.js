import styled from 'styled-components';
import Dices from './components/Dices'
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wraper = styled.div`
  width: 40%;
  height: 60%;
  background: #ECECE7;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  align-items: center;
  h1{
      font-size: 3rem;
      font-weight: 500;
  }
`

const Description = styled.div`
  font-size: 1.3rem;
  width: 80%;
`
function App() {
  return (
   <Container>
    <Wraper>
        <h1>Tenzies</h1>
        <Description>
          Roll untill all dice are the same. Click each die to freeze it at its current value between rolls.
        </Description>
        
    </Wraper>
   </Container>
  );
}

export default App;
