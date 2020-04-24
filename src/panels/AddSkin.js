import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { View, Panel, PanelHeader, Div, Placeholder, Button } from '@vkontakte/vkui';

import Icon28PictureStackOutline from '@vkontakte/icons/dist/28/picture_stack_outline';

class AddSkin extends React.Component {

    render () {
		
        return (
          <View id="add_skin" activePanel="add_skin">
          <Panel id="add_skin">
            <PanelHeader>Предложить</PanelHeader>
            <Div>
        <Placeholder
          icon={<Icon28PictureStackOutline width={128} height={128} />}
          header="Предложить свой скин"
  action={<Button mode="commerce" size="l">Предложить скин</Button>}
          >
          <h4>Привет! В данном разделе ты можешь предложить свой собственный скин для каталога приложения!
          Владелец каждого скина, который будет принят в каталог приложения получит от 2,500 до 5,000
          плазмы от администраторов сообщества Nebulous.</h4>
        </Placeholder>
        </Div>
          </Panel>
        </View>
        )
}
}

export default AddSkin;