import styled from 'styled-components';

const Container = styled.div`
    width: 4rem;
    height: 4rem;
    background: ${props => props.isHeld ? '#59E391' : '#FFFFFF'};
    margin: 6px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.3rem;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
`

function Dice(props) {
    
    return ( 
    <Container isHeld={props.isHeld}>
        {props.value}
    </Container> 
    );
}

export default Dice;