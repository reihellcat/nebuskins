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


class App extends React.Component {
    constructor (props) {
      super(props);
 
      this.state = {
        activeStory: 'feed',
        scheme: "bright_light",
        text: '',
    };
		this.onStoryChange = this.onStoryChange.bind(this);
	}
 
    onStoryChange (e) {
      this.setState({ activeStory: e.currentTarget.dataset.story })
    }
 
      componentDidMount() {
        connect.subscribe(({ detail: { type, data }}) => { // Подписываемся на события.
            if (type === 'VKWebAppUpdateConfig') { // Получаем тему клиента.
                this.setState({scheme: data.scheme})
            }
        })
    }
 
 

 
       
    render () {
			 
			
 
      return (
            <ConfigProvider scheme={this.state.scheme}>
        <Epic activeStory={this.state.activeStory} tabbar={
          <Tabbar>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'feed'}
              data-story="feed"
              text="Новости"
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
							<Feed id="feed" activePanel="feed" />
							<AddSkin id="add_skin" activePanel="add_skin" />
              <Settings id="settings" activePanel="settings" />
        </Epic>
    </ConfigProvider>  
    )
    }
  }
export default App;




