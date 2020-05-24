import React from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import {Avatar, Group, Header, PanelHeader, Panel, Cell, PanelHeaderBack} from '@vkontakte/vkui';
import "@vkontakte/vkui/dist/vkui.css";

import Icon28Users from '@vkontakte/icons/dist/28/users';
import Icon16PaletteOutline from '@vkontakte/icons/dist/16/palette_outline';
import Icon28Message from '@vkontakte/icons/dist/28/message';
import Icon24Share from '@vkontakte/icons/dist/24/share';
import Icon24Info from '@vkontakte/icons/dist/24/info';



const Settings = ({ id, go, fetchedUser, UpdateTheme, onAdmin, ShareGroup }) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack onClick={go} data-to="home"/>}>Настройки</PanelHeader>
		{fetchedUser &&
		<Group title="User Info">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description="Текущий аккаунт"
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}
		<Group title="Theme" header={<Header mode="secondary">Внешний вид</Header>}>
		<Cell before={<Icon16PaletteOutline width={24} height={24}/>} onClick={() => UpdateTheme()}>
          Сменить тему
        </Cell>
		</Group>
		<Group title="Feedback" header={<Header mode="secondary">ОБРАТНАЯ СВЯЗЬ</Header>}>
		<Cell before={<Icon28Users width={24} height={24}/>} href="https://vk.com/nebulous" description="Наша группа ВКонтакте" expandable>
            Официальное сообщество
          </Cell>
		  <Cell before={<Icon28Message width={24} height={24}/>} href="https://vk.me/nebulous" description="Любые вопросы и предложения" expandable>
            Написать разработчикам
          </Cell>
		</Group>
		<Group title="Share" header={<Header mode="secondary">ПОДЕЛИТЬСЯ С ДРУЗЬЯМИ</Header>}>
		<Cell before={<Icon24Share/>} onClick={ShareGroup} description="Рассказать друзьям" expandable>
           Поделиться ссылкой на сервис
          </Cell>
		</Group>
		<Group onClick={onAdmin} title="Info" header={<Header mode="secondary">Информация о сервисе</Header>}>
		<Cell description="Текущая версия приложения: в разработке" before={<Icon24Info/>}>
		Информационный сервис поиска<n/> скинов
          </Cell>
		</Group>
</Panel>
);

Settings.propTypes = {
	id: PropTypes.string.isRequired,
	UpdateTheme: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
  }),
}

export default Settings;