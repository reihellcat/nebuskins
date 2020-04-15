import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ConfigProvider from '@vkontakte/vkui/dist/components/ConfigProvider/ConfigProvider';
import '@vkontakte/vkui/dist/vkui.css';
import { Panel, PanelHeader, Tabbar, TabbarItem, Epic, Button } from '@vkontakte/vkui';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';

import Settings from './panels/Settings';
import Main from './panels/Main';

class scheme extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          activePanel: 'home', // Ставим начальную панель
          history: ['home'], // Заносим начальную панель в массив историй.
          scheme: "bright_light" // Если не придет тема - ставим эту по умолчанию.
      };
  }

  goToPage(name) { // Функция, которая переносит нас на следущую панель 
      window.history.pushState({panel: name}, name); //  Создаём новую запись в истории браузера
      this.setState({
          activePanel: name,  // Меняем активную панель на second
          history: [...this.state.history, name] // Добавляем панель в историю
      })
  }

  goBack = () => { // Функция, которая переносит нас на панель назад.
      const history = this.state.history;
      if(history.length === 1) { // Если в массиве одно значение:
          connect.send("VKWebAppClose"); // отправляем connect на закрытие сервиса.
      } else if (history.length > 1) { // Если в массиве больше одного значения:
          history.pop() // удаляем последний элемент в массиве.
          this.setState({history: history, activePanel: history[history.length - 1]}) // Изменяем массив с иторией и меняем активную панель.
      }
  }

  componentDidMount() {
      connect.subscribe(({ detail: { type, data }}) => { // Подписываемся на события.
    if (type === 'VKWebAppUpdateConfig') { // Получаем тему клиента.
              this.setState({scheme: data.scheme})
          }
      })
      window.addEventListener('popstate', () => this.goBack()); //  Добавляем обработчик события изменения истории для работы аппаратных кнопок.
  }

  UpdateTheme() {
      if(this.state.scheme === "bright_light" || this.state.scheme === "client_light"){ // Если в стейте эти темы: 
          this.setState({scheme: 'space_gray'}); // меняем тему на альтернативную.
          connect.send("VKWebAppSetViewSettings", {"status_bar_style": "light", "action_bar_color": "#000"}); // Устанавливаем цвет статус бара на белый и экшен бара на черный.
} else if(this.state.scheme === "space_gray" || this.state.scheme === "client_dark") {
          this.setState({scheme: 'bright_light'}); // меняем тему на альтернативную.
          connect.send("VKWebAppSetViewSettings", {"status_bar_style": "dark", "action_bar_color": "#fff"}); // Устанавливаем цвет статус бара на черный и экшен бара на белый.
      }
   }
  }
class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
				
        activeStory: 'feed',
    };
  }

  onStoryChange = (e) => {
	this.setState({ activeStory: e.currentTarget.dataset.story })
}
    render () {
      return (
        <ConfigProvider isWebView={true} scheme={this.state.scheme}>
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
          <View id="feed"  activePanel="feed">
            <Panel  id="feed">
							<Main />
            </Panel>
          </View>
          <View id="add_skin"  activePanel="add_skin">
            <Panel  id="add_skin">
              <PanelHeader>Добавить скин</PanelHeader>
            </Panel>
          </View>
          <View id="settings"  activePanel="settings">
            <Panel  id="settings">
            <PanelHeader>Настройки</PanelHeader>
							<Settings />
            </Panel>
          </View>
        </Epic>
      </ConfigProvider>
      )
    }
}

  export default App;