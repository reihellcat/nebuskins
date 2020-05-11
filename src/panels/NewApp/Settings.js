import React from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import {Avatar, Group, Header, PanelHeader, Panel, Cell, PanelHeaderBack, CellButton } from '@vkontakte/vkui';
import "@vkontakte/vkui/dist/vkui.css";

import Icon24Flash from '@vkontakte/icons/dist/24/flash';
import Icon16PaletteOutline from '@vkontakte/icons/dist/16/palette_outline';



const Settings = ({ id, go, fetchedUser, UpdateTheme }) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack onClick={go} data-to="home"/>}>Настройки</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Bridge">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description="Текущий аккаунт"
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}
		<Group>
		<CellButton size="x1" before={<Icon24Flash width={28} height={28} />} href="https://vk.com/nebulous" >Группа ВКонтакте</CellButton>
		</Group>
		<Group header={<Header mode="secondary">Внешний вид</Header>}>
		<Cell before={<Icon16PaletteOutline width={28} height={28}/>} onClick={() => UpdateTheme()}>
          Сменить тему
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