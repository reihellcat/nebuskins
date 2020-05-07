import React from 'react';
import connect from '@vkontakte/vk-connect';
import { Epic, Tabbar, TabbarItem, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
 
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28AddSquareOutline from '@vkontakte/icons/dist/28/add_square_outline';
import Icon28Profile from '@vkontakte/icons/dist/28/profile';

import Profile from './panels/Profile/Profile';
import AddSkin from './panels/AddSkin/AddSkin';
import Feed from './panels/Feed/Feed';
import firebase from './firebase';




class App extends React.Component {
    constructor (props) {
      super(props);
 
      this.state = {
        activeStory: 'feed',
        scheme: 'space_gray',
        text: '',
        history: []
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
            ><Icon28NewsfeedOutline /></TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'add_skin'}
              data-story="add_skin" >
                <Icon28AddSquareOutline />
            </TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'profile'}
              data-story="profile"
            ><Icon28Profile /></TabbarItem>
          </Tabbar>
        }>
							<Feed id="feed"  />
							<AddSkin id="add_skin" />
              <Profile id="profile" />
        </Epic>
    </ConfigProvider>  
    )
    }
  }
export default App;




