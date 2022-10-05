import styled from 'styled-components';
import Dice from './Dice'

const Container = styled.div`
    width: 80%;
    height: 35%;
    margin-top: 3rem;
    display: grid;
    grid-template: auto auto / repeat(5, 1fr);
    gap: 19px;
    `

function Dices(props) {

    const newDices = props.dices.map((die) => 
        <Dice value={die.value} key={die.id} isHeld={die.isHeld}/>
    )
    
   console.log(props.dices)
    return ( 
        <Container>
            {newDices}
        </Container>
    );
}

export default Dices;