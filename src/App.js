import styled from 'styled-components';
import Dices from './components/Dices'
import React, {useState, useEffect} from 'react'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

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
  background: #F5F5F5;
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

const Button = styled.button`
  width: 10rem;
  height: 4rem;
  background: #5035FF;
  border-radius: 0.75rem;
  border: none;
  color: white;
  font-size: 1.5rem;
  
` 
const ButtonWraper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  justify-content: space-evenly;
  width: 80%;
`
function App() {
  const [dices, setDices] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  function randomNumberInRange() {
    return Math.floor(Math.random() * (9 - 1 + 1)) + 1;
  }

  function allNewDice(){
    const newArray = []
    for(let i=0; i<10;i++){
      newArray.push(generateNewDie())
    }
    return newArray
  }
  
  function generateNewDie(){
    return {
        value: randomNumberInRange(),
        isHeld: false,
        id: nanoid()
    }
  }
  function rollDice(){
    setDices(prevDie => prevDie.map(die => {
      return die.isHeld ? die : generateNewDie()
    }))
   }

  function holdDice(id){
    setDices(prevDie => prevDie.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }
 
  function NewGame(){
    setDices(allNewDice())
    setTenzies(false)
  }
 useEffect(()=>{
  
  const allHeld = dices.every(die => die.isHeld)
  const firstValue = dices[0].value
  const allSameValue = dices.every(die => die.value === firstValue)


  if(allHeld && allSameValue){
    setTenzies(true)
    console.log('ez')
    
  }
 }, [dices])
 
  return (
   <Container>
    <Wraper>
        <h1>Tenzies</h1>
        <Description>
          Roll untill all dice are the same. Click each die to freeze it at its current value between rolls.
        </Description>
        <Dices dices={dices} holdDice={holdDice}/>
        <ButtonWraper>
          <Button onClick={rollDice}>Roll</Button>
          <Button onClick={NewGame}>New Game</Button>
        </ButtonWraper>
        {tenzies && <Confetti/>}
    </Wraper>
   </Container>
  );
}

export default App;
