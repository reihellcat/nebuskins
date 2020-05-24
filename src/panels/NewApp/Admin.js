import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, PanelHeaderBack, Cell, Avatar, Group, Div, Banner, Button} from '@vkontakte/vkui';
import "@vkontakte/vkui/dist/vkui.css";


const Admin = ({ id, go, fetchedUser, main_skin, onDelete }) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack onClick={go} data-to="settings"/>}>Админ панель</PanelHeader>
        {fetchedUser &&
		<Group title="User Info">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description="Добро пожаловать."
			>Приветствуем, 
				{`${fetchedUser.first_name}`}
			</Cell>
		</Group>}
        {main_skin.map(request => (
<Div key={request.id}>
 <Banner style={{ blockSize: 115 }} size="l"
        before={<Avatar size={96} mode="image" />}
        header={<React.Fragment>Предложил: {request.nickname}</React.Fragment>}
        subheader={<React.Fragment>ID игрока: {request.player_id}<br/>Категория: {request.category}</React.Fragment>}
		actions={
			<React.Fragment>
			  <Button mode="commerce">Принять</Button> 
			  <Button onClick={onDelete} mode="destructive">Отклонить</Button>
			</React.Fragment>
		  }
		   />
</Div>
))}
	</Panel>
);

Admin.propTypes = {
	id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    main_skin: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
        last_name: PropTypes.string
    })
};

export default Admin;