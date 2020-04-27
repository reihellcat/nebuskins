import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import { View, Panel, PanelHeader, CardGrid, Button, Card, Cell, Avatar, Div, Placeholder, Separator, Gallery, Group, Header, Counter, FormLayout, Text } from '@vkontakte/vkui';
import Icon16Add from '@vkontakte/icons/dist/16/add';
import Icon24Smile from '@vkontakte/icons/dist/24/smile';
import TestFeed from './TestFeed';


class Feed extends React.Component {
    constructor (props) {

        super(props);
  
        this.state = {
          slideIndex: 0
        }
      }
    
render() { 

    return (

<View id="feed"  activePanel="feed">
<Panel id="feed">
  <PanelHeader>Главная</PanelHeader>
  <Div style={{display: 'center' }}>
  <Button size="xl" style={{marginBottom: '10px', backgroundColor: '#e8f1fb', blockSize: 70 }} mode="secondary"><Text style={{ color: '#3f8ae0', fontWeight: 700, textAlign: 'left', fontSize: 20 }}>Обычные скины</Text></Button>
  <Button size="xl" after={<img src="https://image.flaticon.com/icons/svg/2767/2767984.svg" width="40px" height="40px" />} style={{marginBottom: '10px', backgroundColor: '#e1f8e8', blockSize: 70 }} mode="secondary"><Text style={{ color: '#08c648', fontWeight: 700, textAlign: 'left', fontSize: 20 }}>Питомцы</Text></Button>
  <Button size="xl" style={{marginBottom: '10px', blockSize: 70, backgroundColor: '#f6e5f9' }} mode="secondary"><Text style={{ color: '#b52dd6', fontWeight: 700, textAlign: 'left', fontSize: 20 }}>Частицы</Text></Button>
     </Div>
  {/* <Cell
size="l"
description="Группа сервиса"
before={<Avatar src="https://sun9-24.userapi.com/c856520/v856520080/13a615/MOxzZ-wuRFM.jpg"/>}
bottomContent={<Button before={<Icon16Add/>} onClick={() => bridge.send("VKWebAppJoinGroup", {"group_id": 95380950})}disabled>Вступить</Button>} >Nebulous</Cell> */}
<Div>
<Placeholder
             action={<Button before={<Icon24Smile/>} href="https://vk.com/nebulous" size="l">Группа разработчиков</Button>}>
        </Placeholder>
        <TestFeed />
        </Div>
</Panel>
</View>
    )
}
}
export default Feed;