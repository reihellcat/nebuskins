import React from 'react';
import { View, Card, CardGrid, Panel, PanelHeader, Group, Button, Div } from '@vkontakte/vkui';



class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
          <Div>
         <PanelHeader>
          Главная  
</PanelHeader>
<img src="https://sun9-63.userapi.com/c857020/v857020827/13946f/aMol-HoR2Fw.jpg" width="100%" height="100%" margintop="25px" alt="desc"/>
<Button size="xl" mode="secondary" href="https://vk.com/nebulous">Перейти в группу</Button>
    </Div>
        )
    
    }
}

export default Main;