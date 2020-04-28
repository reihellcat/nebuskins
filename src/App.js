import React from 'react';
import connect from '@vkontakte/vk-connect';
import { Epic, Tabbar, TabbarItem, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
 
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28AddSquareOutline from '@vkontakte/icons/dist/28/add_square_outline';
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';

import Settings from './panels/Settings';
import AddSkin from './panels/AddSkin';
import Feed from './panels/Feed';
import firebase from './firebase';



class App extends React.Component {
    constructor (props) {
      super(props);
 
      this.state = {
        activeStory: 'feed',
        scheme: "bright_light",
        text: '',
        activePanel: 'settings', // Ставим начальную панель
        history: ['settings']
    };
    this.onStoryChange = this.onStoryChange.bind(this);
	}
 
    onStoryChange (e) {
      this.setState({ activeStory: e.currentTarget.dataset.story })
    }   

    
 
      componentDidMount() {
        connect.subscribe(({ detail: { type, data }}) => { 
            if (type === 'VKWebAppUpdateConfig') { 
                this.setState({scheme: data.scheme})
            }
        })
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
       
    render () {
			 
			
 
      return (
            <ConfigProvider scheme={this.onThemeChange}>
        <Epic activeStory={this.state.activeStory} 
                 tabbar={
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
              text="Предложить"
            ><Icon28AddSquareOutline /></TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'settings'}
              data-story="settings"
              text="О нас"
            ><Icon28InfoOutline /></TabbarItem>
          </Tabbar>
        }>
							<Feed id="feed"  />
							<AddSkin id="add_skin"  />
              <Settings id="settings" />
        </Epic>
    </ConfigProvider>  
    )
    }
  }
export default App;




