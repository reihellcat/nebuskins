import React from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';
import { Tabbar, TabbarItem, Panel, PanelHeader, Button, Cell, Switch } from '@vkontakte/vkui';
import Epic from '@vkontakte/vkui/dist/components/Epic/Epic.js';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline.js';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline.js';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline.js';
import Icon24ShareOutline from '@vkontakte/icons/dist/24/share_outline.js';


class App extends React.Component {
  constructor (props) {
      super(props);

      this.state = {
        activeStory: 'feed'
      };
      this.onStoryChange = this.onStoryChange.bind(this);
    }
  
    onStoryChange (e) {
      this.setState({ activeStory: e.currentTarget.dataset.story })
    }
  render() {
    return(
      <Epic activeStory={this.state.activeStory} SetScheme={this.state.SetScheme} tabbar={
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
              text="Настройки"
            ><Icon28SettingsOutline /></TabbarItem>
          </Tabbar>
        }>
          <View id="feed" activePanel="feed">
            <Panel id="feed">
              <PanelHeader>Главная</PanelHeader>
              <img height="100%" width="100%" margintop="15px" src="https://sun9-63.userapi.com/c857020/v857020827/13946f/aMol-HoR2Fw.jpg"/>
              <Button before={<Icon24ShareOutline/>} size="xl" mode="secondary" href="https://vk.com/nebulous">Перейти в группу</Button>
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
              <Cell asideContent={<Switch disabled/>}>
               Темная тема
        </Cell>
            </Panel>
          </View>
      </Epic>
      )
    }
  }
  export default App;