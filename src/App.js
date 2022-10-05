import styled from 'styled-components';
import Dices from './components/Dices'
import React, {useState, useEffect} from 'react'
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
  margin-top: 1rem;
` 
function App() {
  const [dices, setDices] = useState(allNewDice())
  // const [tenzies, setTenzies] = useState(false)

  function randomNumberInRange() {
    return Math.floor(Math.random() * (9 - 1 + 1)) + 1;
  }

  function allNewDice(){
    const newArray = []
    for(let i=0; i<10;i++){
      const newDie = {
        value: randomNumberInRange(),
        isHeld: false,
        id: i+1
      }
      newArray.push(newDie)
    }
    return newArray
  }
  
  function rollDice(){
    setDices(allNewDice)
   }

  function holdDice(id){
    // setDices(prevDie => {
    //   const newArray = []
    //   for (let i=0; i<10;i++){
    //     const currentDie = prevDie[i]
    //     if(currentDie.id === id){
    //       const updatedDices={
    //         ...prevDie,
    //         isHeld: true
    //       }
    //       newArray.push(updatedDices)
    //     }else{
    //       newArray.push(currentDie)
    //     }
    //   }
    //   return newArray
    // })
    
    setDices(prevDie => prevDie.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }
 

 
 
  return (
   <Container>
    <Wraper>
        <h1>Tenzies</h1>
        <Description>
          Roll untill all dice are the same. Click each die to freeze it at its current value between rolls.
        </Description>
        <Dices dices={dices} holdDice={holdDice}/>
        <Button onClick={rollDice}>Roll</Button>
    </Wraper>
   </Container>
  );
}

export default App;
