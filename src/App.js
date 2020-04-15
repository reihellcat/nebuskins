import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ConfigProvider from '@vkontakte/vkui/dist/components/ConfigProvider/ConfigProvider';
import '@vkontakte/vkui/dist/vkui.css';
import { Panel, PanelHeader, Tabbar, TabbarItem, Epic } from '@vkontakte/vkui';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';

import Settings from './panels/Settings';
import Main from './panels/Main';

class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
				scheme: "bright_light",
				activeStory: 'feed'
		};



}

onStoryChange = (e) => {
	this.setState({ activeStory: e.currentTarget.dataset.story })
}

    render () {
      return (
        <Epic activeStory={this.state.activeStory} scheme={this.state.scheme} tabbar={
          <Tabbar>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'feed'}
              data-story="feed"
              text="Главная"
            ><Icon28NewsfeedOutline /></TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'add_skin'}
              data-story="add_skin"
              text="Добавить скин"
            ><Icon28AddOutline /></TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'settings'}
              data-story="settings"
              label="12"
              text="Настройки"
            ><Icon28SettingsOutline /></TabbarItem>
          </Tabbar>
        }>
          <View id="feed" activePanel="feed">
            <Panel id="feed">
              <PanelHeader>Главная</PanelHeader>
							<Main />
            </Panel>
          </View>
          <View id="add_skin" activePanel="add_skin">
            <Panel id="add_skin">
              <PanelHeader>Добавить скин</PanelHeader>
            </Panel>
          </View>
          <View id="settings" activePanel="settings">
            <Panel id="settings">
						<PanelHeader>Настройки</PanelHeader>
							<Settings />
            </Panel>
          </View>
        </Epic>
      )
    }
}
  export default App;