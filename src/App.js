import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import bridge from '@vkontakte/vk-bridge';
import { View, Panel, PanelHeader, ActionSheet, PanelHeaderBack, ActionSheetItem, Epic, Placeholder, Tabbar, TabbarItem, Cell, Button, Avatar, CellButton, Div, Separator, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {platform, IOS} from '@vkontakte/vkui';

import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28AddSquareOutline from '@vkontakte/icons/dist/28/add_square_outline';
import Icon16Add from '@vkontakte/icons/dist/16/add';
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';
import Icon24Flash from '@vkontakte/icons/dist/24/flash';
import Icon16PaletteOutline from '@vkontakte/icons/dist/16/palette_outline';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28ChevronRightOutline from '@vkontakte/icons/dist/28/chevron_right_outline';
import Icon28NotificationDisableOutline from '@vkontakte/icons/dist/28/notification_disable_outline';
import Icon24NotificationCheckOutline from '@vkontakte/icons/dist/24/notification_check_outline';
import Icon32Graffiti from '@vkontakte/icons/dist/32/graffiti';
import Icon28PictureStackOutline from '@vkontakte/icons/dist/28/picture_stack_outline';



class App extends React.Component {
	constructor (props) {
	  super(props);
  
	  this.state = {
		activeStory: 'feed',
		activeModal: null,
		modalHistory: [],
		text: '',
	  snackbar: null,
	  scheme: "bright_light",
		popout: null,
		activePanel: 'feed',
    };
	

	  this.openTheme = this.openTheme.bind(this);
	  this.openNotifications = this.openNotifications.bind(this);
	  this.UpdateTheme = this.UpdateTheme.bind(this);

		this.onNavClick = this.onNavClick.bind(this);

	  this.onStoryChange = this.onStoryChange.bind(this);
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
	  openTheme () {
	  this.setState({ popout:
		<ActionSheet onClose={() => this.setState({ popout: null })}>
		  <ActionSheetItem before={<Icon32Graffiti width={28} height={28}/>} onClick={this.UpdateTheme} autoclose>
			Сменить тему
		  </ActionSheetItem>
		  {platform() === IOS && <ActionSheetItem autoclose mode="cancel">Закрыть</ActionSheetItem>}
		</ActionSheet>
	  });
	}

	openNotifications () {
		this.setState({ popout:
		  <ActionSheet onClose={() => this.setState({ popout: null })}>
			<ActionSheetItem before={<Icon24NotificationCheckOutline width={28} height={28}/>} autoclose>
			  Включить
			</ActionSheetItem>
			<ActionSheetItem before={<Icon28NotificationDisableOutline/>} autoclose>
			  Отключить
			</ActionSheetItem>
			{platform() === IOS && <ActionSheetItem autoclose mode="cancel">Закрыть</ActionSheetItem>}
		  </ActionSheet>
		});
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
	onNavClick(e) {
    const activePanel = e.currentTarget.dataset.to;
    this.setState({ activePanel });
  }
	

	render () {
		
  
	  return (
			<ConfigProvider scheme={this.state.scheme}>
		<Epic activeStory={this.state.activeStory} scheme={this.state.scheme} tabbar={
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
		  <View id="feed" scheme={this.state.scheme} activePanel="feed">
			<Panel id="feed">
			  <PanelHeader>Главная</PanelHeader>
			  <Cell
          size="l"
          description="Группа сервиса"
          before={<Avatar src="https://sun9-24.userapi.com/c856520/v856520080/13a615/MOxzZ-wuRFM.jpg"/>}
          bottomContent={<Button before={<Icon16Add/>} onClick={() => bridge.send("VKWebAppJoinGroup", {"group_id": 95380950})}disabled>Вступить</Button>} >Nebulous</Cell>
			</Panel>
		  </View>
		  <View id="add_skin" activePanel="add_skin">
			<Panel id="add_skin">
			  <PanelHeader>Предложить</PanelHeader>
			  <Div>
          <Placeholder
            icon={<Icon28PictureStackOutline width={128} height={128} />}
            header="Предложить свой скин"
	action={<Button onClick={this.onNavClick} data-to="add_skin_form" size="l">Предложить скин</Button>}
			>
            Привет! В данном разделе ты можешь предложить свой собственный скин для каталога приложения!
			Владелец каждого скина, который будет принят в каталог приложения получит от 2,500 до 5,000 
			плазмы от администраторов сообщества Nebulous.
          </Placeholder>
		  </Div>
			</Panel>
		  </View>
		  <View popout={this.state.popout} id="settings" activePanel="settings">
			<Panel id="settings">
			  <PanelHeader>О нас</PanelHeader>
			  <Div>
			<CellButton size="x1" before={<Icon24Flash width={28} height={28} />} href="https://vk.com/nebulous" >Группа ВКонтакте</CellButton>
			  </Div>
			  <Separator/>
			  <Div>
			  <Cell before={<Icon28InfoOutline />} description="Версия 1.0">Информация</Cell>
        </Div>
		<Separator />
		<Div>
	<Cell asideContent={<Icon28ChevronRightOutline />} before={<Icon16PaletteOutline width={28} height={28}/>} onClick={this.openTheme} description="Доступные темы: Тёмная, Светлая">Темы</Cell> 
	<Cell asideContent={<Icon28ChevronRightOutline />} before={<Icon28Notifications />} onClick={this.openNotifications} description="Будьте вкурсе всех событий!">Уведомления</Cell>
			</Div> 
			</Panel>
			</View>
			<Placeholder>
			<View activePanel="add_skin_form">
    <Panel id="add_skin_form">
      <PanelHeader
        left={<PanelHeaderBack />}
        
      >
        Предложить скин
      </PanelHeader>
    </Panel>
  </View>
	</Placeholder>
		</Epic>
	</ConfigProvider>	
	)
	}
  }
export default App;
