import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import { View, Panel, PanelHeader, Button, Cell, Avatar, Div, Placeholder, Separator } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Icon16Add from '@vkontakte/icons/dist/16/add';
import Icon24Smile from '@vkontakte/icons/dist/24/smile';


class Feed extends React.Component {

render() {

    return (

<View id="feed"  activePanel="feed">
<Panel id="feed">
  <PanelHeader>Главная</PanelHeader>
  <Cell
size="l"
description="Группа сервиса"
before={<Avatar src="https://sun9-24.userapi.com/c856520/v856520080/13a615/MOxzZ-wuRFM.jpg"/>}
bottomContent={<Button before={<Icon16Add/>} onClick={() => bridge.send("VKWebAppJoinGroup", {"group_id": 95380950})}disabled>Вступить</Button>} >Nebulous</Cell>
<Div>
<Placeholder
             action={<Button before={<Icon24Smile/>} href="https://vk.com/nebulous" size="l">Группа разработчиков</Button>}>
          <img src="https://vk.com/sticker/1-20227-256" />
          <h4>Привет! К сожалению, здесь пока что ничего нет! На данный момент ты можешь поиграться только с темой приложения :(</h4>  
        </Placeholder>
        </Div>
</Panel>
</View>
    )
}
}
export default Feed;