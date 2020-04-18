import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import bridge from '@vkontakte/vk-bridge';
import { View, Panel, PanelHeader, Epic, Tabbar, TabbarItem, Snackbar, Cell, Button, Avatar, ModalCard, ModalRoot, Div, Separator, InfoRow, Switch } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28AddSquareOutline from '@vkontakte/icons/dist/28/add_square_outline';
import Icon16Add from '@vkontakte/icons/dist/16/add';
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';
import Icon56MoneyTransferOutline from '@vkontakte/icons/dist/56/money_transfer_outline';
import Icon24Flash from '@vkontakte/icons/dist/24/flash';
import Icon28Profile from '@vkontakte/icons/dist/28/profile';
import Icon16Done from '@vkontakte/icons/dist/16/done';

const blueBackground = {
	backgroundColor: 'var(--accent)'
  };
class App extends React.Component {
	constructor (props) {
	  super(props);
  
	  this.state = {
		activeStory: 'feed',
		activeModal: null,
		modalHistory: [],
		text: '',
      snackbar: null
    };
	

	  this.openBase = this.openBase.bind(this);
	  this.modalBack = () => {
		this.setActiveModal(this.state.modalHistory[this.state.modalHistory.length - 2]);
	  };
	

	  this.onStoryChange = this.onStoryChange.bind(this);
	}
  
	componentDidMount() {
		this.openBase()
	  }

	onStoryChange (e) {
	  this.setState({ activeStory: e.currentTarget.dataset.story })
	}
  
	setActiveModal(activeModal) {
		activeModal = activeModal || null;
		let modalHistory = this.state.modalHistory ? [...this.state.modalHistory] : [];
	
		if (activeModal === null) {
		  modalHistory = [];
		} else if (modalHistory.indexOf(activeModal) !== -1) {
		  modalHistory = modalHistory.splice(0, modalHistory.indexOf(activeModal) + 1);
		} else {
		  modalHistory.push(activeModal);
		}
	
		this.setState({
		  activeModal,
		  modalHistory
		});
	  };
	  openBase () {
		if (this.state.snackbar) return;
		this.setState({ snackbar:
		  <Snackbar
			layout="vertical"
			onClose={() => this.setState({ snackbar: null })}
			before={<Avatar size={24} style={blueBackground}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}
		  >
			Уведомления о подкастах включены
		  </Snackbar>
		});
	  }
	  
	

	render () {
		
  
	  return (
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
		  <View id="feed" activePanel="feed">
			<Panel id="feed">
			  <PanelHeader>Главная</PanelHeader>
			  <Cell
          size="l"
          description="Группа сервиса"
          before={<Avatar src="https://sun9-24.userapi.com/c856520/v856520080/13a615/MOxzZ-wuRFM.jpg"/>}
          bottomContent={<Button before={<Icon16Add/>} onClick={() => bridge.send("VKWebAppJoinGroup", {"group_id": 95380950}) }>Вступить</Button>} >Nebulous</Cell>
			</Panel>
		  </View>
		  <View id="add_skin" activePanel="add_skin">
			<Panel id="add_skin">
			  <PanelHeader>Предложить</PanelHeader>
			</Panel>
		  </View>
		  <View id="settings" activePanel="settings">
			<Panel id="settings">
			  <PanelHeader>О нас</PanelHeader>
			  <Div>
				  <Cell>
			<Button mode="tertiary" size="x1" before={<Icon24Flash width={28} height={28} />} href="https://vk.com/nebulous" >Группа ВКонтакте</Button>
			  </Cell>
			  </Div>
			  <Separator/>
			  <Div>
			  <Cell before={<Icon28InfoOutline />} description="Версия 1.0 (alpha)">Информация</Cell>
        </Div>
		<Separator />
		<Div>
	<Cell before={<Icon28Profile />} asideContent={<Switch disabled />} description="Недоступно">Темная тема</Cell>
			</Div>
			</Panel>
			</View>
		</Epic>
	  )
	}
  }
export default App;