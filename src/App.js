import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';
import { Tabbar, TabbarItem, Panel, PanelHeader, Button, Card, CardScroll, Gradient, Group, Header, Cell, Switch } from '@vkontakte/vkui';
import Epic from '@vkontakte/vkui/dist/components/Epic/Epic.js';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline.js';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline.js';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline.js';
import { Link } from '@vkontakte/vkui';

const [scheme, SetScheme] = useState("bright_light");
function useEffect() => {
    connect.subscribe({ detail: { type, data }}) => {
    if (type === 'VKWebAppUpdateConfig') {
      const schemeAttribute = document.createAttribute('scheme');
      schemeAttribute.value = data.scheme ? data.scheme : 'bright_light';
      document.body.attributes.setNamedItem(schemeAttribute);
      SetScheme(data.scheme)
    }
  });
  }, []);
  function UpdateTheme() {
    if(scheme === "bright_light" || scheme === "client_light") {
    SetScheme('space_gray');
    connect.send("VKWebAppSetViewSettings", {"status_bar_style": "light", "action_bar_color": "#000"});
    }
    else if(scheme === "space_gray" || scheme === "client_dark"){
    SetScheme('bright_light');
    connect.send("VKWebAppSetViewSettings", {"status_bar_style": "dark", "action_bar_color": "#fff"});
    }
 }

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
        <Epic activeStory={this.state.activeStory} tabbar={
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
                <img height="100%" width="100%" marginTop="15px" src="https://sun9-63.userapi.com/c857020/v857020827/13946f/aMol-HoR2Fw.jpg"/>
                <Button size="xl" mode="secondary" marginTop="15px" href="https://vk.com/nebulous">Перейти в группу</Button>
              </Panel>
            </View>
            <View id="add_skin" activePanel="add_skin">
              <Panel id="add_skin">
                <PanelHeader>Добавить скин</PanelHeader>
                <Gradient>
      <Group header={
        <Header
          aside={<Link>Показать все</Link>}
          subtitle="С быстрым входом"
        >
          Другие сервисы VK
        </Header>
      }>
        <CardScroll style={{ paddingBottom: 20 }}>
          <Card mode="outline" size="s">
            <div style={{ width: 144, height: 96 }} />
          </Card>
          <Card mode="outline" size="s">
            <div style={{ width: 144, height: 96 }} />
          </Card>
          <Card mode="outline" size="s">
            <div style={{ width: 144, height: 96 }} />
          </Card>
          <Card mode="outline" size="s">
            <div style={{ width: 144, height: 96 }} />
          </Card>
        </CardScroll>
      </Group>
    </Gradient>
              </Panel>
            </View>
            <View id="settings" activePanel="settings">
              <Panel id="settings">
                <PanelHeader>Настройки</PanelHeader>
                <Cell asideContent={<Switch  />}>
            Темная тема
          </Cell>
          <Button onClick={() => UpdateTheme()}>Альтернативная тема</Button>
              </Panel>
            </View>
          </Epic>
        )
      }
    }
    export default App;