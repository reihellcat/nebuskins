import React from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import {Panel, PanelHeader, CellButton, Group, Avatar, Header, PanelHeaderButton} from '@vkontakte/vkui';
import "@vkontakte/vkui/dist/vkui.css";



import Icon28GhostOutline from '@vkontakte/icons/dist/28/ghost_outline';
import Icon24Attachments from '@vkontakte/icons/dist/24/attachments';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon24Gallery from '@vkontakte/icons/dist/24/gallery';
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';
import Icon28WriteOutline from '@vkontakte/icons/dist/28/write_outline';

const Home = ({ id, go }) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderButton onClick={go} data-to="settings" ><Icon24Settings/></PanelHeaderButton>}>Каталог скинов</PanelHeader>
		{/* <Group title="Группа">
		<Cell before={<Avatar src="https://sun9-40.userapi.com/c855032/v855032297/ea70/sfIJ0RABti0.jpg" size={64} />}
          size="l" description="Сообщество игры" bottomContent={
                      <Button disabled onClick={bridge.send("VKWebAppJoinGroup", {"group_id": 95380950})} size="m">Подписаться</Button>
                  } >Nebulous</Cell>
		</Group> */}
    <Group header={<Header mode="secondary">Выберите категорию</Header>}>
      <CellButton onClick={go} data-to="def_skins" before={<Icon24Gallery />}>Обычные скины</CellButton>
      <CellButton onClick={go} data-to="pets" before={<Icon28GhostOutline width={24} height={24} />}>Питомцы</CellButton>
      <CellButton disabled before={<Icon24FavoriteOutline />}>Частицы</CellButton>
	  <CellButton onClick={go} data-to="back_theme" before={<Icon24Attachments />}>Собственный фон</CellButton>
    </Group>
	<Group>
      <CellButton onClick={go} data-to="add_skin" before={<Icon28WriteOutline  width={24} height={24} />}>Предложить скин</CellButton>
    </Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Home;