import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, Button, CellButton, Group, Cell, Div, Avatar, Header, PanelHeaderButton, Text} from '@vkontakte/vkui';
import "@vkontakte/vkui/dist/vkui.css";


import Icon28GhostOutline from '@vkontakte/icons/dist/28/ghost_outline';
import Icon24Attachments from '@vkontakte/icons/dist/24/attachments';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon24Gallery from '@vkontakte/icons/dist/24/gallery';
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';
import Icon28WriteOutline from '@vkontakte/icons/dist/28/write_outline';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderButton onClick={go} data-to="settings" ><Icon24Settings/></PanelHeaderButton>}>Каталог скинов</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Bridge">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description="Добро пожаловать!"
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group title="Navigation Example">
			<Div>
				<Button disabled size="xl" level="2" onClick={go} data-to="persik">
					Пока ничего не делает
				</Button>
			</Div>
		</Group>
    <Group header={<Header mode="secondary">Выберите категорию</Header>}>
      <CellButton onClick={go} data-to="def_skins" before={<Icon24Gallery />}>Обычные скины</CellButton>
      <CellButton before={<Icon28GhostOutline width={24} height={24} />}>Питомцы</CellButton>
      <CellButton before={<Icon24FavoriteOutline />}>Частицы</CellButton>
	  <CellButton before={<Icon24Attachments />}>Собственный фон</CellButton>
    </Group>
	<Group>
      <CellButton onClick={go} data-to="add_skin" before={<Icon28WriteOutline  width={24} height={24} />}>Предложить скин</CellButton>
    </Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
	}),
};

export default Home;