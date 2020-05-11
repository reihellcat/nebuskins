import React, { useEffect, useState } from 'react';
import { Button } from '@vkontakte/vkui';


const Counter = ({activePanel, setActivePanel}) => {
  const [counter, setCounter] = useState(0);
  
  const onClick = (event) => {
    setCounter(counter => counter + 1)
  }
  useEffect(() => {
    if(counter === 10) {
        setActivePanel(activePanel === "settings")
        setCounter(counter === 0)
        console.log('Ура, получилось.....')
    }
  }, [counter])

  return (
    <Button onClick={onClick} >Нажми меня!</Button>
  )
}

export default Counter;